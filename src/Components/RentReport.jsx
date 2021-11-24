import React from "react";

function RentReport(props) {
    const report = props.report;
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
                        <th scope="row">{reports.id[0]}</th>
                        <td>{report.store[0]}</td>
                        <td>{report.skiing[0]}</td>
                        <td>{report.snowboard[0]}</td>
                      </tr>
                      <tr>
                      <th scope="row">{reports.id[1]}</th>
                        <td>{report.store[1]}</td>
                        <td>{report.skiing[1]}</td>
                        <td>{report.snowboard[1]}</td>
                      </tr>
                      <tr>
                      <th scope="row">{reports.id[2]}</th>
                        <td>{report.store[2]}</td>
                        <td>{report.skiing[2]}</td>
                        <td>{report.snowboard[2]}</td>
                      </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default RentReport;