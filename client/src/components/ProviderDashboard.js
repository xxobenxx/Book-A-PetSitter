import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from  '../config'
import axios from 'axios';


const ProviderDashboard = ({ logout,user }) => {
const navigate = useNavigate(); 

const [form, setValues] = useState({
  name: '',
  surname: '',
  address: '',
  contactNumber: '',
  description: '',
  services: '',
});

const [message, setMessage] = useState("");
const [checked, setChecked] = useState(false)

const fetchUser = async() =>{
  try {
    let res = await axios.post(`${URL}/auth/getCurrent`, user)
   if(res.data.ok){
    setValues(
      {
        name: res.data.user?.name || '',
        surname: res.data.user?.surname || '',
        address: res.data.user?.address || '',
        contactNumber: res.data.user?.contactNumber || '',
        description: res.data.user?.description || '',
        services: res.data.user?.services || [],
      }
    )
   }
  } catch (error) {
    console.log(error);
  }
}


useEffect(() => {
  console.log(user);
fetchUser()
},[])


const update = async() => {
  try {
    let res = await axios.post(`${URL}/auth/updateUser`, {...form, ...user})
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="dashboard">
     
      <h2>Dasboard for user with email: {user.email}</h2>

      {/* Provider Form */}
      <div align="center">
      <form
     >

      <h1>PROVIDER INFORMATION</h1>
        <label>Name:</label>
          <input value={form.name} type="text" />
      
        <label>Surname:</label>
          <input value={form.surname} type="text" />
  
        <label>Address:</label>
          <input value={form.address} type="text" />

        <label>Contact Number:</label>
          <input value={form.contactNumber} type="text" />
    
        <label>About:</label>
        <textarea value={form.description}  rows="5" cols="33">
</textarea>

<div>
        <label>Services:</label>

        <select>
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
<button type="button">Add</button>
</div>
{form.services && form.services.length > 0 && form.services.map(service=>(
  <div className="service">{service.service}</div>
)) }
        {/* <div >
          <input type="radio" name="serviceType" value="dog" /> Dog
          <input type="radio" name="serviceType" value="cat" /> Cat
          <input type="radio" name="ownerType" value="bird" /> Bird
          <input type="radio" name="ownerType" value="reptile/amphibian/serpent" />  Reptile/Amphibian/Serpent 
          <input type="radio" name="ownerType" value="banana" /> Banana
          </div> */}
          
         
        <button className="formButton" type="submit">save</button>
        

      </form>
      </div>
      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
};

export default ProviderDashboard;