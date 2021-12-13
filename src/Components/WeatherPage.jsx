import React from "react";
import Weather from "./Weather.jsx"
import locations from '../data/locations.json';

export default function WeatherPage() {
    const location = locations.map((location) => {
        //if the route's location name is the same as the location for the weather page, then return this html only for that particular page
        return(
            <React.Fragment>
                <Weather location={location} />
            </React.Fragment>
        )
    })
}