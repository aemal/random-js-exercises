import React from 'react';
import PropTypes from 'prop-types';
import { imageExist } from '../../utils';
import emptyAvatar from '../../assets/images/empty_avatar.png';

const Avatar = ({ width, src, alt }) => {
    const style = {
        borderRadius: '50%',
        border: '1px solid',
        width,
    };

    const imageSrc = imageExist(src) === true
    ? src
    : emptyAvatar;


    return (
        <img 
        style={style}
        src={imageSrc}
        alt={alt}
    />
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
};

export default Avatar;