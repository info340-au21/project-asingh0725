import React from "react";

function WeatherReport(props) {
    const reports = props.reports;
    return(
        <div className="row pb-2 mb-2 mt-5">
                    <h2>Weather</h2>
                    <div className="col-2">
                        {/* <i className={report.weath}></i> */}
                        <h3>Sun</h3>
                        <p>{reports[0].weather[0]}</p>
                    </div>
                    <div className="col-2">
                        {/* <i className={report.weather[1]}></i> */}
                        <h3>Mon</h3>
                        <p>{reports[0].weather[1]}</p>
                    </div>
                    <div className="col-2">
                        {/* <i className={report.weather[2]}></i> */}
                        <h3>Tue</h3>
                        <p>{reports[0].weather[2]}</p>
                    </div>
                    <div className="col-2">
                        {/* <i className={report.weather[3]}></i> */}
                        <h3>Wed</h3>
                        <p>{reports[0].weather[3]}</p>
                    </div>
                    <div className="col-2">
                        {/* <i className={report.weather[4]}></i> */}
                        <h3>Thur</h3>
                        <p>{reports[0].weather[4]}</p>
                    </div>
                    <div className="col-2">
                        {/* <i className={report.weather[5]}></i> */}
                        <h3>Fri</h3>
                        <p>{reports[0].weather[5]}</p>
                    </div>
            </div>
    )
}

export default WeatherReport;