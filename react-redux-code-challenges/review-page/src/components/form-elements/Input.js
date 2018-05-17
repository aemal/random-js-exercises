import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'

const InputElement = ({
    placeholder,
    cssClassName,
    value,
    handleChange
}) => {
    return (
        <Input
            fluid
            size='small'
            placeholder={placeholder}
            className={`${cssClassName}`}
            value={value}
            onChange={(e) => handleChange(e)}
            icon={{ name: 'search', circular: true, link: true }}
        />
    );
};

InputElement.propTypes = {
    placeholder: PropTypes.string.isRequired,
    cssClassName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default InputElement;
