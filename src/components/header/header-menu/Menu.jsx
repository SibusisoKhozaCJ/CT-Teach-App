import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ThemedDivider from '../../../shared/components/theme-divider/ThemedDivider';
import MenuButton from '../../../shared/components/buttons/MenuButton';
import routes from '../../../routes';
import { removeCookies } from '../../../shared/lib/authentication';
import { AuthContext } from '../../../shared/contexts/authContext';

const MAIN_MENU_OPTIONS = {
    'Home': routes.HOME,   
};

const Menu = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    const { setUser, setTokens } = useContext(AuthContext);

    const toggleMenu = status => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        toggleIsOpen(status);
    };

    const logOut = () => {      
        setUser();
        setTokens();
        removeCookies();
    };

    return (
        <React.Fragment key="left">
            <MenuButton onClick={toggleMenu(!isOpen)}/>
            <Drawer anchor="left" open={isOpen} onClose={toggleMenu(false)}>
                <div
                    onClick={toggleMenu(false)}
                    onKeyDown={toggleMenu(false)}
                >
                    <List>
                        {Object.keys(MAIN_MENU_OPTIONS).map(text => (
                            <ListItem button key={text} to={MAIN_MENU_OPTIONS[text]} component={NavLink}>
                                <ListItemText disableTypography primary={<Typography variant="h4">{text}</Typography>} />
                            </ListItem>
                        ))}
                    </List>
                    <ThemedDivider />
                    <List>
                        <ListItem button key="contact-us" to={routes.CONTACT_US} component={NavLink}>
                            <ListItemText disableTypography primary={<Typography variant="h4">Contact Us</Typography>} />
                        </ListItem>
                        <ListItem button key="log-out" onClick={logOut}>
                            <ListItemText disableTypography primary={<Typography variant="h4">Log Out</Typography>} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default Menu;