import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ThemedDivider from './ThemedDivider';
import MenuButton from './MenuButton';
import routes from '../constants/routes';
import { removeCookies } from '../lib/authentication';
import { AuthContext } from '../contexts/authContext';
import config from '../config';

const MAIN_MENU_OPTIONS = {
    'Home': routes.HOME,   
};

const Menu = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    const { setUser, user, setTokens } = useContext(AuthContext);

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
        <React.Fragment key="right">
            <MenuButton onClick={toggleMenu(!isOpen)}/>
            <Drawer anchor="right" open={isOpen} onClose={toggleMenu(false)}>
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
                            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText disableTypography primary={<Typography variant="h4">Contact Us</Typography>} />
                        </ListItem>
                        <ListItem button key="log-out" onClick={logOut}>
                            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText disableTypography primary={<Typography variant="h4">Log Out</Typography>} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default Menu;