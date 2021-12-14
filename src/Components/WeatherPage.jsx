import React from "react";
import Weather from "./Weather.jsx"
import locations from '../data/locations.json';

export default function WeatherPage({locationValue}) {
    console.log(locationValue);
    const location = locations.filter((loc) => {
        return loc.name === locationValue
        //if the route's location name is the same as the location for the weather page, then return this html only for that particular page
    });
    console.log(location)
    // const locationReturn = return(
    //     <Weather location={location} />
    // )
    return (
        <div className="container">
            <Weather location={location} />
        </div>
    )
}