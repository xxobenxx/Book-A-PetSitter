import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from  '../config'
import axios from 'axios';

const ClientDashboard = ({ logout, user }) => {
  const navigate = useNavigate(); 
  console.log(user);


  const [form, setValues] = useState({
    name: '',
    surname: '',
    address: '',
    contactNumber: '',
    iAmOwnerOf: '',
    serviceType: '',
  });

const [message, setMessage] = useState("");
const [checked, setChecked] = useState(false)

const handleChange = (e) => {
  setValues({...form,[e.target.name]: e.target.value,});
};

const handleSave = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.fetch(`${URL}/auth/login`, {
      name: form.email,
      surname: form.surname,
      address: form.address,
      contactNumber: form.address,
      iAmOwnerOf: form.iAmOwnerOf,
    });

    setMessage(response.data.message);
    if (response.data.ok) {
      
      console.log("User information updated:", response.data.user);
    } else {
      console.log("Failed to update user information:", response.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
    return (
    <div className="dashboard">

      <h2>Dasboard for user with email: {user.email}</h2>

      {/* Client Form */}
      <div align="center">
      <form
      onSubmit={handleSave}
      onChange={handleChange}>

        <h1>CLIENT INFORMATION</h1>
        <label>Name:</label>
         <input type="text" />
        
        
        <label>Surname:</label>
        <input type="text" />
        
        <label>Address:</label>
        <input type="text" />
        
        <label>Contact Number:</label>
        <input type="text" />
        
        <label>I am an Owner of:</label>
        <div>
          <input type="radio" name="ownerType" value="dog" /> Dog
          <input type="radio" name="ownerType" value="cat" /> Cat
          <input type="radio" name="ownerType" value="bird" /> Bird
          <input type="radio" name="ownerType" value="reptile/amphibian/serpent" /> Reptile/Amphibian/Serpent
          <input type="radio" name="ownerType" value="banana" /> Banana
          </div>

          <button className="formButton" type="submit">save</button>
      </form>
      </div>

      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
};

export default ClientDashboard;