import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, showUnit] = useState("celsius");

    function showCelsius(event) {
        event.preventDefault();
        showUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        showUnit("fahrenheit");
    }
    

    if (unit === "celsius") {
        return (
        <div>
            <span>
                {Math.round(props.temp)}
            </span>
            <span className="unit">
                °C | {" "}
                <a href="/" onClick={showFahrenheit}>
                    °F
                </a>
            </span>
        </div>
    );
    } else {
        let fahrenheit = (props.temp * 9) / 5 + 32;
        return (
        <div>
            <span>
                {Math.round(fahrenheit)}
            </span>
            <span className="unit">
                <a href="/" onClick={showCelsius}>
                    °C {" "}
                </a> 
                | °F
            </span>
        </div>
    );
    }
    
}