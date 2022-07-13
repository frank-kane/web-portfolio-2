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
import pythonSchedulerDemo from './videos/python-scheduler-demo.mp4'
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
    opacity: 1;
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
            <b  id='inner-title' >Excel Scheduler</b>
            <th>Frameworks:</th>
            <table> 
              <tr key="">
              <td key="" className='rowItem' title='Python 3.9'><a href="https://www.python.org/" target='blank'> <img src={pythonIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Github'><a href="https://github.com/" target='blank'><img src={githubIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='VS Code'><a href="https://code.visualstudio.com/" target='blank'><img src={vscodeIcon} alt="" height={50} width={50}/></a></td>

            </tr>
              
              
            </table>
            <th>Highlighted Concepts:</th>
            <table id='portfolio-table'> 
              <ul>
                <li>Python Development</li>
                <li>GUI Integration</li>
                <li>Excel File Manipulation</li>
                <li>Active Loading Displays</li>
                <li>Desktop Development</li>
              </ul>
              
              
            </table>
            <p id='portfolio-desciption'>This project was a favor to a friend who was having trouble creating his workshops schedule on time. <br/>
            He needed a program where he could plug in values for dates and it would autogenerate thier schedule for them. 
            Once he tested my program he said this has the potential to save hundreds of man hours.</p>
            <br/>

            

            
            {/* <video width="800" height="490" controls>
              <source src={pythonSchedulerDemo} type="video/mp4"></source>
            </video> */}
            <iframe className='portfolio-video' src="https://drive.google.com/file/d/1PHbJYXcrGKLRx5y5H8kqxVxWPEzXnPR0/preview" width="800" height="480" ></iframe>
            <br/>

            
            <a href="https://github.com/Kandy-Kane/curtis_program" target='blank'>Github Link</a> <br/>
            <a href="https://github.com/Kandy-Kane/curtis_program/archive/refs/heads/master.zip">Github Repo Download</a> <br/>
          </>)
          togglePopup();

        }
        if(contentChoice == 2){
          setContent(<>
            <b id='inner-title' >Manhattan College Roommate Finder</b>
            <th>Frameworks:</th>
            <table> 
              <tr key="">
              <td key="" className='rowItem' title='Python 3.9'><a href="https://flutter.dev/" target='blank'> <img src={flutterIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='HTML 5'><a href="https://html.com/" target='blank'><img src={htmlIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Firebase'><a href="https://firebase.google.com/" target='blank'><img src={firebaseIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Github'><a href="https://github.com/" target='blank'><img src={githubIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='VS Code'><a href="https://code.visualstudio.com/" target='blank'><img src={vscodeIcon} alt="" height={50} width={50}/></a></td>

            </tr>
              
              
            </table>

            <th>Highlighted Concepts:</th>
            <table id='portfolio-table'>
              <ul>
                <li className='listItem'>Mobile Development</li>
                <li className='listItem'>Signup/Login System</li>
                <li className='listItem'>Authentication</li>
                <li className='listItem'>Database Integration</li>
              </ul>
              
              
            </table>
            <p id='portfolio-desciption'>This was my capstone at Manhattan College and our group decided to create a roommate finder app for incoming college students. <br/>
            The entire project was made in FLutter, is crossplatform, and is a fullstack application. The backend database and security was created
            using Firebase which happens to pair quite easily with Flutter. This project contains the greatest amount of common software developer techniques and
            is my most detailed application to date. </p>

           
            
            <br/>
            
            {/* <video width="320" height="240" controls>
              <source src="movie.mp4" type="video/mp4"></source>
            </video><br/> */}

            <iframe src="https://drive.google.com/file/d/1uQqXkS-SYDgwSjdj25IOViKDB_CNoTuC/preview" width="800" height="480" ></iframe>   <br/>
            
            <a href="https://github.com/Kandy-Kane/web-portfolio-2" target='blank'>Github Link</a> <br/>
            <a href="https://github.com/Kandy-Kane/web-portfolio-2/archive/refs/heads/master.zip">Github Repo Download</a> <br/>
          </>)
          togglePopup();
          

        }
        if(contentChoice == 3){
          setContent(<>
            <b id='inner-title'>Project Jojo+</b>
            <th>Frameworks:</th>
            <table id='portfolio-table'> 
              <tr key="">
              <td key="" className='rowItem' title='Flutter'><a href="https://flutter.dev/" target='blank'> <img src={flutterIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Github'><a href="https://github.com/" target='blank'><img src={githubIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='VS Code'><a href="https://code.visualstudio.com/" target='blank'><img src={vscodeIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Firebase'><a href="https://firebase.google.com/" target='blank'><img src={firebaseIcon} alt="" height={50} width={50}/></a></td>

            </tr>
              
              
            </table >

            <th>Highlighted Concepts:</th>
            <table id='portfolio-table'>
              <ul>
                <li className='listItem'>Mobile Development</li>
                <li className='listItem'>Interactive Sound/Video</li>
                <li className='listItem'>Google Play Store Deployment</li>
                <li className='listItem'>Google Play Ads</li>
              </ul>
              
              
            </table>
            <p id='portfolio-desciption'>This was supposed to be a goof request from a friend, however it quickly turned into 
            my own personal passion project to familarize myself with mobile programming. The application is deployed to 
            Google Play Store and ended up getting over 13k downloads and is still growing. </p>

            
            <br/>
            
            <iframe src="https://drive.google.com/file/d/1abKSsN-ICxCI2LAn1teeAh1p6AwTbt0U/preview" width="800" height="480" ></iframe> <br/>

            
            <a href="https://play.google.com/store/apps/details?id=com.kandykane.project_stands&hl=en_US&gl=US" target='blank'>Google Play Store</a> <br/>
            <a href="https://github.com/Kandy-Kane/project_stands" target='blank'>Github Link</a> <br/>
            <a href="https://github.com/Kandy-Kane/project_stands/archive/refs/heads/master.zip">Github Repo Download</a> <br/>
            
          </>)
          togglePopup();
          

        }
        if(contentChoice == 4){
          setContent(<>
            <b id='inner-title'>MoMa MapReduce</b>
            <th>Frameworks:</th>
            <table id='portfolio-table'> 
              <tr key="">
              <td key="" className='rowItem' title='Python 3.9'><a href="https://www.python.org/" target='blank'> <img src={pythonIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='HTML 5'><a href="https://html.com/" target='blank'><img src={htmlIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Firebase'><a href="https://firebase.google.com/" target='blank'><img src={firebaseIcon} alt="" height={50} width={50}/></a></td>

            </tr>
              
              
            </table>

            <th>Highlighted Concepts:</th>
            <table id='portfolio-table'>
              <ul>
                <li className='listItem'>Big Data Development</li>
                <li className='listItem'>Kubernetes</li>
                <li className='listItem'>AWS Deployment</li>
                <li className='listItem'>Linux Analysis</li>
              </ul>
              
              
            </table>
            <p id='portfolio-desciption'>This was one of my first big projects at Manhattan College. The goal of this project was to
            create a program that analysis' a big chunk of data utilizing the Map Reduce method (minimum 100k lines). Our group decided to do our project on 
            the Mueseum of Modern Art. Once our program runs it intakes every piece in the meuseum in json, and collects certain
            information such as the artists age, gender, ethinicity, city, date created, and so on. We then combine these numbers to learn
            for example how old the average artist was, whether the majority is male or female, and what country contributed the 
            most art.   </p>

            
            <br/>
            
            <iframe src="https://drive.google.com/file/d/1abKSsN-ICxCI2LAn1teeAh1p6AwTbt0U/preview" width="800" height="480" ></iframe> <br/>


            <a href="https://github.com/Kandy-Kane/MoMa-MapReduce-Project" target='blank'>Github Link</a> <br/>
            <a href="https://github.com/Kandy-Kane/MoMa-MapReduce-Project/archive/refs/heads/main.zip">Github Repo Download</a> <br/>
            
          </>)
          togglePopup();
          

        }
        if(contentChoice == 5){
          setContent(<>
            <b id='inner-title'>Manhattan College Roommate Finder</b>
            <th>Frameworks:</th>
            <table id='portfolio-table'> 
              <tr key="">
              <td key="" className='rowItem' title='Python 3.9'><a href="https://www.python.org/" target='blank'> <img src={pythonIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='HTML 5'><a href="https://html.com/" target='blank'><img src={htmlIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Firebase'><a href="https://firebase.google.com/" target='blank'><img src={firebaseIcon} alt="" height={50} width={50}/></a></td>

            </tr>
              
              
            </table>

            <th>Highlighted Concepts:</th>
            <table id='portfolio-table'>
              <ul>
                <li className='listItem'>Mobile Development</li>
                <li className='listItem'>Signup/Login System</li>
                <li className='listItem'>Authentication</li>
                <li className='listItem'>Database Integration</li>
              </ul>
              
              
            </table>
            <p id='portfolio-desciption'>This was my capstone at Manhattan College and our group decided to create a roommate finder app for incoming college students. <br/>
            The entire project was made in FLutter, is crossplatform, and is a fullstack application. The backend database and security was created
            using Firebase which happens to pair quite easily with Flutter. This project contains the greatest amount of common software developer techniques and
            is my most detailed application to date. </p>
            
            <br/>
            
            <video width="320" height="240" controls>
              <source src="movie.mp4" type="video/mp4"></source>
            </video><br/>

            <a href="https://github.com/Kandy-Kane/web-portfolio-2" target='blank'>Github Link</a> <br/>
            <a href="https://github.com/Kandy-Kane/web-portfolio-2/archive/refs/heads/master.zip">Github Repo Download</a> <br/>
            
          </>)
          togglePopup();
          

        }
        if(contentChoice == 6){
          setContent(<>
            <b id='inner-title'>Manhattan College Roommate Finder</b>
            <th>Frameworks:</th>
            <table id='portfolio-table'> 
              <tr key="">
              <td key="" className='rowItem' title='Python 3.9'><a href="https://www.python.org/" target='blank'> <img src={pythonIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='HTML 5'><a href="https://html.com/" target='blank'><img src={htmlIcon} alt="" height={50} width={50}/></a></td>
              <td key="" className='rowItem' title='Firebase'><a href="https://firebase.google.com/" target='blank'><img src={firebaseIcon} alt="" height={50} width={50}/></a></td>

            </tr>
              
              
            </table>

            <th>Highlighted Concepts:</th>
            <table id='portfolio-table'>
              <ul>
                <li className='listItem'>Mobile Development</li>
                <li className='listItem'>Signup/Login System</li>
                <li className='listItem'>Authentication</li>
                <li className='listItem'>Database Integration</li>
              </ul>
              
              
            </table>
            <p id='portfolio-desciption'>This was my capstone at Manhattan College and our group decided to create a roommate finder app for incoming college students. <br/>
            The entire project was made in FLutter, is crossplatform, and is a fullstack application. The backend database and security was created
            using Firebase which happens to pair quite easily with Flutter. This project contains the greatest amount of common software developer techniques and
            is my most detailed application to date. </p>
            
            <br/>
            
            <video width="320" height="240" controls>
              <source src="movie.mp4" type="video/mp4"></source>
            </video><br/>

            <a href="https://github.com/Kandy-Kane/web-portfolio-2" target='blank'>Github Link</a> <br/>
            <a href="https://github.com/Kandy-Kane/web-portfolio-2/archive/refs/heads/master.zip">Github Repo Download</a> <br/>
            
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
    <div>Manhattan College Capstone</div>
    </Hover>
    </ScrollAnimation>
    <br/>
    <ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={false}>
    <Hover onClick={()=>setCurrentContent(3)}>
    <div>Mobile App For Fun</div>
    </Hover>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={false}>
    <Hover onClick={()=>setCurrentContent(4)}>
    <div>MoMA Analysis Project</div>
    </Hover>
    </ScrollAnimation>
    <br/>
    <ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={false}>
    <Hover onClick={()=>setCurrentContent(5)}>
    <div>Hello</div>
    </Hover>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={false}>
    <Hover onClick={()=>setCurrentContent(6)}>
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