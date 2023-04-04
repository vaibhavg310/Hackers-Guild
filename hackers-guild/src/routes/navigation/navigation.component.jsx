import {useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import { ReactComponent as PlanetLogo } from '../../assets/planet.svg';

import './navigation.styles.scss';
const navItems = ['Home', 'About', 'Contact'];

const Navigation = () => {
  const navigate = useNavigate();

    return (
      <>
        <div className='navbar-container' >
            <PlanetLogo className='planet-logo' onClick={() => navigate("/home")} />
        </div>
        <Outlet/>
      </>

    )
}

export default Navigation;