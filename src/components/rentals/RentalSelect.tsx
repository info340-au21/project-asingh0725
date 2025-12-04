import React, { useState } from "react";

interface RentalSelectProps {
  callback: (activityKey: string) => void;
  storeOptions: string[];
}

const RentalSelect: React.FC<RentalSelectProps> = ({
  callback,
  storeOptions,
}) => {
  const [select, setSelect] = useState<string>("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  const handleClick = () => {
    callback(select || "Show all Activities");
  };

  const optionElems = storeOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select
          id="activitySelect"
          className="form-select"
          value={select}
          onChange={handleSelect}
        >
          <option>Show all Activities</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <button
          id="submitButton"
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default RentalSelect;