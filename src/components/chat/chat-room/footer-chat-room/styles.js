import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  input: {
    borderRadius: '24px',
    padding: '1%',
    left: '50%',
    width: '66%',
    transform: 'translateX(-50%)',
    border: '1px solid grey',
    backgroundColor: '#f8f7f7',
    '@media (max-width: 330px)': {
      width: '200px',
    },
  },
  iconButton: {
    position: 'absolute',
    right: '4%',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    zIndex: 1,
  },
  iconButtonWhite: {
    color: '#c4c4c4',
    backgroundColor: 'rgba(16,62,88,255)',
  },
  toggleCodeTextBtn: {
    position: 'absolute',
    left: '4%',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    zIndex: 1,
  },
  toggleCodeTextBtnWhite: {
    color: '#c4c4c4',
    backgroundColor: 'rgba(16,62,88,255)',
  },
  textArea: {
    position: 'absolute',
    bottom: 0,
    fontSize: '16px',
    padding: '11px 8px 8px 8px',
    height: '100%',
    width: '66%',
    overflow: 'auto',
    outline: 'none',
    '-webkit-box-shadow': 'none',
    '-moz-box-shadow': 'none',
    boxShadow: 'none',
    resize: 'none',
    background: 'black',
    color: '#ffffff',
    borderRadius: '10px',
    left: '50%',
    '-webkit-transform': 'translateX(-50%)',
    '-ms-transform': 'translateX(-50%)',
    transform: 'translateX(-50%)',
    border: 'none',
  },
  textAreaExtend: {
    height: '100px',
  },
  textareaBox: {
    width: '100%',
    background: '#000000',
    position: 'relative',
    bottom: 0,
    height: '96%',
    borderRadius: '26px',
    margin: '0 1% 0 1%',
    [theme.breakpoints.down('xs')]: {
      height: '88%',
    },
  },
}));

export default useStyles;
