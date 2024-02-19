import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    //const apiKey = "616b14cbd38253313b3b8852fa77335d";
    const apiKey= "001bc651977f4b024af4d84282b0f02a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                  <input type="search" placeholder="Enter a city..." class="entry w-100" onChange={handleCityChange} />
              </div>
              <div className="col-3">
                  <input type="submit" value="Search" className="btn button w-75" />
              </div>
            </div>
          </form>
          <div className="weather-app-data">
              <WeatherInfo data={weatherData} />
              <div className="weather-app-temperature">
                  <div className="icon">
                    <WeatherIcon code={weatherData.icon} size={120}/>
                  </div>
                  <div className="temperature-value">
                    {Math.round(weatherData.temperature)}
                  </div>
                  <div className="unit">
                      °C
                  </div>
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
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
                  alt=""
                  width="50px"
                  height="50px"
                />
              </div>
              <div class="forecast-temp">
                <span class="forecast-temp-high">24° |</span>
                <span class="forecast-temp-low"> <strong>13°</strong></span>
              </div>
            </div>

            <div class="each-day">
              <p>Thursday</p>
              <div class="forecast-icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                  alt=""
                  width="50px"
                  height="50px"
                />
              </div>
              <div class="forecast-temp">
                <span class="forecast-temp-high">24° |</span>
                <span class="forecast-temp-low"> <strong>13°</strong></span>
              </div>
            </div>

            <div class="each-day">
              <p>Friday</p>
              <div class="forecast-icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                  alt=""
                  width="50px"
                  height="50px"
                />
              </div>
              <div class="forecast-temp">
                <span class="forecast-temp-high">20° |</span>
                <span class="forecast-temp-low"> <strong>15°</strong></span>
              </div>
            </div>

            <div class="each-day">
              <p>Saturday</p>
              <div class="forecast-icon">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                  alt=""
                  width="50px"
                  height="50px"
                />
              </div>
              <div class="forecast-temp">
                <span class="forecast-temp-high">22° |</span>
                <span class="forecast-temp-low"> <strong>14°</strong></span>
              </div>
            </div>
          </div>  
        </div>               
    );
  } else {
      search();
      return "Loading...";
  }
}