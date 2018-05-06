import React from 'react';
import _ from 'lodash';

const Dropdown = ({ options, placeholder }) => {
    const optionsJSX = _.map(options, (option, index) => {
        return <option 
                    key={index} 
                    value={option.value}
                >
                {option.label}
                </option>
    });

    return (
        <select>
            <option default>{placeholder}</option>
            {optionsJSX}
        </select>
    );
};

export default Dropdown;