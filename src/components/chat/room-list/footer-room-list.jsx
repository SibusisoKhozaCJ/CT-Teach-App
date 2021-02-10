import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import icon1 from '../../../assets/icons/footer-icon/icon1.svg';
import mission from '../../../assets/images/mission.svg';
import icon3 from '../../../assets/icons/footer-icon/icon3.svg';
import chat from '../../../assets/icons/footer-icon/chat.svg';
import arrow from '../../../assets/icons/footer-icon/arrw.svg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#43D4DD',
    alignItems: 'center',
    '& img': {
      width: '26px',
    },
  },
  divider: {
    height: '24px',
    background: 'white',
  },
});

const FooterRoomList = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const items = [icon1, chat, icon3, mission, arrow];

  return (
    <div className="footer">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        {items.map(el => [
          <BottomNavigationAction icon={<img src={el} alt={el} />} />,
          <Divider className={classes.divider} orientation="vertical" />,
        ])}
      </BottomNavigation>
    </div>
  );
};

export default FooterRoomList;
