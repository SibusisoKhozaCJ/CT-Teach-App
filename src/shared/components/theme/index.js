/**
 * Creating the theme that is passed in through index.js to the rest of the app's components.
 */

import { createMuiTheme } from '@material-ui/core/styles';

const spacing = 8;
const fontSize = 24;

export const palette = {
    primary: { main: '#61b1ad', contrastText: '#fdfdfe', light: '#61b1ad44' },
    secondary: { main: '#d6dadd', contrastText: '#000000' },
    action: { disabledBackground: '#00000022', disabled: '#00000088' },
};

const theme = {
    palette,
    themeName: 'portal',
    spacing,
    props: {
        MuiButtonBase: {
          disableRipple: true,
        },
        MuiPaper: {
            elevation: 0,
        },
        MuiDivider: { width: '100%' },
    },
    overrides: {
        MuiDrawer: {
            paper: {
                padding: 2*spacing,
            },
        },
        MuiTypography: {
            root: { textTransform: 'none' },
            h1: { fontSize: fontSize * 1.25 },
            h2: { fontSize: fontSize * 1.125 },
            h3: { fontSize: fontSize },
            h4: { fontSize: fontSize * 0.875 },
            h5: { fontSize: fontSize * 0.75 },
            subtitle1: { fontSize: fontSize * 0.625, lineHeight: 1.5 },
        },
    },
}

export default createMuiTheme(theme);