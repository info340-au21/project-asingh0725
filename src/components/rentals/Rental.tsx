import React, { useMemo, useState } from "react";
import RentalTable from "./RentalTable";
import RentalSelect from "./RentalSelect";
import { RentalItem } from "../types";

interface RentalProps {
  data: RentalItem[];
}

const Rental: React.FC<RentalProps> = ({ data }) => {
  const savedLocation = window.sessionStorage.getItem("location") ?? "";

  const filteredData = useMemo(
    () => data.filter((store) => store.location === savedLocation),
    [data, savedLocation]
  );

  const [displayingData, setDisplayingData] =
    useState<RentalItem[]>(filteredData);

  const applyFilter = (activityKey: string) => {
    if (activityKey === "Show all Activities" || !activityKey) {
      setDisplayingData(filteredData);
      return;
    }

    const newData = filteredData.filter(
      (store) => store.activity === activityKey
    );
    setDisplayingData(newData);
  };

  const uniqueStoreOptions = useMemo(
    () =>
      [...new Set(filteredData.map((store) => store.activity))].sort(),
    [filteredData]
  );

  return (
    <div className="rentalPage ml-5">
      <h2>Rentals for {savedLocation}</h2>
      <div className="col-4">
        <RentalSelect
          storeOptions={uniqueStoreOptions}
          callback={applyFilter}
        />
      </div>
      <div className="col-11">
        <RentalTable data={displayingData} />
      </div>
    </div>
  );
};

export default Rental;