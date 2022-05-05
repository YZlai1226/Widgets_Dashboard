import React, { useState, useEffect } from "react";

import Widget1 from './../widgetsComponents/Widget1';
import Widget2 from './../widgetsComponents/Widget2';
import WeatherSmall from '../widgetsComponents/WeatherSmall';
import WeatherMedium from './../widgetsComponents/WeatherMedium';
import Widget5 from './../widgetsComponents/Widget5';
import Widget6 from './../widgetsComponents/Widget6';
import Widget7 from './../widgetsComponents/Widget7';
import Widget8 from './../widgetsComponents/Widget8';
import Widget9 from './../widgetsComponents/Widget9';
import './widgetsManager.css';

const WidgetsManager = (props) => {
    const [lat, setLat] = useState('0');
    const [lon, setLon] = useState('0');

    useEffect(() => {
        console.log('DEBUG1')
        getPosition();
      }, []);

    const getPosition = () => {
        console.log('DEBUG2', navigator.geolocation)
        
          if (navigator.geolocation  ) {
        console.log('DEBUG3')
            navigator.geolocation.getCurrentPosition((position) => {
              console.log('position is: ', position)
              setLat(position.coords.latitude);
              setLon(position.coords.longitude);
            })
              console.log('navigator.geolocation is: ', navigator.geolocation)
              console.log('navigator.geolocation.length is: ', navigator.geolocation.length)
        }
      }

    return (
        <div class="widgetsManager">
            <WeatherMedium lat={lat} lon={lon} />
            <Widget1 />
            <Widget2 />
            <WeatherSmall lat={lat} lon={lon} />
            {/* <Widget5 />
            <Widget6 />
            <Widget7 />
            <Widget8 />
            <Widget9 /> */}

        </div>
    )
};

export default WidgetsManager;