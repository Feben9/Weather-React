import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="weather-app-city">
            <h1 className="weather-app-city" id="weather-app-city">{props.data.city}
            </h1>
            <div className="weather-app-date">
                <div id="current-time"><FormattedDate date={props.data.date} /></div>
                <span id="current-date">February 6, 2024</span>
            </div>
            <p className="weather-app-details">
                <span id="description">{props.data.description}</span><br />
                Wind: <strong id="wind">{props.data.wind}m/s</strong><br />
                Humidity: <strong id="humidity">{props.data.humidity}%</strong>
            </p>
        </div>
    );
}