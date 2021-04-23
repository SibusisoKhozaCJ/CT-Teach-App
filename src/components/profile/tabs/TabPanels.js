import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditPublicInfo from '../forms/edit-public-info/EditPublicInfo';
import EditPrivateInfo from '../forms/edit-private-info/EditPrivateInfo';
import ProfileIcon from "../../../assets/icons/profile-icon/Profile.png";
import FriendIcon from "../../../assets/icons/profile-icon/Friends.png";
import GalleryIcon from "../../../assets/icons/profile-icon/galleryarticon.png";
import BlingIcon from "../../../assets/icons/profile-icon/web-certificate.png";
import { MicNone } from '@material-ui/icons';
import { Grid } from "@material-ui/core";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop:6,
    borderTop: '3px solid rgba(240, 238, 238, 0.5)',
    boxShadow: '0px 10px #0000',
    '& header':{
        boxShadow: 'none',
        borderBottom: '3px solid rgba(240, 238, 238, 0.5)'
    }
  },
  Tabs:{
      color: '#A6A6A6',
      '& div' :{
        maxHeight: 59,
        '& .PrivateTabIndicator-colorSecondary-407':{
            backgroundColor: '#FBDD3F'
        }
      }
  },
  Tab:{
    fontSize:10,
    marginTop:-5,
    marginRight:21
  }
}));

export default function TabPanels(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.Tabs}>
          <Tab label="Profile" icon={<img src={ProfileIcon} />} {...a11yProps(0)} className={classes.Tab} />
          <Tab label="Friends" icon={<img src={FriendIcon} />} {...a11yProps(1)} className={classes.Tab} />
          <Tab label="Published" icon={<img src={GalleryIcon} />} {...a11yProps(2)} className={classes.Tab} />
          <Tab label="Bling"  icon={<img src={BlingIcon} />} {...a11yProps(3)}  className={classes.Tab}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <EditPublicInfo/>
      {props.isRenderForm && <EditPrivateInfo/>}
        </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
    </div>
  );
}
