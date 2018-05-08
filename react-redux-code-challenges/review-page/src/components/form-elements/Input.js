import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    placeholder,
    cssClassName,
    value,
    handleChange
}) => {
    return (
        <input
            placeholder={placeholder}
            className={`${cssClassName}`}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    cssClassName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Input;
