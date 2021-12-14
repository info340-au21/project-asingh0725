import React from 'react';
import '../css/card.css';
var moment = require('moment');


class WeatherCard extends React.Component {
  render() {
    let newDate = new Date();
    const weekday = this.props.day.dt * 1000
    newDate.setTime(weekday)
    const img = "http://openweathermap.org/img/w/" + this.props.day.weather[0].icon + ".png"


    return (
      <div className="col-auto">
        <div className="card">
          <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
          <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
          <img src={img} alt="the weather conditions" className="img-fluid mw-50"></img> 
          {/* center the card-heading and make it big/bold */}
          <h2>{Math.round(this.props.day.main.temp)} °F</h2>
          <div className="card-body">
            {/* center the card-text and make it big/bold */}
            <p className="card-text">{this.props.day.weather[0].description}</p>
            {/* <button className="btn btn-dark btn-outline-light">See Hourly Forecast</button> */}
          </div>
        </div>
      </div>
    )
    }
}

export default WeatherCard;
