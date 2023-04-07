import {useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import { ReactComponent as LOGO } from '../../assets/LOGO.svg';

import './navigation.styles.scss';
const navItems = ['Home', 'About', 'Contact'];

const Navigation = () => {
  const navigate = useNavigate();

    return (
      <>
        <div className='navbar-container' >
            <LOGO className='planet-logo' onClick={() => navigate("/")} />
        </div>
        <Outlet/>
      </>

    )
}

export default Navigation;