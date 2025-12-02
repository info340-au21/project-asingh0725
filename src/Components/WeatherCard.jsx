import React from 'react';
import '../css/card.css';
var moment = require('moment');


class WeatherCard extends React.Component {
  render() {
    let newDate = new Date();
    const weekday = this.props.day.dt * 1000
    newDate.setTime(weekday)
    const img = "https://openweathermap.org/img/w/" + this.props.day.weather[0].icon + ".png"


    return (
      <div className="col-auto">
        <div className="card">
          <h3 className="card-title text-center">{moment(newDate).format('dddd')}</h3>
          <p className="text-muted text-center">{moment(newDate).format('MMMM Do, h:mm a')}</p>
          {/* <img src={img} alt="the weather conditions" className="img-fluid mw-50"></img>  */}
          <h2 className="text-center ">{this.props.degreeType === "metric" ? Math.round(this.props.day.main.temp) + "°C" : Math.round(this.props.day.main.temp) + "°F"}</h2>
          <div className="card-body">
            <p className="card-text text-center text-capitalize font-weight-bold">{this.props.day.weather[0].description}</p>
          </div>
        </div>
      </div>
    )
    }
}

export default WeatherCard;
