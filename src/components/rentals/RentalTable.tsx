import React, { useMemo, useState } from "react";
import _ from "lodash";
import { RentalItem } from "../../types/rentalItem";

interface RentalTableProps {
  data: RentalItem[];
}

const RentalTable: React.FC<RentalTableProps> = ({ data }) => {
  const [sortByCriteria, setSortByCriteria] = useState<keyof RentalItem | null>(
    null
  );
  const [isAscending, setIsAscending] = useState<boolean | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget.name as keyof RentalItem;

    if (button !== sortByCriteria) {
      setSortByCriteria(button);
      setIsAscending(true);
    } else {
      setIsAscending((prev) => !prev);
    }
  };

  const sortedData = useMemo(() => {
    if (!sortByCriteria || isAscending === null) {
      return data;
    }
    const sorted = _.sortBy(data, sortByCriteria);
    return isAscending ? sorted : [...sorted].reverse();
  }, [data, sortByCriteria, isAscending]);

  return (
    <div className="rentalTable">
      <table className="table">
        <thead>
          <tr>
            <th>Store</th>
            <th>Activity</th>
            <th>Equipment</th>
            <th>
              Price
              <SortButton
                name="price"
                onClick={handleClick}
                active={sortByCriteria === "price"}
                ascending={sortByCriteria === "price" && !!isAscending}
              />
            </th>
            <th>Store Website</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((store: RentalItem, index: number) => (
            <StoreRow key={`${store.store}-${index}`} store={store} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface SortButtonProps {
  name: keyof RentalItem;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  active: boolean;
  ascending: boolean;
}

const SortButton: React.FC<SortButtonProps> = ({
  name,
  onClick,
  active,
  ascending,
}) => {
  return (
    <button
      className="btn btn-sm btn-sort"
      name={name}
      onClick={onClick}
      aria-label={`sort by ${name} ${ascending ? "ascending" : "descending"}`}
    >
      <span className="material-icons">
        {active ? (ascending ? "arrow_upward" : "arrow_downward") : "sort"}
      </span>
    </button>
  );
};

interface StoreRowProps {
  store: RentalItem;
}

const StoreRow: React.FC<StoreRowProps> = ({ store }) => {
  return (
    <tr>
      <td className="p-2">{store.store}</td>
      <td className="p-2">{store.activity}</td>
      <td className="p-2">{store.equipment}</td>
      <td className="p-2">{store.price}</td>
      <td className="p-2">
        <a href={store.website} target="_blank" rel="noreferrer">
          <button className="btn btn-success">Go!</button>
        </a>
      </td>
    </tr>
  );
};

export default RentalTable;
