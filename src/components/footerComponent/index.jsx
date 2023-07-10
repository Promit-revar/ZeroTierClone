import './footer.css';
import React from 'react';
import '../navBarComponent/navBar.css';
function FooterComponent(){
    return (
        <div className='footer'>
            <div className='logo'>
                <img src={require('../../assests/images/logo.png')} height={'30px'} width={'30px'}/>
                <p className='logo-text'>ZEROTIER</p>
            </div>
            <div className='credits'>
                <p>Made with &#9829; by Promit Revar</p>
            </div>
            <div>

            </div>
        </div>
    )
}
export default FooterComponent;