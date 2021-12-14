import React, { useState } from 'react';

export default function RentalSelect({ callback, storeOptions }) {

    const [select, setSelect] = useState('');

    const handleSelect = (event) => {
        let newSelect = event.target.value;
        setSelect(newSelect);
    };

    const handleClick = (event) => {
        callback(select);
    };

    const optionElems = storeOptions.map((store) => {
        return <option key={store.website} value={store}>{store}</option>;
    });

    return (
        <div className="row align-items-center mb-3">
            <div className="col-auto">
                <select id="activitySelect" className="form-select" value={select} onChange={handleSelect}>
                    <option>Show all Activities</option>
                    {optionElems}
                </select>
            </div>
            <div className="col-auto">
                <button id="submitButton" type="submit" className="btn btn-primary" onClick={handleClick}>Apply Filter</button>
            </div>
        </div>
    )
}
