import React from 'react';

const Dropdown = ({ options }) => {
    //const optionsJSX = options
    return (
        <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    );
};

export default Dropdown;