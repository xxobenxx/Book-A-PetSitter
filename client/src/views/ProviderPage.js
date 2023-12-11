import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banana from '../images/banana.jpeg';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import Time from '../components/Time.js';
import {useState} from 'react';

function ProviderPage({ providers }) {
  
  const params = useParams()
  console.log(params);

  const singleProvider = providers.find(provider => provider._id === params.petsitter)
console.log(singleProvider);

const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false)
  




	return (

    
		<div class="providerContainer">
			<div class="container" >
<div class="row" >
    <div class="profile">
    <div class="panel panel-default plain profile-panel">
        <div class="panel-heading white-content p-left p-right">
           
        </div>
        <div class="panel-body">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="profile-avatar">
                    <img class="img-responsive" src={banana} alt="User" />
                    
                </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12">
                <div class="user-name">
                {singleProvider.name} {singleProvider.surname} <span class="label label-success">Pet Sitter</span>
                    
                </div>
                <div class="user-information">
                    <p> {singleProvider.description}</p>
                </div>
                <div class="profile-stats-info">
                    <a href="#/" title="Views">    <i class="glyphicon glyphicon-eye-open">  </i> <strong>2000</strong></a>
                    <a href="#/" title="Comments"> <i class="glyphicon glyphicon-comment">   </i> <strong>120</strong></a>
                    <a href="#/" title="Likes">    <i class="glyphicon glyphicon-thumbs-up"> </i> <strong>60</strong></a>
                </div>
            </div>
        </div>
        <div class="panel-footer white-content">
            <ul class="profile-info">
                <li><i class="glyphicon glyphicon-phone"></i>      {singleProvider.contactNumber}</li>
                <li><i class="glyphicon glyphicon-map-marker"></i>  {singleProvider.address}</li>
                <li><i class="glyphicon glyphicon-envelope"></i>    {singleProvider.email}</li>
                
            </ul>
        </div>
    </div>
    </div>
</div>
</div>

<div className='calendar'>
   <h1 className='header'> Calendar</h1>
   <div>
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
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
          )
   }
   <Time showTime={showTime} date={date}/> <br/>

 
  
       
  
       <button type="button" className="bknbtn1" >
         BOOK NOW
       </button>
 
       </div>


		</div>
	);
}
export default ProviderPage;