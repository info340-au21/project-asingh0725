import React from "react";

import ReviewForm from "./ReviewForm.jsx";
import WeatherReport from "./WeatherReport.jsx";
import RentReport from "./RentReport.jsx";
import reports from "../data/reports.json";

export default function Report() {
    return (
        <div className="col-12">
            <WeatherReport reports = {reports}></WeatherReport>
            <RentReport reports = {reports}></RentReport>
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
                                    <button className="btn btn-danger"><a className="text-white">Like</a></button>
                                    <button className="btn btn-primary"><a className="text-white">Reply</a></button>
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