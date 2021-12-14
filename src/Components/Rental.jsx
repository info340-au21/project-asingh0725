import React from "react";


export function Header (props) {
    let colInput = props.columnNames;
    let content = colInput.map((item) => <th key={item}>{item}</th>)
    return (
        <thead>
            <tr>
                {content}
            </tr>
        </thead>
    );
}

export function RentalRow(props) {
    let rental = props.rental;
    return (
        <tr>
            <td>{rental.location}</td>
            <td>{rental.sport}</td>
            <td>{rental.equipment}</td>
            <td>{rental.price}</td>
            <td>{rental.availability}</td>
        </tr>
    );
}