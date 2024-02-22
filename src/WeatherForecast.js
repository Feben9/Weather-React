import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Weather.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(`coordinates are ${props}`);
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "001bc651977f4b024af4d84282b0f02a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div class="row forecast">
            <div class="col ">
                <div class="text-center m-2 forecast-day">Megaday</div> 
                <div class="text-center m-3 forecast-icon">
                <WeatherIcon code="01d"/>
                </div> 
                <span class="max-temperature"> 25 </span> 
                |
                <span class="min-temperature opacity-50"> 15 </span>
            </div>
        </div>
    );
}