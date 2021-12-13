import React from 'react';
import '../css/card.css'
//var moment = require('moment');

export default function WeatherCard(props) {
    let date = new Date();
    const dayOfWeek = props.day.dt * 1000
    date.setTime(dayOfWeek);

    const iconUrl = "owf owf-" + props.day.weather[0].id + " owf-5x red";
    return (
        <div className="col-auto">
        <div className="card">
          <h3 className="card-title">{date.format('dddd')}</h3>
          <p className="text-muted">{date.format('MMMM Do, h:mm a')}</p>
          <i className={iconUrl}></i>
          <h2>{Math.round(props.day.main.temp)} °F</h2>
          <div className="card-body">
            <p className="card-text">{props.day.weather[0].description}</p>
            <button className="btn btn-dark btn-outline-light">See Hourly Forecast</button>
          </div>
        </div>
      </div>
    )
}