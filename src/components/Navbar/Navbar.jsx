import { MonochromeFullLogo } from '../../assets';
import { useState } from 'react';

function Navbar(props) {
  console.log(props.background);

  return (
    <>
      <nav
        className='navbar fixed-top'
        style={{ backgroundColor: props.background && '#214457' }}>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={MonochromeFullLogo} alt='SeeEvent Logo' height='26' />
          </a>

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link sign-up' href='#'>
                Sign Up
              </a>
            </li>
            <li className='nav-item sign-in'>
              <a className='nav-link' href='#'>
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
