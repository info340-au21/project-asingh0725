//import React, { useState } from 'react';

// export default function RentalSelect(props) {

//     const [include, setIncluded] = useState(false);
//     const [selected, setSelected] =  useState("");

//     const handleSelect = ((event) => {
//         setSelected(event.target.value);
//     })

//     const handleCheck = ((event) => {
//         setIncluded(event.target.checked);
//     })

//     const chooseActivity = props.map((act, index) => {
//         return <option key={index} value={act}>{act}</option>;
//     })

//     return (
//         <div className="react-select-menu">
//             <ul className="react-select-options">
//                 <CheckboxOption value="" value={selected} >
//                     {chooseActivity}
//                 </CheckboxOption>
//             </ul>

//         <div className="col-auto">
//             <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick} >Apply Filter</button>
//         </div>

//         </div>
        
//     )
    
// }
// *}