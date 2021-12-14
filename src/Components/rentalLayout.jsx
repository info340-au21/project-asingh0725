import React from "react";
import Rental from './rentalData.json';

export function RentalTable (props) {
    let colHeaders = ["Location", "Sport", "Equipment", "Price", "Availability"];
    //let rental = props.report;
    let row = Rental.map((loc) => (<RentalRow key={loc.location} location={loc}/>))
        return (
            <table className = 'table table-bordered'>
                <Header columnNames = {colHeaders} />
                <tbody>{row}</tbody>
            </table>
        )
}