import ScrollAnimation from 'react-animate-on-scroll';
import './portfolio.scss';
import reactIcon from './icons/reactIcon.png'
import flutterIcon from './icons/flutterIcon.png'
import cIcon from './icons/cIcon.png'
import pythonIcon from './icons/pythonIcon.png'
import javascriptIcon from './icons/javascriptIcon.png'
import htmlIcon from './icons/html5.png'
import cssIcon from './icons/cssIcon.png';
import githubIcon from './icons/githubIcon.webp'
import nodejsIcon from './icons/nodejsIcon.webp'
import sqlIcon from './icons/sqlIcon.png'
import firebaseIcon from './icons/firebaseIcon.webp'
import vscodeIcon from './icons/vscodeIcon.png'
import pillar from './pillar.webp'
import {useState} from 'react';
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import Popup from '../popup/Popup';
import profilePic4 from '../images/profilepic4.jpg'
import wheel from '../images/wheel.webp'
import '../popup/Popup.scss';
const Portfolio = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    



    const Hover = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* The component is not opaque, but opacity transitions out for 300ms */
  background-color: #efece4;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  /* When the user hovers over the component, it becomes opaque over 300ms */
  &:hover {
    opacity: 0.75;
    transition: opacity 300ms ease-in-out;
  }

  /* All children (animated text) move to default position when component is hovered over */
  &:hover > * {
    transform: translate3d(0, 0, 0);
  }
`


const AnimatedTitle = styled.h2`
  /* Transform to 50px down on load, but user doesn't see this because div this text is in is translucent  */
  transform: translate3d(0, 50px, 0);
  transition: transform 300ms ease;
  text-align: center;
  margin-bottom: 10px;
`
const AnimatedParagraph = styled.p`
  transform: translate3d(0, 50px, 0);
  transition: transform 300ms ease;
  text-align: center;
  margin-bottom: 0;
  font-size: 12px;
  font-style: italic;
`

  const [content,setContent] = useState();




    const handleMouseOver = async() => {
        // await delay(1000)
        setIsHovering(true);
      };

    

     async function setCurrentContent (contentChoice){
        if(contentChoice == 1){
          setContent(<>
            <b>Excel Scheduler</b>
            <th>Frameworks:</th>
            <table> 
              <tr key="">
              <td key="" className='rowItem' title='Python 3.9'><a href="https://www.python.org/" target='blank'> <img src={pythonIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='HTML 5'><a href="https://html.com/" target='blank'><img src={htmlIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Firebase'><a href="https://firebase.google.com/" target='blank'><img src={firebaseIcon} alt="" height={50} width={50}/></a></td>

            </tr>
              
              
            </table>
            <p>This project was a favor to a friend who was having trouble creating his workshops schedule on time. <br/>
            He needed a program where he could plug in values for dates and it would autogenerate thier schedule for them. 
            Once he tested my program he said this has the potential to save hundreds of man hours.</p>
            <br/>

            <img className='projectImage' src={wheel} alt="" height={300} width={700}/> <br/>
            <p>This project was a favor to a friend who was having trouble creating his workshops schedule on time. <br/>
            He needed a program where he could plug in values for dates and it would autogenerate thier schedule for them. 
            Once he tested my program he said this has the potential to save hundreds of man hours.</p>
            <br/>
            
            <img src={profilePic4} alt="" height='200' width='200' id='popupProfilePic' /> <br/>
            
          </>)
          togglePopup();

        }if(contentChoice == 2){
          setContent(<>
            <b>Test2</b>
            <p>Thank you so much for your interest in me. I look forward to discussing any future opportunity and will reply as soon as possible. <br/>
            If you would like to send an additional email feel free to contact me at: <br/>fkane01@manhattan.edu </p>
            <img src={profilePic4} alt="" height='200' width='200' id='popupProfilePic' /> <br/>
            
          </>)
          togglePopup();
          

        }
        
        
      }
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };






      function togglePopup() {
        if(isOpen == false){
          setIsOpen(true)
        }if(isOpen == true){
          setIsOpen(false)
        }
        console.log('POPUP Prop found')
        // setIsOpen(!isOpen);
        console.log(isOpen)
      }
//==============================================================================================================================
//==============================================================================================================================  
//==============================================================================================================================
//==============================================================================================================================
//==============================================================================================================================
//==============================================================================================================================  
    return(
        <div className="portfolioWrapper">
            
            <ScrollAnimation animateIn="fadeInLeftBig"  animateOnce={false}>
            {/* <img src={pillar} alt="" height={100} width={200} className='pillar'/> */}
            <h3 className='portfolioTitle'>Portfolio</h3>
            {/* <img src={pillar} alt="" height={100} width={200} className='pillar'/> */}
            </ScrollAnimation>
            

            <div className='portfolioTiles'>


            <ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={false}>
            <Hover onClick={()=>setCurrentContent(1)}>
    <div> Python Powered Excel Scheduler</div>
    </Hover >
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={false}>
    <Hover onClick={()=>setCurrentContent(2)}>
    <div>Hello</div>
    </Hover>
    </ScrollAnimation>
    <br/>
    <ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={false}>
    <Hover>
    <div>Hello</div>
    </Hover>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={false}>
    <Hover>
    <div>Hello</div>
    </Hover>
    </ScrollAnimation>
    <br/>
    <ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={false}>
    <Hover>
    <div>Hello</div>
    </Hover>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={false}>
    <Hover>
    <div>Hello</div>
    </Hover>
    </ScrollAnimation>


            </div>



            <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={false}>

<div className='frameworkIcons' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={reactIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={cIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={flutterIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={pythonIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={githubIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={nodejsIcon} alt="" className='icon' />
    </div>

    <br/>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={javascriptIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={cssIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={htmlIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={sqlIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={firebaseIcon} alt="" className='icon' />
    </div>
    <div className='iconHolder'>
    {/* {isHovering && <h3 className='iconName'>React </h3>} */}
        <img src={vscodeIcon} alt="" className='icon' />
    </div>
    
    
    {/* <img src={reactIcon} alt="" />
    <img src={cIcon} alt="" />
    <img src={flutterIcon} alt="" />
    <img src={pythonIcon} alt="" />
    <img src={javascriptIcon} alt="" />
    <br/>
    <img src={htmlIcon} alt="" />
    <img src={cssIcon} alt="" />
    <img src={reactIcon} alt="" />
    <img src={reactIcon} alt="" />
    <img src={reactIcon} alt="" /> */}
    
    
</div>
</ScrollAnimation>
            


        {isOpen && <Popup  content={<div>{content} <button onClick={togglePopup}>Close</button></div>  }></Popup>}
     
        </div>

    )
}

export default Portfolio;