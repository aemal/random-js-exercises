import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Dropdown = ({ options, onOptionChanged }) => {
    const optionsJSX = _.map(options, (option, index) => {
        return <option
                    key={index}
                    value={option.value}>
                    {option.label}
                </option>
    });

    return (
        <select
          onChange={(e) => onOptionChanged(e)}>
            {optionsJSX}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onOptionChanged: PropTypes.func.isRequired
};
export default Dropdown;
