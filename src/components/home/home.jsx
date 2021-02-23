import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as Auth from '../../shared/lib/authentication'
import { saveUser } from '../../redux/actions/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const Welcome = () => {
  const userIdFromCookies = Cookies.get('userid');
  const dispatch = useDispatch();
  const {isCurrentUser} = useSelector(state => state.user);

  useEffect(() => {
    if (!isCurrentUser) {
      dispatch(saveUser(userIdFromCookies));
    }
  }, [dispatch]);

    useEffect(() => {
        Auth.getProfile().then((teachers)=>{
            console.log("Teachers " + JSON.stringify(teachers))
        }).catch((err) => {
            alert('errr')
        })
      });
    return (
        <div>
               <div className="commonheight"></div>
            <Box pb={1}>
                <Typography variant="h1">Home Page</Typography>
            </Box>
            <Typography>
                Thanks again for joining this portal! We have quite a few services available to you and there will be
                even more in the future. We have attempted to provide both educational and interesting content
                on our codetribe site. The portal, which you are currently in, is where you can do things
                like view past questionnaires, maybe update your profile information or even request more services.{"\n\n"}
                The navigation "hambruger" at the top right of the screen has all of the options as below, but please feel free
                to explore. {"\n\n"} It means a lot to us that you are here, so we hope that we have helped make life just that much
                easier and better for you.
            </Typography>

        </div>
    );
};

export default Welcome;
