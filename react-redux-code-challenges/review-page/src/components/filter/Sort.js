import React from 'react';
import Dropdown from '../form-elements/Dropdown';

const Sort = () => {
    const options = [
        { value: 'asc', label: 'Sort ascending' },
        { value: 'desc', label: 'Sort descending' }
    ];
    return (
        <Dropdown 
            options={options}
            placeholder="Sort by"
        />
    );
};

export default Sort;