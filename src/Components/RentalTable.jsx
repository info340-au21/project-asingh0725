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
                setIsAscending(false);
            }
            if (!isAscending) {
                setIsAscending(null);
                setSortByCriteria(null);
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
        <div className="rentalTable ml-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Store</th>
                        <th>Activity</th>
                        <th>Equipment</th>
                        <th>
                            Price
                            <SortButton
                                name="Price"
                                onClick={handleClick}
                                active={(sortByCriteria === "year") ? true : false}
                                ascending={(sortByCriteria === "year" && isAscending) ? true : false} />
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
    let iconClasses = ""
    if (props.active) { iconClasses += ` active` }
    if (props.ascending) { iconClasses += ` flip` };

    return (
        <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
            <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
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
            <td className="p-2"><img src={store.img} alt={store.alt}></img></td>
        </tr>
    );
}

export default RentalTable;