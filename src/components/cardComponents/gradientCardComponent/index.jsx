import './card.css'
import React from 'react';
import PropTypes from 'prop-types';
function GradientCardComponent({children}){
    return (
        <div className='gradient-card'>
            {children}
        </div>
    )
}
GradientCardComponent.propTypes={
    children: PropTypes.element
}
export default GradientCardComponent;