import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);

    function handleResponse(response) {
        //console.log(response.data);
        //axios.interceptors.response.use((error: AxiosError) => { if (Axios.isCancel(error)) { throw new axios.Cancel('Operation canceled by the user.'); } });
        //return Promise.reject(console.log('Token inválido. Entre novamente.'))
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) {
            return (
                <div>
                    <form>
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." class="search-form entry"></input>
                            <input type="submit" value="Search" className="search-form button btn col-9">Search</input>
                            <button className="btn col-9 btn-primary">Home</button>
                        </div>
                    </form>
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
                            <div className="weather-app-icon" id="icon">
                                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" class="weather-app-icon" alt="img-placeholder"/>
                            </div>
                            <div className="weather-app-temperature-value" id="temperature-value">
                                {temperature}
                            </div>
                            <div className="weather-app-unit">
                                °C
                            </div>
                        </div>
                    </div>  
                </div>               
            );
    } else {
        let city = "Addis Ababa";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=616b14cbd38253313b3b8852fa77335d&units=metric`;
        //const apiKey = "616b14cbd38253313b3b8852fa77335d";
        //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse); 
        
        //return ("Loading...");
    }
    
    
    
}