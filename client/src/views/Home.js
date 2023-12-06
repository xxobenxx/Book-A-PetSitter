import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { URL } from  '../config'
import axios from "axios";


<Navbar />
const Home = () => {
    const [providers, setProviders] = useState([]);
  
    const handleBookNow = async () => {
      try {
        const response = await axios.post(`${URL}/auth/getProviders`);
        const data = response.data;
  
        if (data.ok) {
          setProviders(data.providers);
          
        } else {
          console.error("Failed to fetch providers:", data.error);
        }
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };
  
    return (
      <div className={"mainContainer"}>
       
  
        <button type="button" className="btn" onClick={handleBookNow}>
          Book now
        </button>
  
        <div className="providers">
      <h2 style={{color: 'white'}}>Providers</h2>
      </div>
        {providers.map((provider) => (
          <div key={provider._id} style={{color: 'white'}}>
           {provider.name} 
          </div>
        ))}
      </div>
    );
  };

  export default Home;



