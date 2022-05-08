import React, { useState, useEffect, useContext } from "react";

import CocktailsLarge from './../widgetsComponents/cocktails/CocktailsLargeV2';
import CocktailsSmall from './../widgetsComponents/cocktails/CocktailsSmall';
import WeatherSmall from '../widgetsComponents/WeatherSmall';
import WeatherMedium from './../widgetsComponents/WeatherMedium';
import MangaLargeSafe from './../widgetsComponents/Manga_Widget/MangaLarge';
import MangaMedium from '../widgetsComponents/Manga_Widget/MangaMedium';
import NewsTechMedium from './../widgetsComponents/NewsTechMedium';
import TodosLarge from "../widgetsComponents/todos/TodosLarge";
import TodosSmall from './../widgetsComponents//todos/TodosSmall';
import NewsHealthMedium from './../widgetsComponents/NewsHealthMedium';
import './widgetsManager.css';
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import { Responsive, WidthProvider } from "react-grid-layout";
import AuthContext from "./../../context/AuthProvider.js";
import axios from './../../api/axios.js';


const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetsManager = (props) => {
  const [lat, setLat] = useState('0');
  const [lon, setLon] = useState('0');
  const { auth, setAuth } = useContext(AuthContext);
  const [widgetsList, setWidgetsList] = useState([]);

  const savedUserId = localStorage.getItem('userId');
  const userId = JSON.parse(savedUserId);


  useEffect(() => {
    getPosition();
  }, [auth]);

  const getPosition = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      })
    }
  }


  const layout = [
    { i: "CocktailsLarge", x: 0, y: 0, w: 2, h: 2 },
    { i: "WeatherMedium", x: 2, y: 0, w: 2, h: 1 },
    { i: "WeatherSmall", x: 2, y: 1, w: 1, h: 1 },
    { i: "CocktailsSmall", x: 3, y: 1, w: 1, h: 1 },
    { i: "MangaLargeSafe", x: 4, y: 0, w: 2, h: 2 },
    { i: "MangaMedium", x: 2, y: 2, w: 2, h: 1 },
    { i: "NewsTechMedium", x: 4, y: 3, w: 2, h: 1 },
    { i: "TodosLarge", x: 0, y: 4, w: 4, h: 4 },
    { i: "TodosSmall", x: 1, y: 4, w: 1, h: 1 },
  ];

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");

    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
  };
  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  const deleteWidget = (e) => {
    console.log('userId is ', props.userId)
    console.log('currentValue is ', e.currentTarget.value)
    if (props.userId) {
      axios.put(`/api/users/remove_widget/${props.userId}`,
      {
        widgets: e.currentTarget.value
      })
      .then(res => {
        props.onChange(res.data)
        console.log('res is', res.data)

      })
    }

  }

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={getLayouts()}
      breakpoints={{ lg: 1640, dd: 1435, md: 1230, mm: 1025, sm: 825, xs: 625, xxs: 410 }}
      cols={{ lg: 8, dd: 7, md: 6, mm: 5, sm: 4, xs: 3, xxs: 2 }}
      rowHeight={205}
      width={1845}
      onLayoutChange={handleLayoutChange}
      isResizable={false}
      allowOverlap={false}
    >

      {props.widgetsList && props.widgetsList?.includes('6276f655d18fda222534fc40') &&
        <div key="CocktailsLarge" >
          <CocktailsLarge />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="6276f655d18fda222534fc40">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('6276f918d18fda222534fc56') &&
        <div key="WeatherMedium">
          <WeatherMedium
            lat={lat}
            lon={lon}
          />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="6276f918d18fda222534fc56">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('627240af1c275db0c9a48c71') &&
        <div key="WeatherSmall">
          <WeatherSmall
            lat={lat}
            lon={lon}
          />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="627240af1c275db0c9a48c71">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('627240741c275db0c9a48c69') &&
        <div key="CocktailsSmall">
          <CocktailsSmall />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="627240741c275db0c9a48c69">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('627240941c275db0c9a48c6d') &&
        <div key="MangaLargeSafe">
          <MangaLargeSafe />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="627240941c275db0c9a48c6d">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('627240a11c275db0c9a48c6f') &&
        <div key="MangaMedium">
          <MangaMedium />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="627240a11c275db0c9a48c6f">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('6276f6f1d18fda222534fc4c') &&
        <div key="NewsTechMedium">
          <NewsTechMedium />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="6276f6f1d18fda222534fc4c">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('6276f713d18fda222534fc50') &&
        <div key="TodosLarge">
          <TodosLarge />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="6276f713d18fda222534fc50">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('6276f6f6d18fda222534fc4e') &&
        <div key="NewsHealthMedium">
          <NewsHealthMedium />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="6276f6f6d18fda222534fc4e">x</button>
          }
        </div>
      }

      {props.widgetsList && props.widgetsList?.includes('6276f71ed18fda222534fc52') &&
        <div key="TodosSmall">
          <TodosSmall />
          {props.deleteButtons === true &&
            <button class="deleteButton" onClick={(e) => {deleteWidget(e)}} value="6276f71ed18fda222534fc52">x</button>
          }
        </div>
      }
    </ResponsiveGridLayout>
  )
};

export default WidgetsManager;