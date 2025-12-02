import React from 'react';

const DegreeType = ({ degreeType, updateForecastDegree }) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="celsius"
          value="metric"
          checked={degreeType === "metric"}
          onChange={event => updateForecastDegree(event.target.value)}
        />
        <label className="form-check-label" htmlFor="celsius">
          Celsius
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          id="fahrenheit"
          value="imperial"
          checked={degreeType === "imperial"}
          onChange={event => updateForecastDegree(event.target.value)}
        />
        <label className="form-check-label" htmlFor="fahrenheit">
          Fahrenheit
        </label>
      </div>
    </>
  );
};

export default DegreeType;