import React from 'react';

export default function RentalSelect(props) {

    const chooseActivity = props.map((act, index) => {
        return <option key={index} value={act}>{act}</option>;
    })

    return (
        <div className="react-select-menu">
            <ul className="react-select-options">
                <CheckboxOption value="" value={selected} >

                </CheckboxOption>
            </ul>

        <div className="col-auto">
            <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick} >Apply Filter</button>
        </div>

        </div>
        
    )
}