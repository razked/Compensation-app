import React from 'react';
import './Dropdown.scss';

const Dropdown = ({options,selected,onChange}) => {
    

    const optionsOutput = options.map( (item,idx) => {

        return <option key={item + Date.now} value={idx}>
            {item}
        </option>
        
    });

    return (
        <div className="Dropdown">
            {/* <label>{label}</label> */}
            <select value={selected} onChange={(event) => onChange(event.target.value)}>
                {optionsOutput}
            </select>
        </div>
    );
};

export default Dropdown;