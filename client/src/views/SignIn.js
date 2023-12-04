import React, { useState } from "react";
import axios from "axios";
import { URL } from  '../config'
import { useNavigate } from "react-router-dom";
// import jwt from 'jsonwebtoken'
// react-scripts from version 5 shipped with react 18 is not supporting jsonwebtoken so we need to use alternative like jose to decode the JWT token in the client
import * as jose from "jose";



const Signin = (props) => {

    const [form, setValues] = useState({
      email: "",
      password: "",
    });
  


    const [message, setMessage] = useState("");
    
    
    const navigate = useNavigate();
    const handleChange = (e) => {
      setValues({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
     
      e.preventDefault();


      try {
        const response = await axios.post(`${URL}/auth/login`, {
          email: form.email.toLowerCase(),
          password: form.password,
      
        });
        setMessage(response.data.message);
        if (response.data.ok) {
          
          let decodedToken = jose.decodeJwt(response.data.token);
          
          console.log(
            "Email extracted from the JWT token after login: ",
            decodedToken.userEmail
          );
          setTimeout(() => {
            props.login(response.data.token);
       
            navigate(`/dashboard/${response.data.type}`);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
       >

         <div className={"mainContainer"}>

         <div className={"titleContainer"}>
             <div>Hello</div>
        </div>
         <br />

         <div className={"inputContainer"}>
             <input
             name="email"
             type="email"
                required
                placeholder="your email here"
                className={"inputBox"} />
        </div>
        <br />

        <div className={"inputContainer"}>
            <input
            name="password"
            type="password"
                required
                placeholder="your password here"
                className={"inputBox"} />
            
        </div>
        <br />

        <div className={"inputContainer"}>
        <button type="submit">login</button>
        </div>
        
        </div>
      </form>
    )
}
    
        export default Signin;
