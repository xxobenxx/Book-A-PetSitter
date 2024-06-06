import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banana from '../images/banana.jpeg';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import Time from '../components/Time.js';

function ProviderPage({ providers }) {
  
  const params = useParams();
  console.log(params);

  const singleProvider = providers.find(provider => provider._id === params.petsitter);
  console.log(singleProvider);

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [likes, setLikes] = useState(singleProvider.likes || 60); 

  const handleBooking = () => {
    if (selectedTime) {
      alert(`Thank you for booking a pet sitter, Your appointment is set to ${selectedTime} on ${date.toDateString()}`);
    } else {
      alert('Please select a time for your appointment.');
    }
  };

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div className="providerContainer">

      <div className="container">
        <div className="card">
          <div className="col-lg-8 col-md-8 col-xs-12">
            <div className="panel panel-default plain profile-panel">
              <div className="panel-heading white-content p-left p-right">
              </div>
              <div className="panel-body" style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="profile-avatar">
                    <img className="img-responsive" src={banana} alt="User" style={{ width: '50vh' }} />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="user-name">
                    {singleProvider.name} {singleProvider.surname} <span className="label label-success">Pet Sitter</span>
                  </div>
                  <div className="user-information">
                    <p>{singleProvider.description}</p>
                  </div>
                  <div className="profile-stats-info">
                    <a href="#/" title="Views"><i className="glyphicon glyphicon-eye-open"></i> <strong>200</strong></a>
                    <a href="#/" title="Comments"><i className="glyphicon glyphicon-comment"></i> <strong>120</strong></a>
                    <a href="#/" title="Likes"onClick={handleLike}><i className="glyphicon glyphicon-thumbs-up"></i> <strong>{likes}</strong></a>
                  </div>
                </div>
              </div>
              <div className="panel-footer white-content">
                <ul className="profile-info">
                  <li><i className="glyphicon glyphicon-phone"></i> {singleProvider.contactNumber}</li>
                  <li><i className="glyphicon glyphicon-map-marker"></i> {singleProvider.address}</li>
                  <li><i className="glyphicon glyphicon-envelope"></i> {singleProvider.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="calendar">
        <h1 className="header"> Calendar</h1>
        <div>
          <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
        </div>
        {date.length > 0 ? (
          <p>
            <span>Start:</span>
            {date[0].toDateString()}
            &nbsp;
            &nbsp;
            <span>End:</span>{date[1].toDateString()}
          </p>
        ) : (
          <p>
            <span>Default selected date:</span>{date.toDateString()}
          </p>
        )}
        <Time showTime={showTime} date={date} setSelectedTime={setSelectedTime} className="time" /><br />

        <button type="button" className="bknbtn1" onClick={handleBooking}>
          BOOK NOW
        </button>
        
      </div>
    </div>
  );
}

export default ProviderPage;
