import './navBar.css'
import React from 'react';
import NavLinkComponent from '../navLinkComponent';
import ButtonComponent from '../buttonComponent';
function NavBarComponent(){
    return(
        <div className='nav'>
            <div className='logo'>
                <img src={require('../../assests/images/logo.png')} height={'30px'} width={'30px'}/>
                <p className='logo-text'>ZEROTIER</p>
            </div>
            <div className='nav-links'>
                <NavLinkComponent link='#' text='Features'/>
                <NavLinkComponent link='#' text='Pricing'/>
                <NavLinkComponent link='#' text='Download'/>
                <NavLinkComponent link='#' text='Company'/>
                <NavLinkComponent link='#' text='Support'/>
            </div>
            <div>
                <ButtonComponent background='black' text='Login'/>
                <ButtonComponent background='yellow' text='Sign Up'/>
            </div>
        </div>
    )
}
export default NavBarComponent;