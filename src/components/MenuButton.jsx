import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HamburgerIcon from '../icons/Hamburger';

const MenuButton = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <HamburgerIcon fill="white"/>
        </IconButton>
    );
};

export default MenuButton;