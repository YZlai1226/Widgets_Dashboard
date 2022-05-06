import React, { useState, useEffect } from "react";

import CocktailsLarge from './../widgetsComponents/cocktails/CocktailsLarge';
import CocktailsSmall from './../widgetsComponents/cocktails/CocktailsSmall';
import WeatherSmall from '../widgetsComponents/WeatherSmall';
import WeatherMedium from './../widgetsComponents/WeatherMedium';
import MangaLargeSafe from './../widgetsComponents/Manga_Widget/Manga_widget_large';
import MangaMedium from './../widgetsComponents/Manga_Widget/Manga_widget_medium';
import MangaLargeXxx from './../widgetsComponents/Manga_Widget/Manga_widget_XXX';
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
            <CocktailsLarge/>
            <WeatherMedium lat={lat} lon={lon} />
            <WeatherSmall lat={lat} lon={lon} />
            <CocktailsSmall />
            <WeatherSmall />
            <MangaLargeSafe />
            <MangaMedium />
            <Widget7 />
            <Widget8 />
            <Widget9 />
        </div>
    )
};

export default WidgetsManager;