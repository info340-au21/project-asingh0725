import React from "react";
import WeatherCrystal from "./WeatherCrystal.jsx"
import WeatherSnoqualmie from "./WeatherSnoqualmie.jsx";
import WeatherWhite from "./WeatherWhite.jsx";
import WeatherStevens from "./WeatherStevens.jsx";

export default function WeatherPage() {
    const locationStorage = window.sessionStorage;
    const savedLocation = locationStorage.getItem('location');
    let weatherPageComponent = null;
    if(savedLocation === "Crystal Mountain") {
        weatherPageComponent = <WeatherCrystal />
    } else if(savedLocation === "Snoqualmie Pass") {
        weatherPageComponent = <WeatherSnoqualmie />
    } else if(savedLocation === "White Pass") {
        weatherPageComponent = <WeatherWhite />
    } else {
        weatherPageComponent = <WeatherStevens />
    }
    return (
        <div className="weatherPage">
            {weatherPageComponent}
        </div>
    )
}