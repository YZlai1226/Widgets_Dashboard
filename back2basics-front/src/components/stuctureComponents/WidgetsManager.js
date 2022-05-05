<<<<<<< HEAD
import React, { useState, useEffect } from "react";

import Widget1 from './../widgetsComponents/Widget1';
=======
import CocktailsLarge from './../widgetsComponents/cocktails/CocktailsLarge';
>>>>>>> 343048838fa33e4172534c60112980b570ad2f77
import Widget2 from './../widgetsComponents/Widget2';
import CocktailsSmall from './../widgetsComponents/cocktails/CocktailsSmall';
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
        getPosition();
      }, []);

    const getPosition = () => {
        
          if (navigator.geolocation  ) {
            navigator.geolocation.getCurrentPosition((position) => {
              setLat(position.coords.latitude);
              setLon(position.coords.longitude);
            })
        }
      }

    return (
        <div class="widgetsManager">
            <CocktailsLarge class="smallWidget" />
            <Widget2 />
<<<<<<< HEAD
            <WeatherMedium lat={lat} lon={lon} />
            <WeatherSmall lat={lat} lon={lon} />
            {/* <Widget5 />
            <Widget6 />
            <Widget7 />
            <Widget8 />
            <Widget9 /> */}

=======
            <CocktailsSmall />
            <WeatherSmall />
            <Widget4 />
            <Widget5 />
            <Widget6 />
            <Widget7 />
            <Widget8 />
            <Widget9 />
>>>>>>> 343048838fa33e4172534c60112980b570ad2f77
        </div>
    )
};

export default WidgetsManager;