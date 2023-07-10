import './navLink.css'
import React from 'react';
import PropTypes from 'prop-types';
function NavLinkComponent({link, text}){
    return (
        <a className='link' href={link}>{text}</a>
    )
}
NavLinkComponent.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string
}
export default NavLinkComponent;