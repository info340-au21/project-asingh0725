import React, {useState} from 'react';

import rentalData from './../data/rental.json';

import RentalTable from './RentalTable';
import RentalSelect from './RentalSelect';

function Rental() {
    const locationStorage = window.sessionStorage;
    let savedLocation = locationStorage.getItem('location');

    const filteredData = rentalData.filter((store) => {
        return store.location = savedLocation;
    });

    const [displayingData, setDisplayingData] = useState(filteredData);

    return(
        <div className="rentalPage ml-5">
            <h2>Rentals for {savedLocation}</h2>
            <div className="col-7 mr-5">
                <RentalTable data={displayingData} location={savedLocation}></RentalTable>
            </div>
            <div className="col-4">
            </div>
        </div>
    );
}

export default Rental;
