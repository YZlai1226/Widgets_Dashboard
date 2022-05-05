import React, { useState, useEffect } from "react";
import axios from "axios";
import './WeatherSmall.css';
// import { SetMealTwoTone } from "@mui/icons-material";

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
    axios.get(`http://localhost:3001/api/city/${lat}/${lon}`)
      .then(result => {
        setCity(result.data);
        console.log('city is: ', result.data)
      })
      .catch(err => {
        console.error(err.message, 'GET CITY (front)')
      })
    }
    
  const getWeather = () => {
    // if (lat !== '0' && lon !== '0') {
    axios.get(`http://localhost:3001/api/weather/${lat}/${lon}`)
      .then(result => {
        setWeather(result.data);
        console.log('weather is: ', result.data)
      })
      .catch(err => {
        console.error(err.message, 'GET WEITHER (front)')
      })
      // }
    }
    
    
  if (weather.length !== 0) {
    return (
      <div class="smallWidget weatherSmall" >
        {lat !== '0' && lon !== '0' &&
          <p class="weatherSmallCity" >{city[0]?.name}</p>
        }
        {lat === '0' && lon === '0' &&
          <p class="weatherSmallCity" >{defaultCity}</p>
        }
        <h1 class="weatherSmallTemp" >
          {Math.round(parseInt(weather.main.temp))}
        </h1>
        <p class="weatherSmallFeel" >
          feels like :
          {Math.round(parseInt(weather.main.feels_like))}
        </p>
        <img class="weatherSmallImg" src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'} alt={weather.weather[0].description}></img>
      </div>
    )
  };
}

export default WeatherSmall;