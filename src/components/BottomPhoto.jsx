/**
 * This is the hero image at the bottom of some of the pages
 */

import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ROUTES from '../constants/routes';
import ContactUsHero from '../images/contact_us_hero.png';
import ServicesHero from '../images/contraceptive_methods.png';
import WelcomeHero from '../images/hero.png';

const ROUTES_TO_PHOTOS = {
    [ROUTES.HOME]: ServicesHero,
    [ROUTES.CONTACT_US]: ContactUsHero,
    [ROUTES.WELCOME]: WelcomeHero,
};

const BottomPhoto = ({ width }) => {
    const { pathname } = useLocation();

    const src = ROUTES_TO_PHOTOS[pathname];

    if (!src) return null;

    return (
        <Box pt={3}>
            <img src={src} width={width} alt="Choix" />
        </Box>
    );
};

BottomPhoto.defaultProps = {
    width: '100%',
};

export default BottomPhoto;
