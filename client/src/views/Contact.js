import React, { useState } from "react";
import emailjs from "emailjs-com";
import bckgrndImg4 from '../images/daniel-lincoln-L4HuAYnIZkY-unsplash.jpg';



const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const templateParams = {
      name: name,
      email: email,
      message: message,
  };

    const onSubmit = (e) => {
      e.preventDefault();
      
      // Send email using EmailJS
      emailjs.send("service_thq5msm", "template_0lcovyq", templateParams,'qWfnP5c_MOuFQN9Sx' )
            .then(function (response) {
                console.log('Email sent successfully:', response);
                alert('🌟 Thank you for reaching out! We will do our best to respond to your inquiry promptly. ');
            })
            .catch(function (error) {
                console.error('Error sending email:', error);
               
            });
    };



  return (
    <div className="contactContainer"
    style={{
      backgroundImage: `url(${bckgrndImg4})`,
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      margin: '10px'
    }}>

      <div className="titleContainer">
      Contact Us
    </div>
    <br />


      <form onSubmit={onSubmit}>

      <div className={"inputContainer"}>
    <input
    type="name"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className={"inputBox"}
    />
    </div>
    <br />


    <div className={"inputContainer"}>
    <input
    type="email"
    placeholder="Enter email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className={"inputBox"}
    />
    </div>
    <br />


    <div className={"inputContainer"}>
    <input
    type="message"
    placeholder="Enter your message here"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
    className={"messageBox"}
    />
    </div>
    <br />
        
    <div className={"inputContainer"}>
    <button className="btn" type=" submit">Submit</button>
    </div>
    </form>
    </div>
  )
}
export default ContactForm