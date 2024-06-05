import React from "react";
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

const BookNowResults = ({ providers }) => {

  return (
    <div className="book-now-results-container">
      
      <div className="book-now-results">
        <h2 style={{color: 'white'}}>Pet Sitters Around You:</h2 >
        <div className="providers-list">
          {providers.map((provider) => (
            <div className="provider-info" key={provider._id}>
              <Link to={`/provider/${provider._id}`}>
                <p>{provider.name} {provider.surname}</p>
              </Link> 
              <h3 style={{color: 'white'}}>Services:</h3 >
              <ul>
                {provider.services && provider.services.map((service, index) => (
                  <li key={index}>{service.service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookNowResults;
