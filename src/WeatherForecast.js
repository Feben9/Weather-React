import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weather.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function day() {
        let date = new Date(forecast[0].dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    if (loaded) {
        console.log(forecast);
        return (
        <div class="row forecast">
            <div class="col ">
                <div class="text-center m-2 forecast-day">{day()}</div> 
                <div class="text-center m-3 forecast-icon">
                    <WeatherIcon code={forecast[0].weather[0].icon}/>
                </div> 
                <span class="max-temperature"> {Math.round(forecast[0].temp.max)}° </span> 
                |
                <span class="min-temperature opacity-50"> {Math.round(forecast[0].temp.min)}° </span>
            </div>
        </div>
    );
    } else {
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiKey = "001bc651977f4b024af4d84282b0f02a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);        
    }
    
}