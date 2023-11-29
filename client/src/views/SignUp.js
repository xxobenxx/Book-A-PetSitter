import React, { useState } from "react";



const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup email:", email, "password:" , password);
    };

    return (
    <div className={"mainContainer"}>

        <div className={"titleContainer"}>
    Sign up
    </div>
    <br />
    
    <form onSubmit={handleSignup}>

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
    type="password"
    placeholder="Enter password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required 
    className={"inputBox"}
    />
    </div>
    <br />

    <div className={"inputContainer"}>
    <input
    type="password"
    placeholder="Confirm password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
    className={"inputBox"}
    
/>
    </div>
    <br />

    <div >
    <button type=" submit">Submit</button>
    </div>
    </form>
    </div>
    );
    };


export default Signup;




