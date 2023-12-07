import React from "react";
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

<Navbar />
const BookNowResults = ({ providers }) => {

  return (
    <div className="book-now-results">
      <h2 style={{color: 'white'}}>Pet Sitters Around You:</h2 >
      {providers.map((provider) => (
        
        
         
          <div className="list" style={{ color: 'white' }}>
            <Link to={`/provider/petsitter`} key={provider._id}><p>{provider.name} {provider.surname}</p>
            </Link> 
            <ul>
              {provider.services && provider.services.map((service, index) => (
                <li key={index}>{service.service}</li>
              ))}
            </ul>
          </div>
       
      ))}
    </div>
  );
};

export default BookNowResults;