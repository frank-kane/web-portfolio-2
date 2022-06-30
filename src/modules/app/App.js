// import logo from './logo.svg';
import './App.css'
// import {AnimatedOnScroll} from "react-animated-css-onscroll";
import ScrollAnimation from 'react-animate-on-scroll';
import NavBar from "../navbar/navbar";
import Introduction from '../introduction/introduction'
import Portfolio from '../portfolio/portfolio'
import SendEmail from '../sendEmail/sendEmail';
import TestEmail from '../portfolio/testEmail';

function App() {
  return (
    
    <div className="App">
      <NavBar/>

      <div className='contentHolder'>
      
      <Introduction/>
      <Portfolio/>
      <SendEmail/>
      {/* <TestEmail/> */}

      </div>
      



          
    </div>
    
  );

}

export default App;
