import React from 'react';
import Dropdown from '../form-elements/Dropdown';

const Group = () => {
    const options = [
        {value: 'day', label: 'Group by Day'},
        {value: 'week', label: 'Group by Week'},
        {value: 'month', label: 'Group by Month'}
    ];

    return (
        <Dropdown 
            options={options}
            placeholder="Group by"
        />
    );
};

export default Group;