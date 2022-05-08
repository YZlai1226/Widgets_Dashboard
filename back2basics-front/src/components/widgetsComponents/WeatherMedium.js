import React, { useState, useEffect } from "react";
import axios from "axios";
import './Weather.css';
import { format } from 'date-fns';
// import { SetMealTwoTone } from "@mui/icons-material";

const WeatherMedium = (props) => {
  //   const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);
  const [forecast, setForecast] = useState([]);
  //   const [lat, setLat] = useState('0');
  //   const [lon, setLon] = useState('0');
  const defaultCity = 'Null Island';
  const geo = navigator.geolocation;
  const lat = props.lat;
  const lon = props.lon;


  useEffect(() => {
    if ('geolocation' in navigator) {
      getCity();
    }
    getForecast();
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


  const getForecast = () => {
    axios.get(`https://back2basicsweatherservice.herokuapp.com/api/forecast/${lat}/${lon}`)
      .then(result => {
        setForecast(result.data);
      })
      .catch(err => {
        console.error(err.message, 'GET WEITHER (front)')
      })

  }

  if (forecast.length !== 0) {
    return (
      <div class="mediumWidget weather" >
        {lat !== '0' && lon !== '0' &&
          <p class="weatherCity" >{city[0]?.name}</p>
        }
        {lat === '0' && lon === '0' &&
          <p class="weatherCity" >{defaultCity}</p>
        }
        <div class="weatherMediumTable">
          <ul class="weatherMediumColumn">
            <li class="weatherMediumCase1">
              <p>{format(new Date(forecast.daily[0].dt * 1000), 'EE dd')}</p>
            </li>
            <li>
              <img class="weatherMediumImg" src={'http://openweathermap.org/img/w/' + forecast.daily[0].weather[0].icon + '.png'} alt={forecast.daily[0].weather[0].description}></img>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[0].temp.min))} °</p>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[0].temp.max))} °</p>
            </li>
          </ul>
          <ul class="weatherMediumColumn">
            <li class="weatherMediumCase1">
              <p>{format(new Date(forecast.daily[1].dt * 1000), 'EE dd')}</p>
            </li>
            <li>
              <img class="weatherMediumImg" src={'http://openweathermap.org/img/w/' + forecast.daily[1].weather[0].icon + '.png'} alt={forecast.daily[1].weather[0].description}></img>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[1].temp.min))} °</p>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[1].temp.max))} °</p>
            </li>
          </ul>
          <ul class="weatherMediumColumn">
            <li class="weatherMediumCase1">
              <p>{format(new Date(forecast.daily[2].dt * 1000), 'EE dd')}</p>
            </li>
            <li>
              <img class="weatherMediumImg" src={'http://openweathermap.org/img/w/' + forecast.daily[2].weather[0].icon + '.png'} alt={forecast.daily[2].weather[0].description}></img>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[2].temp.min))} °</p>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[2].temp.max))} °</p>
            </li>
          </ul>
          <ul class="weatherMediumColumn">
            <li class="weatherMediumCase1">
              <p>{format(new Date(forecast.daily[3].dt * 1000), 'EE dd')}</p>
            </li>
            <li>
              <img class="weatherMediumImg" src={'http://openweathermap.org/img/w/' + forecast.daily[3].weather[0].icon + '.png'} alt={forecast.daily[3].weather[0].description}></img>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[3].temp.min))} °</p>
            </li>
            <li class="weatherMediumCase">
              <p>{Math.round(parseInt(forecast.daily[3].temp.max))} °</p>
            </li>
          </ul>
        </div>
      </div>
    )
  };
}

export default WeatherMedium;