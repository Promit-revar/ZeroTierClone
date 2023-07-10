import React from 'react';
import NavBarComponent from './components/navBarComponent';
import CardComponent from './components/cardComponents/baseCardComponent';
import GradientCardComponent from './components/cardComponents/gradientCardComponent';
import ButtonComponent from './components/buttonComponent';
import PricingCardComponent from './components/cardComponents/pricingCardComponent';
import FooterComponent from './components/footerComponent';
import './App.css'
function App() {
  return (
    <div className='base-class'>
      <NavBarComponent />
    <div className='background'>
      <div>
        
          <div className='header-section'>
            
            <p><h1>Securely connect any device, anywhere.</h1><br/><br/>ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.
            <br /><br />
            <div>
              <ButtonComponent background='yellow' text='Get ZeroTier' />
              <ButtonComponent background='black' text='Learn more >' />
            </div>
            </p>
            
          </div>
        
        <CardComponent>
          <div className='top-part'>
            <div className='left-section'>
              <img src={require('./assests/images/vpn.webp')} height={'100%'}/>
            </div>
            <div className='right-section'>
               <p>
                <h2>It just works</h2>
               <br/>ZeroTier combines the capabilities of <strong>VPN</strong> and <strong>SD-WAN</strong>, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.
               <br/>
               <br/>
               <ButtonComponent background='white' text='Learn more >'/>
               </p>
            </div>
          </div>
          <div className='top-part'>
            <div className='right-section'>
            <p>
                <h2>Speed, flexibility, and security</h2>
               <br/>Set up ZeroTier in minutes with remote, automated deployment.<br/><br/>Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities.<br/><br/>ZeroTier’s zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.
               <br/>
               <br/>
               <ButtonComponent background='white' text='Learn more >'/>
               </p>
            </div>
            <div className='left-section'>
              <img src={require('./assests/images/desktop.webp')} height={'100%'}/>
            </div>
          </div>
        </CardComponent>
      </div>
      <div className='blog-section'>
        <h2 className='main-heading'> Used by the world&apos;s most innovative teams</h2>
        
        <GradientCardComponent>
          <div className='profile-image'>
            <img src={require('./assests/images/profile.png')} height='40px' width='40px' />
            </div>
          <div>
          <p>&quotIn early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us.&quot<br/><br/>PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</p>
          </div>
        </GradientCardComponent>
        <GradientCardComponent>
          <div className='profile-image'>
            <img src={require('./assests/images/profile.png')} height='40px' width='40px' />
            </div>
          <div>
          <p>&quotZeroTier provides a robust and essential backbone for our communications stack.&quot<br/><br/>ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS</p>
          </div>
        </GradientCardComponent>
        <GradientCardComponent>
          <div className='profile-image'>
            <img src={require('./assests/images/profile.png')} height='40px' width='40px' />
            </div>
          <div>
          <p>“Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple.”<br /><br />BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL</p></div>
        </GradientCardComponent>
        
      </div>
      <div className='pricing-section'>
        <h2 className='main-heading'>Pricing</h2><p>ZeroTier makes networking easy for everyone - anywhere.</p>
        <div className='plan-cards'>
          <PricingCardComponent background='white'>
              <div>
                <h3>Basic</h3>
                <p>For Everyone / ZeroTier Hosted Controller</p>
                <ul className='service-list'>
                  <li>
                    <p>1 Admin</p>
                  </li>
                  <li>
                    <p>25 Nodes</p>
                  </li>
                  <li>
                    <p>Unlimited Networks</p>
                  </li>
                  <li>
                    <p>Business SSO: n/a</p>
                  </li>
                  <li>
                    <p>Community Support</p>
                  </li>
                </ul>
                <p>FREE</p>
              </div>
          </PricingCardComponent>
          <PricingCardComponent background='yellow'>
              <div>
                <h3>Professional</h3>
                <p>For Individuals and R&D</p>
                <ul className='service-list'>
                  <li>
                    <p>Admins | $10 USD/mo each</p>
                  </li>
                  <li>
                    <p>25 Node Packs | $5 USD/mo</p>
                  </li>
                  <li>
                    <p>Unlimited Networks</p>
                  </li>
                  <li>
                    <p>Business SSO | $5 USD/mo per seat</p>
                  </li>
                  <li>
                    <p> Community Support</p>
                  </li>
                </ul>
                <p>Starting at $5 USD/month</p>
              </div>
          </PricingCardComponent>
          <PricingCardComponent background='blue'>
              <div>
                <h3>Small Business</h3>
                <p>For Small Commercial Deployments</p>
                <ul className='service-list'>
                  <li>
                    <p>3 Admins</p>
                  </li>
                  <li>
                    <p>150 Nodes</p>
                  </li>
                  <li>
                    <p>Unlimited Networks</p>
                  </li>
                  <li>
                    <p>3 Business SSO Seats</p>
                  </li>
                  <li>
                    <p>Ticketed Support</p>
                  </li>
                </ul>
                <p>$1,500 USD/year</p>
              </div>
          </PricingCardComponent>
        </div>
      </div>
      <div className='subscription-section'>
          <CardComponent>
            <div className='subscription-form'>
              <div>
                <h2>Newsletter Signup</h2>
              </div>
              <div className='form-text'>
                <p>Join over 275,000 community members worldwide and receive the latest news from Team ZeroTier.</p>
              </div>
              <div>
                <input className='input-box' name='email' placeholder='email'></input>
                <ButtonComponent background='yellow' text='Subscribe'/>
              </div>
            </div>
           
          </CardComponent>
      </div>
      
    </div>
    <div style={{backgroundColor: '#000'}}>
    <div className='footer-section'>
        <FooterComponent/>
      </div>
    </div>
    </div>
  );
}

export default App;
