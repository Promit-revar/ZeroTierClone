import './card.css';
import React from 'react';
import PropTypes from 'prop-types';
function PricingCardComponent({children,background}){
    return (
        <div className={`pricing-card ${background}-background`}>
            {children}
        </div>
    )
}
PricingCardComponent.propTypes={
    background: PropTypes.string,
    children: PropTypes.element
}
export default PricingCardComponent;