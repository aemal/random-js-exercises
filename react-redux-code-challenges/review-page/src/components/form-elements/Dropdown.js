import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react'

const DropdownElement = ({ options, onOptionChanged, text, icon}) => {
    return (
      <Dropdown
        icon={icon}
        text={text}
        floating
        labeled
        button
        className='icon'
        options={options}
        onChange={(e, value) => onOptionChanged(e, value)} />
    );
};

DropdownElement.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    icon: PropTypes.string.isRequired,
    onOptionChanged: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};
export default DropdownElement;
