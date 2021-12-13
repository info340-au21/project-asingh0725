// import React from 'react';
// import '../css/card.css'
// //var moment = require('moment');

// export default function WeatherCard(props) {
//     let date = new Date();
//     const dayOfWeek = props.day.dt * 1000
//     date.setTime(dayOfWeek);

//     const iconUrl = "owf owf-" + props.day.weather[0].id + " owf-5x red";
//     return (
//         <div className="col-auto">
//         <div className="card">
//           <h3 className="card-title">{date.format('dddd')}</h3>
//           <p className="text-muted">{date.format('MMMM Do, h:mm a')}</p>
//           <i className={iconUrl}></i>
//           <h2>{Math.round(props.day.main.temp)} °F</h2>
//           <div className="card-body">
//             <p className="card-text">{props.day.weather[0].description}</p>
//             <button className="btn btn-dark btn-outline-light">See Hourly Forecast</button>
//           </div>
//         </div>
//       </div>
//     )
// }



import React from 'react';
import '../css/card.css';
var moment = require('moment');

class WeatherCard extends React.Component {
  // Props: day, key(index)

  render() {
    let newDate = new Date();
    const weekday = this.props.day.dt * 1000
    newDate.setTime(weekday)

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x red"

    // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32


    return (
      <div className="col-auto">
        <div className="card">
          <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
          <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
          <i className={imgURL}></i>
          <h2>{Math.round(this.props.day.main.temp)} °F</h2>
          <div className="card-body">
            <p className="card-text">{this.props.day.weather[0].description}</p>
            <button className="btn btn-dark btn-outline-light">See Hourly Forecast</button>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherCard;