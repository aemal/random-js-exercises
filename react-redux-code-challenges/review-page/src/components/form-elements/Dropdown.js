import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Dropdown = ({ options, onOptionChanged, defaultOption }) => {
    const optionsJSX = _.map(options, (option, index) => {
        return <option
                    key={index}
                    value={option.value}>
                    {option.label}
                </option>
    });

    const {value, label} = defaultOption
    return (
        <select
          onChange={(e) => onOptionChanged(e)}>
          <option default value={value}>{label}</option>
            {optionsJSX}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    defaultOption: PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired,
    onOptionChanged: PropTypes.func.isRequired
};
export default Dropdown;
