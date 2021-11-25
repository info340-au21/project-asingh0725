import React from "react";

import ReviewForm from "./ReviewForm.jsx";
import WeatherReport from "./WeatherReport.jsx";
import RentReport from "./RentReport.jsx";
import reports from "../data/reports.json";

export default function Report() {
    return (
        <div className="col-12">
            {/* <WeatherReport report = {reports}></WeatherReport>
            <RentReport report = {reports}></RentReport> */}
            <div className="row pb-2">
                <h2>Reviews</h2>
                <div>
                    <div className="card-body">
                        <div className="row-10" id="body">
                            <div className="col-10">
                                <p><strong>My Name</strong></p>
                                <p>Best Place</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat placeat maiores dicta, 
                                    voluptatem culpa excepturi vitae in ad omnis illum explicabo, ducimus repellat enim soluta 
                                    consequatur unde qui esse corrupti!
                                </p>
                            </div>
                            <div>
                                <p className="text-secondary text center text-left pl-3">
                                    <a className="btn text-white btn-danger">Like</a>
                                    <a className="btn btn-outline-primary ml-2 mr-2">Reply</a>
                                    2 Months Ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <ReviewForm ></ReviewForm>
            </div>  
        </div>
    )
}