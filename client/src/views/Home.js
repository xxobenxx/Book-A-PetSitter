import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { URL } from  '../config'
import axios from "axios";
import BookNowResults from './BookNowResults';




<Navbar />
const Home = () => {
    const [providers, setProviders] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleBookNow = async () => {
      try {
        const response = await axios.post(`${URL}/auth/getProviders`);
        const data = response.data;
  
        if (data.ok) {
          setProviders(data.providers);
          setShowResults(true);
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
    
     </div>
     {showResults && <BookNowResults providers={providers} />}
       
       
     </div>
   );
 };
 
  export default Home;



     