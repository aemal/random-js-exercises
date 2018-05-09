import React from 'react';
import PropTypes from 'prop-types';
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

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    placeholder: PropTypes.string.isRequired
};
export default Dropdown;
