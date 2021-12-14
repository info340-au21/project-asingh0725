import React from "react";
import WeatherCard from './WeatherCard.jsx'
import DegreeType from './DegreeType.jsx'
import locations from '../data/locations.json';

class WeatherStevens extends React.Component {
  state = {
    days: [],
    name: "Stevens Pass",
    location: "zip=98826",
    country: "us",
    degreeType: "imperial"
  }

  componentDidMount = () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=0fe2033efdd77a1e5dfb7a392e963afb`;
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <WeatherCard day={day} key={index} degreeType={this.state.degreeType}/>)
  }

  updateForecastDegree = newDegreeType => {
    this.setState({
      degreeType: newDegreeType
    }, this.sendNewFetch)
  }

  sendNewFetch = () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=0fe2033efdd77a1e5dfb7a392e963afb`
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

  render() {
    const locationStorage = window.sessionStorage;
    const savedLocation = locationStorage.getItem('location');
    const location = locations.filter(loc => loc.name === savedLocation);
    console.log(location.name)
    return (
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      <DegreeType degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
      <h5 className="display-5 text-muted">{this.state.name}</h5>
        <div className="row justify-content-center">

          {this.formatCards()}

        </div>
      </div>
    )
  }
}

export default WeatherStevens;