import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="weather-app-city">Addis Ababa</h1>
            <div className="weather-app-date">
              <span id="current-time">Tuesday, 16:25</span>
              <br />
              <span id="current-date">February 6, 2024</span>
            </div>
            <p className="weather-app-details">
              <span id="description">Few Clouds</span><br />
              Wind: <strong id="wind">4.63m/s</strong><br />
              Humidity: <strong id="humidity">27%</strong>
            </p>
          </div>
          <div className="weather-app-temperature">
            <div className="weather-app-icon" id="icon"><img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" class="weather-app-icon" alt="img-placeholder"/></div>
            <div className="weather-app-temperature-value" id="temperature-value">25</div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div class="forecast-container" id="forecast">
        <div class="each-day">
          <p>Tuesday</p>
          <div class="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" width="50px" height="50px" />
          </div>
          <div class="forecast-temp">
            <span class="forecast-temp-high">25° |</span>
            <span class="forecast-temp-low"> <strong>12°</strong></span>
          </div>
        </div>
        
        <div class="each-day">
          <p>Wednesday</p>
          <div class="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="" width="50px" height="50px" />
          </div>
          <div class="forecast-temp">
            <span class="forecast-temp-high">24° |</span>
            <span class="forecast-temp-low"> <strong>13°</strong></span>
          </div>
        </div>
        
        <div class="each-day">
          <p>Thursday</p>
          <div class="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="" width="50px" height="50px" />
          </div>
          <div class="forecast-temp">
            <span class="forecast-temp-high">24° |</span>
            <span class="forecast-temp-low"> <strong>13°</strong></span>
          </div>
        </div>
        
        <div class="each-day">
          <p>Friday</p>
          <div class="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="" width="50px" height="50px" />
          </div>
          <div class="forecast-temp">
            <span class="forecast-temp-high">20° |</span>
            <span class="forecast-temp-low"> <strong>15°</strong></span>
          </div>
        </div>
        
        <div class="each-day">
          <p>Saturday</p>
          <div class="forecast-icon">
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="" width="50px" height="50px" />
          </div>
          <div class="forecast-temp">
            <span class="forecast-temp-high">22° |</span>
            <span class="forecast-temp-low"> <strong>14°</strong></span>
          </div>
        </div>
        </div>
      </div>
    );
}