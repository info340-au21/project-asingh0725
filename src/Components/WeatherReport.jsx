import React from "react";

function WeatherReport(props) {
    const report = props.reports;
    return(
        <div className="row pb-2">
                    <h2>Weather</h2>
                    <div className="col-2">
                        <i className={report.weather[0]}></i>
                        <h3>Sun</h3>
                    </div>
                    <div className="col-2">
                        <i className={report.weather[1]}></i>
                        <h3>Mon</h3>
                    </div>
                    <div className="col-2">
                        <i className={report.weather[2]}></i>
                        <h3>Tue</h3>
                    </div>
                    <div className="col-2">
                        <i className={report.weather[3]}></i>
                        <h3>Wed</h3>
                    </div>
                    <div className="col-2">
                        <i className={report.weather[4]}></i>
                        <h3>Thur</h3>
                    </div>
                    <div className="col-2">
                        <i className={report.weather[5]}></i>
                        <h3>Fri</h3>
                    </div>
            </div>
    )
}

export default WeatherReport;