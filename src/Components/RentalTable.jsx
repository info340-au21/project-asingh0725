import React, { useState } from 'react';

import _ from 'lodash';

function RentalTable({ data }) {
    const [sortByCriteria, setSortByCriteria] = useState(null);
    const [isAscending, setIsAscending] = useState(null);

    const handleClick = (event) => {
        const button = event.currentTarget.name;
        if (button !== sortByCriteria) {
            setIsAscending(true);
            setSortByCriteria(button);
        } else {
            if (isAscending) {
                setIsAscending(!isAscending);
            }
            if (!isAscending) {
                setIsAscending(!isAscending);
            }
        }
    };

    let sortedData = _.sortBy(data, sortByCriteria);
    if (sortByCriteria && !isAscending) {
        sortedData.reverse();
    } else if (isAscending === null) {
        sortedData = data;
    }

    const displayAll = sortedData.map((store) => {
        return <StoreRow store={store}></StoreRow>;
    });

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
                                active={(sortByCriteria === "price") ? true : false}
                                ascending={(sortByCriteria === "price" && isAscending) ? true : false} />
                        </th>
                        <th>Store Website</th>
                    </tr>
                </thead>
                <tbody>
                    {displayAll}
                </tbody>
            </table>
        </div>
    );
}

function SortButton(props) {
    return (
        <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
            <span className={"material-icons"} aria-label={`sort by ${props.name}`}>sort</span>
        </button>
    );
}

function StoreRow({ store }) {
    return (
        <tr>
            <td className="p-2">{store.store}</td>
            <td className="p-2">{store.activity}</td>
            <td className="p-2">{store.equipment}</td>
            <td className="p-2">{store.price}</td>
            <td className="p-2"><a href={store.website}><button className="btn btn-success">Go! </button></a></td>
        </tr>
    );
}

export default RentalTable;