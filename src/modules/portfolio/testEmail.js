import ScrollAnimation from 'react-animate-on-scroll';
import './portfolio.scss';
import reactIcon from './icons/reactIcon.png'
import flutterIcon from './icons/flutterIcon.png'
import cIcon from './icons/cIcon.png'
import pythonIcon from './icons/pythonIcon.png'
import javascriptIcon from './icons/javascriptIcon.png'
import htmlIcon from './icons/html5.png'
import cssIcon from './icons/cssIcon.png';
import {useState} from 'react';
import styled from "styled-components";
const TestEmail = () =>{
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


    const handleMouseOver = async() => {
        // await delay(1000)
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    return(
        <div className="portfolioWrapper">

            <div className='portfolioTiles'>


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
        <img src={flutterIcon} alt="" className='icon' />
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
            

     
        </div>

    )
}

export default TestEmail;