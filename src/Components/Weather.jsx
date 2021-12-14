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
    //let fetchApiData = () => {
      console.log(props.location.lat)
        const weatherUrl = "api.openweathermap.org/data/2.5/forecast?lat="+props.location.lat+"&lon="+props.location.long+"&units="+state.degreeType+"&appid=0fe2033efdd77a1e5dfb7a392e963afb";
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Data List succesfully loaded", data.list)
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                setDays(dailyData)
            })
    //}

    let cardFormat = () => {
         return days.map((day, index) => <WeatherCard day={day} key={index} />)
    }

    let updateCorF = (degreeType) => {
        setDegreeType(degreeType);
        sendNewData()
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


// class WeekContainer extends React.Component {
//     state = {
//       days: [],
//       degreeType: "imperial"
//     }
  
//     componentDidMount = () => {
//       const weatherUrlOriginal = "api.openweathermap.org/data/2.5/forecast?lat=" + 46.973010 + "&lon=" + -121.496020 + "&units=" + this.state.degreeType + "&APPID=0fe2033efdd77a1e5dfb7a392e963afb";
//       //const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=0fe2033efdd77a1e5dfb7a392e963afb`
//       fetch(weatherUrlOriginal)
//       .then(res => res.json())
//       .then(data => {
//         console.log("Data List Loaded", data.list)
//         const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
//         this.setState({days: dailyData})
//       })
//     }
  
//     formatCards = () => {
//       return this.state.days.map((day, index) => <WeatherCard day={day} key={index}/>)
//     }
  
//     updateForecastDegree = newDegreeType => {
//       this.setState({
//         degreeType: newDegreeType
//       }, this.sendNewFetch)
//     }
  
//     sendNewFetch = () => {
//       const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=0fe2033efdd77a1e5dfb7a392e963afb`
//       fetch(weatherURL)
//       .then(res => res.json())
//       .then(data => {
//         console.log("Data List Loaded", data.list)
//         const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
//         this.setState({days: dailyData})
//       })
//     }
  
//     render() {
//       return (
//         <div className="container">
//         <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
//         <DegreeType degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
//         <h5 className="display-5 text-muted">New York, US</h5>
//           <div className="row justify-content-center">
  
//             {this.formatCards()}
  
//           </div>
//         </div>
//       )
//     }
//   }
  
//   export default WeekContainer