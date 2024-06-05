import React, { useState } from 'react';
import '../App.css';

const time = ['08:00', '09:00', '10:00', '14:00', '15:00', '16:00', '17:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

function Times({ showTime, date, setSelectedTime }) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    const selectedTime = e.target.innerText;
    setInfo(true);
    setEvent(selectedTime);
    setSelectedTime(selectedTime);  // Update the selected time in the parent component
  }

  if (!showTime) {
    return null;
  }

  return (
    <div className="times">
      {time.map(times => (
        <div key={times}>
          <button onClick={(e) => displayInfo(e)}> {times} </button>
        </div>
      ))}
      <div>
        {info ? `Your appointment is set to ${event} on ${date.toDateString()}` : null}
      </div>
    </div>
  );
}

export default Times;
