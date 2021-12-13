import React, { useState } from "react";
import WeatherCard from './WeatherCard.jsx'
import DegreeType from './DegreeType.jsx'
//import locations from '../data/locations.json';

export default function Weather(props) {
    const [days,setDays] = useState([]);
    const [degreeType, setDegreeType] = useState("imperial");
    let state = {
        days: [],
        degreeType: "imperial"
    }
    //const location = locations;
    let fetchApiData = () => {
        const weatherUrl = "api.openweathermap.org/data/2.5/forecast?lat="+props.location.lat+"&lon="+props.location.lon+"&units="+state.degreeType+"&appid=0fe2033efdd77a1e5dfb7a392e963afb";
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Data List succesfully loaded", data.list)
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                setDays(dailyData)
            })
    }

    let cardFormat = () => {
         return days.map((day, index) => <WeatherCard day={day} key={index} />)
    }
    // const card = state.days.map((day,index) => {
    //     return(
    //         <WeatherCard day={day} key={index} />
    //     )
    // })
    let updateCorF = degreeType => {
        setDegreeType(degreeType);
    }

    let sendNewData = () => {
        const weatherUrl = "api.openweathermap.org/data/2.5/forecast?lat="+props.location.lat+"&lon="+props.location.lon+"&units="+state.degreeType+"&appid=0fe2033efdd77a1e5dfb7a392e963afb";
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Data List succesfully loaded", data.list)
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                setDays(dailyData);
            })
    }

    return (
        <div className="container">
            <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
            <DegreeType degreeType={degreeType} updateCorF={updateCorF}/>
            <h5 className="display-5 text-muted">{props.location.name}</h5>
            <div className="row justify-content-center">
                  {cardFormat()}
            </div>
        </div>
      )
}