import React from "react";
import Weather from "./Weather.jsx"
import locationsData from './../data/locations.json';

export default function WeatherPage({ clickedLocation }) {
    console.log(clickedLocation);
    
    const weatherLocation = locationsData.filter((obj) => {
        return obj.name === clickedLocation;
        //if the route's location name is the same as the location for the weather page, then return this html only for that particular page
    });
    console.log(weatherLocation)
    // const locationReturn = return(
    //     <Weather location={location} />
    // )
    return (
        <div className="weatherPage">
            <Weather location={weatherLocation} />
        </div>
    )
}