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
  services: [],
});
const [service,setService] = useState("")

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

const handleServiceClick = (index) => {
  setValues((prevState) => {
    const updatedServices = [...prevState.services];
    updatedServices.splice(index, 1);


    return { ...prevState, services: updatedServices };
  });
};

const [updated, setUpdated] = useState(false);

useEffect(() => {
  console.log(user);
fetchUser()
},[])

useEffect(() => {
  if (updated) {
    const timeout = setTimeout(() => {
      setUpdated(false);
    }, 3000);
    return () => clearTimeout(timeout); 
  }
}, [updated]);


const handleChange = (e) => {
 setValues({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
		e.preventDefault();

  try {
    let res = await axios.post(`${URL}/auth/updateUser`, {...form, ...user})
    setUpdated(true);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

}

  return (
    <div className="dashboard">
     <h2>Dasboard for pet sitter with email: {user.email}</h2>

      {/* Provider Form */}
      <div align="center">
      <form onSubmit={handleSubmit} >
      {updated && <p >Updated successfully!</p>}

      <h1>PROVIDER INFORMATION</h1>
        <label>Name:</label>
          <input value={form.name} type="text" name="name" onChange={handleChange}/>
      
        <label>Surname:</label>
          <input value={form.surname} type="text" name="surname"  onChange={handleChange}/>
  
        <label>Address:</label>
          <input value={form.address} type="text" name="address"  onChange={handleChange} />

        <label>Contact Number:</label>
          <input value={form.contactNumber} type="text" name="contactNumber" onChange={handleChange}/>
    
        <label>About:</label>
        <textarea value={form.description}  rows="5" cols="33" name="description" onChange={handleChange}>
</textarea>


        <label>Services:</label>
        <div className="select" >
        <select onChange={(e)=>setService(e.target.value)}>
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select> 


<button className="addButton" type="button" onClick={
  ()=>{
  console.log(form.services);
  let copy = [...form.services]
  copy.push({service:service, price:""})
  setValues(prevState=>({...prevState, services:copy}))
}

}>Add</button> 
<br/>
<p> Click on the service to remove</p>
      </div>

      {form.services && form.services.length > 0 && (
        <div className="services-list">
          {form.services.map((service, index) => (
            <div
              key={index}
              className="service"
              onClick={() => handleServiceClick(index)}
            >
              {service.service}
            </div>
          ))}
        </div>
      )}
    

          
         
        <button className="formButton" type="submit">save</button>
        

      </form>
      </div>
      <button className="btn" onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
};


export default ProviderDashboard;