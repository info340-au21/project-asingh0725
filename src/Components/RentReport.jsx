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
                        <td scope="row">1</td>
                        <td>Big 5 Sporting Goods</td>
                        <td>49</td>
                        <td>99</td>
                      </tr>
                      <tr>
                      <td scope="row">2</td>
                        <td>Dicks Sporting Goods</td>
                        <td>39</td>
                        <td>79</td>
                      </tr>
                      <tr>
                      <td scope="row">3</td>
                        <td>Walmart</td>
                        <td>35</td>
                        <td>60</td>
                      </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default RentReport;