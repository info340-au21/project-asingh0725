import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import DegreeType from "./DegreeType";
import locationsData from "../../data/weatherLocations.json";
import { WeatherLocationConfig, WeatherApiDay } from "../../types/weather";

interface WeatherLocationProps {
  locationName: string;
}

const WeatherLocation: React.FC<WeatherLocationProps> = ({ locationName }) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [days, setDays] = useState<WeatherApiDay[]>([]);
  const [degreeType, setDegreeType] = useState<"metric" | "imperial">(
    "imperial"
  );

  useEffect(() => {
    if (!API_KEY) {
      console.error("Missing REACT_APP_WEATHER_API_KEY");
      return;
    }

    const locations = locationsData as WeatherLocationConfig[];
    const location = locations.find((loc) => loc.name === locationName);

    if (!location) {
      console.error("Unknown location:", locationName);
      setDays([]);
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${location.zip},${location.country}&units=${degreeType}&APPID=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.list) {
          console.error("Weather API error:", data);
          setDays([]);
          return;
        }

        const dailyData: WeatherApiDay[] = data.list.filter((reading: any) =>
          reading.dt_txt.includes("18:00:00")
        );
        setDays(dailyData);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setDays([]);
      });
  }, [locationName, degreeType, API_KEY]);

  return (
    <div className="container">
      <h1 className="display-1 text-center">{locationName}</h1>
      <h2 className="display-5 text-muted text-center">5-Day Forecast</h2>

      <DegreeType
        degreeType={degreeType}
        updateForecastDegree={setDegreeType}
      />

      <div className="row justify-content-center">
        {days.map((day, index) => (
          <WeatherCard key={index} day={day} degreeType={degreeType} />
        ))}
      </div>
    </div>
  );
};

export default WeatherLocation;