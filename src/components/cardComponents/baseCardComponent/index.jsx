import './card.css';
import React from 'react';
import PropTypes from 'prop-types';
function CardComponent({children}){
    return (
        <div className='card'>
            {children}
       </div>
    )
}
CardComponent.propTypes = {
    children: PropTypes.element
}
export default CardComponent;