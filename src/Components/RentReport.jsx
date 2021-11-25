import React from "react";

function RentReport(props) {
    const report = props.reports;
    return(
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
                        <td scope="row">{report[0].id[0]}</td>
                        <td>{report[0].store[0]}</td>
                        <td>{report[0].skiing[0]}</td>
                        <td>{report[0].snowboard[0]}</td>
                      </tr>
                      <tr>
                      <td scope="row">{report[0].id[1]}</td>
                        <td>{report[0].store[1]}</td>
                        <td>{report[0].skiing[1]}</td>
                        <td>{report[0].snowboard[1]}</td>
                      </tr>
                      <tr>
                      <td scope="row">{report[0].id[2]}</td>
                        <td>{report[0].store[2]}</td>
                        <td>{report[0].skiing[2]}</td>
                        <td>{report[0].snowboard[2]}</td>
                      </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default RentReport;