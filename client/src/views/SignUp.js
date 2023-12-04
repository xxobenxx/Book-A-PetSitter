import React, { useState } from "react";
import axios from 'axios';
import { URL } from  '../config'
import {useNavigate} from 'react-router-dom'
import SwitchButton from "../components/SwitchButton";






const Signup = (props) => {

  const [ form, setValues ] = useState({
		email: '',
		password: '',
		password2: ''
	});

  const [ message, setMessage ] = useState(''); 
  const [checked, setChecked] = useState(false)

  const navigate=useNavigate()
  const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

  const handleSubmit = async (e) => {
		debugger
		e.preventDefault();

    try {
			const response = await axios.post(`${URL}/auth/register`, {
				email: form.email,
				password: form.password,
				password2: form.password2,
        type: !checked ? 'client' : 'provider'
			});
			setMessage(response.data.message);
			if (response.data.ok) {
				setTimeout(() => {
					navigate('/login');
				}, 2000);
			}
		} catch (error) {
			console.log(error);
		}
	};

  const handleSwitchChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
          <form onSubmit={handleSubmit} onChange={handleChange}>
          <div className={"mainContainer"}>
                  <div className={"titleContainer"}>
              <div>Sign up</div>
              </div>
              <br />

              <div className="switchContainer">
            <span>Client</span>
            <SwitchButton
              boolean={checked}
              toggleFunction={handleSwitchChange}
              isDisabled={false}
            />
            
            <span>Provider</span>
          </div>	
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







// const [checked, setChecked] = useState(false)

//   const handleSwitchChange = () => {
//     setChecked((prevState) => !prevState);
//   };

// 	const [ form, setValues ] = useState({
// 		email: '',
// 		password: '',
// 		password2: ''
// 	});
// 	const [ message, setMessage ] = useState('');

// 	const navigate=useNavigate()

// 	const handleChange = (e) => {
// 		setValues({ ...form, [e.target.name]: e.target.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		debugger
// 		e.preventDefault();
// 		try {
//       const response = await axios.post(`${URL}/auth/register`, {
// 				email: form.email,
// 				password: form.password,
// 				password2: form.password2,
//         type: checked? 'client' : 'provider'
//       });
// 			// const response = await axios.post(`${URL}/${checked ? 'client' : 'provider'}/register`, {
// 			// 	email: form.email,
// 			// 	password: form.password,
// 			// 	password2: form.password2
// 			// });
// 			setMessage(response.data.message);
// 			//console.log(response)
// 			if (response.data.ok) {
// 				setTimeout(() => {
// 					navigate('/login');
// 				}, 2000);
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	return (
//         <form onSubmit={handleSubmit} onChange={handleChange}>

//         <div className={"mainContainer"}>

//                  <div className={"titleContainer"}>
//              <div>Sign up</div>
//              </div>
//              <br />


//         <div className="switchContainer">
              
//               <span>Client </span>
//           <SwitchButton
//             boolean={checked}
//             toggleFunction={handleSwitchChange}
//             isDisabled={false}
//           />
//           <span> Provider</span>
//         </div>
//         <br />
		
			
//         <div className={"inputContainer"}>
//     <input
//     name="email"
//      type="email"
//      placeholder="Enter your email"
//      required
//      className={"inputBox"} 
//      />
//      </div>
//      <br />   
        
//         <div className={"inputContainer"}>
//      <input
//      name="password"
//      type="password"
//      placeholder="Enter password"
//      required 
//      className={"inputBox"}
//      />
//      </div>
//      <br />
            
//        <div className={"inputContainer"}>
//      <input
//      name="password2"
//      type="password"
//      placeholder="Repeat password"
//      required 
//      className={"inputBox"}
//      />
//      </div>
//      <br />

   
//      <button type="submit">Submit</button>
     

//      </div>
// 		</form>
        
// 	)
