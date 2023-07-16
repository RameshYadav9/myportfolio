import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import {useRef} from 'react';
import emailjs from 'emailjs-com'


const Contact = (e) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j1wdroz', 'template_s8lksyp', form.current, 'qjHyfb5iLgHgTQGtO')
    e.target.reset()
      
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className='contact__option'>
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            
            <h4>Email</h4>
            <h5>ramesh174723@gmail.com</h5>
            <a href="mailto:ramesh174723@gmail.com">send a message</a>

            
          </article>
          <article className="contact__option">
            <FaWhatsapp  className='contact__option-icon'/>
            
            <h4>Whatsapp</h4>
            <h5>+918795806164</h5>
            <a href="https://api.whatsapp.com/send?phone+918795806164">send a message</a>

            
          </article>
        </div>
        {/* =========end of contact section */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>

          <button type="submit" className='btn btn-primary'> Send Message</button>

        </form>
      </div>

    </section>
  )
}

export default Contact