import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    width: '82%',
    border: '2px solid rgba(166, 166, 166, 0.5)',
    marginLeft: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  switchButton: {
    marginLeft: 0,
  },
  notificationsButton: {
    width: "40px",
    height: "32px",
    border: "2px solid rgba(166, 166, 166, 0.5)",
    borderRadius: "5px",
    marginRight: "5px",
  }
}));

export default useStyles;
