import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import { ReactComponent as PlanetLogo } from '../../assets/planet.svg';

import './navigation.styles.scss';
const navItems = ['Home', 'About', 'Contact'];

const Navigation = () => {

    return (
      <>
        <div className='navbar-container' >
            <PlanetLogo className='planet-logo' />
        </div>
        <Outlet/>
      </>

    )
}

export default Navigation;