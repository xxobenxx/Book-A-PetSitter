import React, { useState } from "react";
import axios from 'axios';
import { URL } from  '../config'
import {useNavigate} from 'react-router-dom'


const Signup = (props) => {
	const [ form, setValues ] = useState({
		email: '',
		password: '',
		password2: ''
	});
	const [ message, setMessage ] = useState('');

	const navigate=useNavigate()

	const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		debugger
		e.preventDefault();
		try {
			const response = await axios.post(`${URL}/provider/register`, {
				email: form.email,
				password: form.password,
				password2: form.password2
			});
			setMessage(response.data.message);
			//console.log(response)
			if (response.data.ok) {
				setTimeout(() => {
					navigate('/login');
				}, 2000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
        <form onSubmit={handleSubmit} onChange={handleChange}>

        <div className={"mainContainer"}>

                 <div className={"titleContainer"}>
             <div>Sign up</div>
             </div>
             <br />

		
			
        <div className={"inputContainer"}>
    <input
    name="email"
     type="email"
     placeholder="Enter your email"
     required
     className={"inputBox"} 
     />
     </div>
     <br />   
        
        <div className={"inputContainer"}>
     <input
     name="password"
     type="password"
     placeholder="Enter password"
     required 
     className={"inputBox"}
     />
     </div>
     <br />
            
       <div className={"inputContainer"}>
     <input
     name="password2"
     type="password"
     placeholder="Repeat password"
     required 
     className={"inputBox"}
     />
     </div>
     <br />

   
     <button type="submit">Submit</button>

     </div>
		</form>
        
	)
}

   


export default Signup;


// const Signup = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const handleSignup = (e) => {
//     e.preventDefault();
//     console.log("Signup email:", email, "password:" , password);
//     };



//     return (
//     <div className={"mainContainer"}>

//         <div className={"titleContainer"}>
//     Sign up
//     </div>
//     <br />

    
    
//     <form onSubmit={handleSignup}>

//     <div className={"inputContainer"}>
//     <input
//     type="email"
//     placeholder="Enter email"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     required
//     className={"inputBox"}
//     />
//     </div>
//     <br />

//     <div className={"inputContainer"}>
//     <input
//     type="password"
//     placeholder="Enter password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     required 
//     className={"inputBox"}
//     />
//     </div>
//     <br />

//     <div className={"inputContainer"}>
//     <input
//     type="password"
//     placeholder="Confirm password"
//     value={confirmPassword}
//     onChange={(e) => setConfirmPassword(e.target.value)}
//     required
//     className={"inputBox"}
    
// />
//     </div>
//     <br />

//     <div >
//     <button type=" submit">Submit</button>
//     </div>

//     </form>
//     </div>
//     );
//     };