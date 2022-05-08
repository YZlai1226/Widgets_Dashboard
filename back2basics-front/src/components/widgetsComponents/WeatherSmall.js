import React, { useState, useEffect } from "react";
import axios from "axios";
import './Weather.css';

const WeatherSmall = (props) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);
  const defaultCity = 'Null Island';
  const geo = navigator.geolocation;
  const lat = props.lat;
  const lon = props.lon;

  useEffect(() => {
    if ('geolocation' in navigator) {
      getCity();
    }
    getWeather();
  }, [lat, lon]);

  const getCity = () => {
    axios.get(`https://back2basicsweatherservice.herokuapp.com/api/city/${lat}/${lon}`)
      .then(result => {
        setCity(result.data);
      })
      .catch(err => {
        console.error(err.message, 'GET CITY (front)')
      })
    }
    
  const getWeather = () => {
    axios.get(`https://back2basicsweatherservice.herokuapp.com/api/weather/${lat}/${lon}`)
      .then(result => {
        setWeather(result.data);
      })
      .catch(err => {
        console.error(err.message, 'GET WEATHER (front)')
      })
    }
    
    
  if (weather.length !== 0) {
    return (
      <div class="smallWidget weather" >
        {lat !== '0' && lon !== '0' &&
          <p class="weatherCity" >{city[0]?.name}</p>
        }
        {lat === '0' && lon === '0' &&
          <p class="weatherCity" >{defaultCity}</p>
        }
        <h1 class="weatherSmallTemp" >
          {Math.round(parseInt(weather.main.temp)) + ' °'}
        </h1>
        <p class="weatherSmallFeel" >
          feels like :
          {Math.round(parseInt(weather.main.feels_like)) + ' °'}
        </p>
        <img class="weatherSmallImg" src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'} alt={weather.weather[0].description}></img>
      </div>
    )
  };
}

export default WeatherSmall;