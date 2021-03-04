import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& span': {
      fontWeight: 'bold',
    },
  },
  avatar: {
    background: '#43D4DD',
    border: '2px solid #e83e8c',
    textAlign: 'center',
    lineHeight: '44px',
    fontSize: '25px',
    display: 'block',
    marginRight: '8px',
  },
  dots: {
    color: '#43D4DD',
  },
  backBtn: {
    transform: 'rotate(-90deg);',
  },
  roomName: {
    fontWeight: 'bold',
    margin: 0,
    fontSize: '18px',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  cloudDownloadIcon: {
    color: '#43D4DD',
    fontSize: '1.7rem',
  },
}));

export default useStyles;
