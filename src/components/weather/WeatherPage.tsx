import React from "react";
import WeatherLocation from "./WeatherLocation";

const WeatherPage: React.FC = () => {
  const savedLocation =
    window.sessionStorage.getItem("location") || "Crystal Mountain";

  return (
    <div className="weatherPage">
      <WeatherLocation locationName={savedLocation} />
    </div>
  );
};

export default WeatherPage;