import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="weather-app-city">
            <h1 className="text-start city-name">
                {props.data.city}
            </h1>
            <div className="weather-app-date">
                <FormattedDate date={props.data.date} />
            </div>
            <p className="weather-app-details">
                <span className="text-capitalize">{props.data.description}</span><br />
                Wind: <strong id="wind">{props.data.wind} m/s</strong><br />
                Humidity: <strong id="humidity">{props.data.humidity} %</strong>
            </p>
        </div>
    );
}