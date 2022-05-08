import React, { useState } from 'react';
import weatherSmall from './../../images/weatherSmall.png';
import weatherMedium from './../../images/weatherMedium.png';
import cocktailSmall from './../../images/cocktailSmall.png';
import cocktailBig from './../../images/cocktailBig.png';
import bigWidget from './../../images/bigWidget.png';
import mediumWidget from './../../images/mediumWidget.png';
import smallWidget from './../../images/smallWidget.png';
import techWidget from './../../images/techWidget.png';
import healthWidget from './../../images/healthWidget.png';
import './MSManager.css';
import axios from './../../api/axios.js';


const MSManager = (props) => {
  
  const addWidget = (e) => {
    if (props.userId) {
      axios.put(`/api/users/add_widget/${props.userId}`,
      {
        widgets: e.currentTarget.value
      })
      .then(res => {
        props.onChange(res.data)
      })
    }

  }

  return (
    <div>
      <h2 class="modalTitle"> Add widgets</h2>
      <div class="services">
        <div class="service1">
          <p >Weather Widgets</p>
          <div class="serviceContent">
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="627240af1c275db0c9a48c71">
            <img class="weatherSmallPNG" src={weatherSmall} alt="weather small widget" />
            </button>
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="6276f918d18fda222534fc56">
            <img class="weatherMediumPNG" src={weatherMedium} alt="weather medium widget" />
            </button>
          </div>
        </div>

        <div class="service2">
          <p>Cocktails Widgets</p>
          <div class="serviceContent">
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="627240741c275db0c9a48c69">
            <img class="cocktailSmallPNG" src={cocktailSmall} alt="cocktail small widget" />
            </button>
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="6276f655d18fda222534fc40">
            <img class="cocktailBigPNG" src={cocktailBig} alt="cocktail big widget" />
            </button>
          </div>
        </div>

        <div class="service3">
          <p>Mangas Widgets</p>
          <div class="serviceContent">
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="6276f6bcd18fda222534fc46">
            <img class="mediumWidgetPNG" src={mediumWidget} alt="Manga medium widget" />
            </button>
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="627240941c275db0c9a48c6d">
            <img class="bigWidgetPNG" src={bigWidget} alt="Manga big widget" />
            </button>
          </div>
        </div>

        <div class="service4">
          <p>News Widgets</p>
          <div class="serviceContent">
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="6276f6f6d18fda222534fc4e">
            <img class="mediumWidgetPNG" src={healthWidget} alt="News medium widget" />
            </button>
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}}value="6276f6f1d18fda222534fc4c">
            <img class="mediumWidgetPNG" src={techWidget} alt="News big widget" />
            </button>
          </div>
        </div>

        <div class="service5">
          <p>Todos Widgets</p>
          <div class="serviceContent">
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}} value="6276f713d18fda222534fc50">
            <img class="bigWidgetPNG" src={bigWidget} alt="Todos big widget" />
            </button>
            <button class="modalButtons" onClick={(e) => {addWidget(e) ; props.handleClose()}}value="6276f71ed18fda222534fc52">
            <img class="smallWidgetPNG" src={smallWidget} alt="Todos small widget" />
            </button>
          </div>
        </div>
        {/* <div class="service">
      <p>other Widgets</p>
      </div>
      <div class="service">
      <p>other Widgets</p>
      </div> */}
      </div>
    </div>
  )
};

export default MSManager;