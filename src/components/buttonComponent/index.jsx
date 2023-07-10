import './buttonStyle.css'
import React from 'react';
import PropTypes from 'prop-types';
function ButtonComponent({background, text}){
    return (
        <button className={`button ${background}-background`}>{text}</button>
    )
}
ButtonComponent.propTypes = {
    background: PropTypes.oneOf('yellow','black','white','blue'),
    text: PropTypes.string
}
export default ButtonComponent;