import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from './header-menu/Menu';
import HeaderLogo from '../../assets/icons/Header';
import { AuthContext } from '../../shared/contexts/authContext';
import useWindowDimensions from '../../hooks/getWindowDimensions';

const Header = () => {
    const { headerHeight } = useWindowDimensions();
    const { tokens: { isAuthenticate } = {} } = useContext(AuthContext);
    if (!isAuthenticate) return null;

    return (
        <Box mb={2}>
            <AppBar position="sticky" style={{ margin: 0, maxHeight: headerHeight }}>
                {/* <Toolbar>
                    <HeaderLogo />
                    <IconButton edge="end" aria-label="menu" style={{ marginLeft: 'auto' }}>
                        <Menu />
                    </IconButton>
                </Toolbar> */}
            </AppBar>
        </Box>
    );
};

export default Header;
