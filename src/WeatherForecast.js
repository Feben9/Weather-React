import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weather.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

     useEffect(() => {
        setLoaded(false);
     } , [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function day(x) {
        let date = new Date(forecast[x].dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    if (loaded) {
        return (
        <div class="row forecast">
            <div class="col ">
                <div class="text-center m-2 forecast-day">{day(1)}</div> 
                <div class="text-center m-3 forecast-icon">
                    <WeatherIcon code={forecast[1].weather[0].icon}/>
                </div> 
                <span class="max-temperature"> 
                    {Math.round(forecast[1].temp.max)}° 
                </span>  
                {" "}|{" "}
                <span class="min-temperature opacity-50"> 
                    {Math.round(forecast[1].temp.min)}° 
                </span>
            </div>
            <div class="col ">
                <div class="text-center m-2 forecast-day">{day(2)}</div> 
                <div class="text-center m-3 forecast-icon">
                    <WeatherIcon code={forecast[2].weather[0].icon}/>
                </div> 
                <span class="max-temperature"> 
                    {Math.round(forecast[2].temp.max)}° 
                </span> 
                {" "}|{" "}
                <span class="min-temperature opacity-50"> 
                    {Math.round(forecast[2].temp.min)}° 
                </span>
            </div>
            <div class="col ">
                <div class="text-center m-2 forecast-day">{day(3)}</div> 
                <div class="text-center m-3 forecast-icon">
                    <WeatherIcon code={forecast[3].weather[0].icon}/>
                </div> 
                <span class="max-temperature"> 
                    {Math.round(forecast[3].temp.max)}° 
                </span> 
                {" "}|{" "}
                <span class="min-temperature opacity-50"> 
                    {Math.round(forecast[3].temp.min)}° 
                </span>
            </div>
            <div class="col ">
                <div class="text-center m-2 forecast-day">{day(4)}</div> 
                <div class="text-center m-3 forecast-icon">
                    <WeatherIcon code={forecast[4].weather[0].icon}/>
                </div> 
                <span class="max-temperature"> 
                    {Math.round(forecast[4].temp.max)}° 
                </span> 
                {" "}|{" "}
                <span class="min-temperature opacity-50"> 
                    {Math.round(forecast[4].temp.min)}° 
                </span>
            </div>
            <div class="col ">
                <div class="text-center m-2 forecast-day">{day(5)}</div> 
                <div class="text-center m-3 forecast-icon">
                    <WeatherIcon code={forecast[5].weather[0].icon}/>
                </div> 
                <span class="max-temperature"> 
                    {Math.round(forecast[5].temp.max)}° 
                </span> 
                {" "}|{" "}
                <span class="min-temperature opacity-50"> 
                    {Math.round(forecast[5].temp.min)}° 
                </span>
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