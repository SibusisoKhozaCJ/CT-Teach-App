import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

export default withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: 1,
        width: '100%',
    },
}))(Divider);
