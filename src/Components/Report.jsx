import React from "react";

import ReviewForm from "./ReviewForm.js";
import reports from "../data/reports.json";

export function Report() {
    
    return (
        <div className="col-12">
            <div className="row pb-2">
                    <h2>Weather</h2>
                    <div className="col-2">
                        <i className={reports.weather[0]}></i>
                        <h3>Sun</h3>
                    </div>
                    <div className="col-2">
                        <i className={reports.weather[1]}></i>
                        <h3>Mon</h3>
                    </div>
                    <div className="col-2">
                        <i className={reports.weather[2]}></i>
                        <h3>Tue</h3>
                    </div>
                    <div className="col-2">
                        <i className={reports.weather[3]}></i>
                        <h3>Wed</h3>
                    </div>
                    <div className="col-2">
                        <i className={reports.weather[4]}></i>
                        <h3>Thur</h3>
                    </div>
                    <div className="col-2">
                        <i className={reports.weather[5]}></i>
                        <h3>Fri</h3>
                    </div>
            </div>
            <div className="row pb-2">
                <h2>Rentals</h2>
                <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Rentals</th>
                        <th scope="col">Sking</th>
                        <th scope="col">Snowboard</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{reports.id}</th>
                        <td>{reports.store}</td>
                        <td>{reports.halfDay}</td>
                        <td>{reports.fullDay}</td>
                      </tr>
                      <tr>
                      <th scope="row">{reports.id}</th>
                        <td>{reports.store}</td>
                        <td>{reports.halfDay}</td>
                        <td>{reports.fullDay}</td>
                      </tr>
                      <tr>
                      <th scope="row">{reports.id}</th>
                        <td>{reports.store}</td>
                        <td>{reports.halfDay}</td>
                        <td>{reports.fullDay}</td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className="row pb-2">
                <h2>Reviews</h2>
                <div>
                    <div className="card-body">
                        <div className="row-10" style="padding: 5px; border: 1px solid grey; border-radius: 10px;">
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
            <ReviewForm></ReviewForm>
        </div>
    )
}