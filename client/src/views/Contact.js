import React, { useState } from "react";



const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", email, "Message:" , message);
    };



  return (
    <div className="contactContainer">

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
        
    <div >
    <button type=" submit">Submit</button>
    </div>
    </form>
    </div>
  )
}
export default ContactForm