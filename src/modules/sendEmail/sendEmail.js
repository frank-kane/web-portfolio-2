import './sendEmail.scss';
import React, { useState,useRef } from 'react';
// import { send } from 'emailjs-com';
import{ send, init } from '@emailjs/browser';
import sendArrow from '../images/sendArrow.png'
import indeedIcon from '../images/indeed2.webp'
import instaIcon from '../images/insta.png'
import linkedInIcon from '../images/linkedin.png'
import Popup from '../popup/Popup';
import '../popup/Popup.scss';
import profilepic4 from '../images/profilepic4.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

init("ANNdWnd1Kk-RNpuBx");



const SendEmail = ()=>{
    const el1 = useRef();
  
  
    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
  
    
    const [toSend, setToSend] = useState({
      from_name: '',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e) => {
      e.preventDefault();
      send(
        'service_h9jg5ag',
        'template_nltwc5v',
        toSend,
        'ANNdWnd1Kk-RNpuBx'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
  
        togglePopup();
    };
  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
    return (
        <div className='sendEmailWrapper'>

<ScrollAnimation animateIn="fadeInLeftBig"  animateOnce={false} className='formWrapper'>
      
      <div  className='formContainer' reference={el1}>
        <form onSubmit={onSubmit}>
        <div ><h2 id='emailTitle'> If you would like to contact me, please feel free to reach out.</h2></div>
    <input
      type='text'
      name='from_name'
      placeholder='Name'
      value={toSend.from_name}
      onChange={handleChange}
      id='nameInput'
    /><br/>
    <input
      type='text'
      name='reply_to'
      placeholder='Your Email'
      value={toSend.reply_to}
      onChange={handleChange}
      id='emailInput'
    /><br/>
    <textarea
      type='text'
      name='message'
      placeholder='Your Message'
      value={toSend.message}
      onChange={handleChange}
      id='messageInput'
    /><br/>
  
  
  
    
    <button type='submit' id='sendButton'> <img src={sendArrow} alt="" id='sendArrow'/></button>
    
    <br/>
  
  
  
  <a href="www.linkedin.com/in/frank-kane-2471b9149"> <img  id='socialMediaPic' src={linkedInIcon} alt="" width="100" height="100"/></a>
    <a href="https://my.indeed.com/p/frankk-xvxytmw"> <img  id='socialMediaPic' src={indeedIcon} alt="" width="100" height="100"/></a>
   <a href="https://www.instagram.com/codingwithkane/"> <img id='socialMediaPic' src={instaIcon} alt="" width="100" height="100"/></a>
   
      
      
      
    
    
  </form>
  {/* <input
        type="button"
        value="Click to Open Popup"
        onClick={togglePopup}
      /> */}
  
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
        
      </div >
      </ScrollAnimation>
      </div>
      
      
    );
  
  }

  export default SendEmail;