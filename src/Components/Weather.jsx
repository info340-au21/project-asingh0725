import React from "react";
import WeatherCard from './WeatherCard.jsx'
import DegreeType from './DegreeType.jsx'
//import locations from '../data/locations.json';

export default function Weather(props) {
    state = {
        days: [],
        degreeType: "imperial"
    }
    //const location = locations;
    fetchApiData = () => {
        const weatherUrl = `api.openweathermap.org/data/2.5/weather?lat=${props.location.lat}&lon=${props.location.lon}&units=${this.state.degreeType}&appid=0fe2033efdd77a1e5dfb7a392e963afb`;
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Data List succesfully loaded", data.list)
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({days: dailyData})
            })
    }

    // cardFormat = () => {
    //     return this.state.days.map((day, index) => <WeatherCard day={day} key={index} />)
    // }
    const card = state.days.map((day,index) => {
        return(
            <WeatherCard day={day} key={index} />
        )
    })
    updateCorF = degreeType => {
        this.setState({
            degreeType: degreeType
        }, this.sendNewData)
    }

    sendNewData = () => {
        const weatherUrl = `api.openweathermap.org/data/2.5/weather?lat=${props.location.lat}&lon=${props.location.lon}&units=${this.state.degreeType}&appid=0fe2033efdd77a1e5dfb7a392e963afb`;
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Data List succesfully loaded", data.list)
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({days: dailyData})
            })
    }

    return (
        <div className="container">
            <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
            <DegreeType degreeType={this.state.degreeType} updateCorF={this.updateCorF}/>
            <h5 className="display-5 text-muted">{props.location.name}</h5>
            <div className="row justify-content-center">
                  {card}
            </div>
        </div>
      )
}