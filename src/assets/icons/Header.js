import React from 'react';
import LightLogo from '../images/lightlogo.png';
import DarkLogo from '../images/darklogo.png';

const Header = ({ width , light, height }) => (
    <img src={light ? LightLogo : DarkLogo} height={height ? height : "auto"}  width={width} alt="Choix" />
);

export default Header;