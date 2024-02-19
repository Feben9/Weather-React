import React, { useState, useEffect } from 'react';

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(function () {
    const interval = setInterval(function () {
      const date = new Date();
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      setCurrentDate(formattedDate);
    }, 1000); 

    return function () {
      clearInterval(interval); 
    };
  }, []);

  return (
      <p>
        {currentDate}
      </p>
  );
}

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <p>{day}, {hours}:{minutes}</p>
      <CurrentDate />
    </div>
  );
}
