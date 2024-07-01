import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { URL } from  '../config'
import axios from "axios";
import BookNowResults from './BookNowResults';
import bckgrndImg from '../images/nataliia-kvitovska-dKvtLHDH5A0-unsplash.jpg';



<Navbar />
const Home = ({providers, setProviders}) => {
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
       
      <div 
      className={"mainContainer"} 
      style={{
        backgroundImage: `url(${bckgrndImg})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '10px'
      }}
    >
       
  
       <button type="button" className="bknbtn" onClick={handleBookNow}>
         BOOK NOW
       </button>
 
       <div className="providers">
    
     </div>
     {showResults && <BookNowResults providers={providers} />}
       
       
     </div>
   );
 };
 
  export default Home;



     