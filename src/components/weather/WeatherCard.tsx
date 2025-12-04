import React from "react";
import moment from "moment";
import "../../css/card.css";
import { WeatherApiDay } from "../../types/weather";

interface WeatherCardProps {
  day: WeatherApiDay;
  degreeType: "metric" | "imperial";
}

const WeatherCard: React.FC<WeatherCardProps> = ({ day, degreeType }) => {
  const newDate = new Date(day.dt * 1000);

  const temp = Math.round(day.main.temp);
  const tempLabel = degreeType === "metric" ? `${temp}°C` : `${temp}°F`;

  return (
    <div className="col-auto">
      <div className="card">
        <h3 className="card-title text-center">
          {moment(newDate).format("dddd")}
        </h3>
        <p className="text-muted text-center">
          {moment(newDate).format("MMMM Do, h:mm a")}
        </p>
        <h2 className="text-center">{tempLabel}</h2>
        <div className="card-body">
          <p className="card-text text-center text-capitalize font-weight-bold">
            {day.weather[0]?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;