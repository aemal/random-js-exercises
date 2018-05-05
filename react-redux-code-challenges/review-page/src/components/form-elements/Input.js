import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    placeholder
}) => {
    return (
        <input 
            placeholder={placeholder}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired
};

export default Input;