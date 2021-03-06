import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflow: 'auto',
    '& span': {
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 92px);',
      '& span': {
        fontSize: '16px !important',
      },
    },
  },
  avatar: {
    fontFamily: 'Arial',
    background: '#43D4DD',
    border: '2px solid #e83e8c',
    fontSize: '26px',
  },
  dots: {
    color: '#43D4DD',
  },
  customBadge: {
    backgroundColor: '#76dc37',
    color: 'white',
  },
}));

export default useStyles;
