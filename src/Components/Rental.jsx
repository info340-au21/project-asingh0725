import React, { useState } from 'react';

import RentalTable from './RentalTable';
import RentalSelect from './RentalSelect';

function Rental(props) {
    const rentalData = props.data;
    const locationStorage = window.sessionStorage;
    let savedLocation = locationStorage.getItem('location');

    const filteredData = rentalData.filter((store) => {
        return store.location = savedLocation;
    });

    const [displayingData, setDisplayingData] = useState(filteredData);

    const applyFilter = (activityKey) => {
        if(activityKey === 'Show all Activities') {
            setDisplayingData(filteredData);
        } else {
            const newData = filteredData.filter((store) => {
                if(store.activity === activityKey) {
                    return true;
                }
                return false;
            });
            setDisplayingData(newData);
        }
    }

    const uniqueStoreOptions = [...new Set(filteredData.reduce((all, current) => {
        return all.concat([current.activity]);
      }, []))].sort();

    return(
        <div className="rentalPage ml-5">
            <h2>Rentals for {savedLocation}</h2>
            <div className="col-7 mr-5">
                <RentalTable data={displayingData}></RentalTable>
            </div>
            <div className="col-4">
                <RentalSelect storeOptions={uniqueStoreOptions} callback={applyFilter}></RentalSelect>
            </div>
        </div>
    );
}

export default Rental;
