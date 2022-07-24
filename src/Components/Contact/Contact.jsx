import React , { useRef, useState }from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact=()=> {
 
    const form = useRef();
    
    const[done,setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xckb4na', 'template_snkbn6o', form.current, 'ArkiEzf-dJOZUWvd6')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };







  return (
  <div className="contact-form">
    <div className="w-left">
        <div className="awesome">
            <span>Get in touch</span>
            <span>Contact Me</span>
        </div>
        <div className="blur s-blur1" style={{background:'#abf1ff94'}}></div>
    </div>
    <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name="user_email" className='user' placeholder='Email' />
            <textarea name="message" id="" placeholder='Message' className='user'></textarea>
            <input type="submit" value="Send" className="button s-button" />
            <span>{done && "Thanks for Contacting me! "}</span>
            <div className="blur c-blur1"
            style={{background:'var(--purple'}}></div>
        </form>
    </div>
  </div>
  )
}

export default Contact