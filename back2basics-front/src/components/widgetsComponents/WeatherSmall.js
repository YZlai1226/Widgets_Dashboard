import React, { useState, useEffect } from "react";
import axios from "axios";
import { SetMealTwoTone } from "@mui/icons-material";

const WeatherSmall = (props) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);
  const [lat, setLat] = useState('0');
  const [lon, setLon] = useState('0');
  const defaultCity = 'Null Island';
  const geo = navigator.geolocation;

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if ('geolocation' in navigator) {
      getCity();
    }
    getWeather();
  }, [lat, lon]);

  const getCity = () => {
    axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=a0eae4a3de90f7e4b2a15fb25efa3def`)
      .then(result => {
        setCity(result.data);
      })
      .catch(err => {
        console.error(err.message, 'GET WEITHER')
      })
  }

  const getWeather = () => {
    // if (lat !== '0' && lon !== '0') {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a0eae4a3de90f7e4b2a15fb25efa3def`)
      .then(result => {
        setWeather(result.data);
        console.log('weather is: ', result.data)
      })
      .catch(err => {
        console.error(err.message, 'GET WEITHER')
      })
    // }
  }

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      })
    }
  }
  if (weather.length !== 0) {
    return (
      <div class="smallWidget">
        {lat !== '0' && lon !== '0' &&
          <p>{city[0]?.name}</p>
        }
        {lat === '0' && lon === '0' &&
          <p>{defaultCity}</p>
        }
        <h1>
          {Math.round(parseInt(weather.main.temp))}
        </h1>
        <p>
          feels like :
          {Math.round(parseInt(weather.main.feels_like))}
        </p>
        <img src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'} alt={weather.weather[0].description}></img>
      </div>
    )
  };
}

export default WeatherSmall;