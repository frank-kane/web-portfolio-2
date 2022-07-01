// import logo from './logo.svg';
import './App.css'
// import {AnimatedOnScroll} from "react-animated-css-onscroll";
import ScrollAnimation from 'react-animate-on-scroll';
import NavBar from "../navbar/navbar";
import Introduction from '../introduction/introduction'
import Portfolio from '../portfolio/portfolio'
import SendEmail from '../sendEmail/sendEmail';
import laptopImage from './guyComputer.webp'
// import TestEmail from '../portfolio/testEmail';
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import React, { useState, useEffect,useRef } from 'react';

const App = () => {
  const myRef = useRef(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const portfolioRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const executeScroll = () =>{
    console.log('SCROLLLLL')
    myRef.current.scrollIntoView()

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



useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const moveImage = (scrollPosition)=>{
  var num;
  var opac;
  if (scrollPosition<1600){
    num = scrollPosition-1300
    opac = scrollPosition-1600;

  }else{
    num = 1600-1300;
    
  }
  return num;

}
  return (
    
    <div className="App">
      <div onClick={scrollToPortfolio} className='scrollPosition'>Scroll Position:{scrollPosition}:NUM:{moveImage(scrollPosition)}</div>

      {/* <div onClick={setScrollDistance()}> Click me</div> */}
      <ParallaxProvider>

      {/* {scrollPosition > 1150 && */}
      <img src={laptopImage} alt="" className='laptopImage' height={300} width={500} style={{ right:moveImage(scrollPosition),opacity:0.5}}/>
      
     {/* } */}
      

      <NavBar/>

      <div className='contentHolder'>

        
      
      <Introduction/>
      <div ref={portfolioRef}></div>
      <Portfolio />
      < SendEmail />
      <div ref={myRef}></div>
      </div>
      


      </ParallaxProvider>
      {/* <footer className='footer'></footer>     */}
    </div>
    
  );

}

export default App;
