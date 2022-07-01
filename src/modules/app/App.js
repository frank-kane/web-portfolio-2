// import logo from './logo.svg';
import './App.css'
// import {AnimatedOnScroll} from "react-animated-css-onscroll";
import ScrollAnimation from 'react-animate-on-scroll';
import NavBar from "../navbar/navbar";
import Introduction from '../introduction/introduction'
import Portfolio from '../portfolio/portfolio'
import SendEmail from '../sendEmail/sendEmail';
import deskMan from './guyComputer.webp'
import profilepic4 from '../images/profilepic4.jpg'
// import TestEmail from '../portfolio/testEmail';
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import React, { useState, useEffect,useRef } from 'react';
import wheel from './wheel.webp'
import  { ScrollRotate } from 'react-scroll-rotate';
import Popup from '../popup/Popup';
import '../popup/Popup.scss';
import buildingPic from './buildingPic.gif'
import codingGif from './codingGif4.gif'


const App = () => {
  const emailRef = useRef(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const portfolioRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollToEmail = () =>{
    console.log('SCROLLLLL')
    emailRef.current.scrollIntoView()

  } 
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const scrollToPortfolio = () =>{
    console.log('SCROLLLLL')
    portfolioRef.current.scrollIntoView()

  }
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

const togglePopup = () => {
  console.log('POPUP Prop found')
  setIsOpen(!isOpen);
}



useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


const moveDeskMan = (scrollPosition)=>{
  var num;
  var opac;
  if (scrollPosition>1000 && scrollPosition<1500){
    num = scrollPosition-1300

  }else if(scrollPosition > 1500){
    num = 200

  }
  return num;

}

const moveBuilding = (scrollPosition)=>{
  var num;

  if (scrollPosition<3000){
    num = 3000-scrollPosition+2200

  }
  return num;

}


  return (
    
    <div className="App">
      <div className='scrollPosition'>Scroll Position:{scrollPosition}:NUM:</div>

      <ParallaxProvider>

      {/* {scrollPosition > 1300 && */}
      <img src={codingGif} alt="" className='deskMan' height={300} width={500}  style={{ right:moveDeskMan(scrollPosition)}}/>
      
      {/* } */}

{/* <img src={buildingPic} alt="" className='buildingPic' height={800} width={500} style={{ top:moveBuilding(scrollPosition)}}/> */}
{/* <img src={building2} alt="" className='buildingPic' height={800} width={500} style={{ top:moveBuilding(scrollPosition)}}/>       */}

{scrollPosition > 2000 &&
  <img src={buildingPic} alt="" className='buildingPic' height={800} width={500}/>    
}

      <NavBar scrollToPortfolio = {scrollToPortfolio} scrollToEmail={scrollToEmail}/>

      <div className='contentHolder'>

      <Introduction/>
      <div ref={portfolioRef}></div>
      <Portfolio />


      < SendEmail togglePopup = {togglePopup} />
      
      </div>

      {isOpen && <Popup
        content={<>
          <b>Email Sent!</b>
          <p>Thank you so much for your interest in me. I look forward to discussing any future opportunity and will reply as soon as possible. <br/>
          If you would like to send an additional email feel free to contact me at: <br/>fkane01@manhattan.edu </p>
          <img src={profilepic4} alt="" height='200' width='200' id='popupProfilePic' /> <br/>
          <button onClick={togglePopup}>Close</button>
        </>}
        // handleClose={togglePopup}
      />}
      
      <div className='footer' ref={emailRef}><p> © 2021 - 2022 | Designed & coded by Fank Kane (aka KandyKane)</p></div>

      </ParallaxProvider>
        
    </div>
    
  );

}

export default App;
