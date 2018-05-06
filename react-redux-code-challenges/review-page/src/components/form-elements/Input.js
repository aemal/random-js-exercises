import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    placeholder,
    cssClassName
}) => {
    return (
        <input 
            placeholder={placeholder}
            className={`${cssClassName}`}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    cssClassName: PropTypes.string.isRequired
};

export default Input;