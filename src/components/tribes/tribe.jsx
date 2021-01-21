import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon1 from '../../assets/icons/tribe/icon1.svg'
import Icon2 from '../../assets/icons/tribe/icon2.svg'
import Icon3 from '../../assets/icons/tribe/icon3.svg'
import Icon4 from '../../assets/icons/tribe/icon4.svg'
import Icon5 from '../../assets/icons/tribe/icon5.svg'
import Icon6 from '../../assets/icons/tribe/icon6.svg'
import Icon7 from '../../assets/icons/tribe/icon7.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getUserTribes } from '../../redux/actions/tribe-actions';
import Loading from '../../shared/components/loader/Loading';

const Tribes = () => {
  const [expand, setExpand] = useState("");
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.user);
  const { userTribes } = useSelector(state => state.tribe);
  useEffect(() => {
    if (user !== null) {
      dispatch(getUserTribes(user))
    }
  }, [user]);

  if (loading) {
    return <div className="loader"><Loading /></div>;
  }
  return (
    <div className="tribe-page">
      <div className="commonheight"></div>
      {userTribes && userTribes.length > 0 && (
        (
          userTribes.map((tribe, index) => (
            <div className="nav-slide">
              <Grid container spacing={1} className="main-manu" xs={6}>
                <Grid item xs={12}>
                  <Typography variant="h1" className="title">{tribe.code}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <div className="tribe-icon">
                    <img src={Icon1} className="coverage" />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="tribe-icon">
                    <img src={Icon2} className="coverage" />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="tribe-icon">
                    <img src={Icon3} className="coverage" />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="tribe-icon">
                    <img src={Icon4} className="coverage" />
                  </div>
                </Grid>
                {expand === ("tribe"+index) && <Grid xs={12} className="tribe-expandtext">
                  <p>Friends that love CSS and JS functions in business websites.</p>
                  <ul>
                    <li>
                      <strong> MEMBERS: </strong> {tribe.users.length}
                             </li>
                    {/* <li>
                      <strong> HOME: </strong>    Paris, France
                             </li>
      
                    <li>
                      <strong> TAGS: </strong>    Beginner/Intermediate/Advanced
                             </li>
                    <li>
                      <strong> STATUS: </strong>    Active (or Active # days ago.)
                             </li>
                    <li>
                      <strong> FOUNDED: </strong>    03 Mar, 2021
                             </li> */}
                  </ul>
                  <Grid container spacing={1} xs={12} className="expand-icontext">
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon5} className="coverage" />
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon6} className="coverage" />
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="tribe-button">
                        <Button variant="contained" color="secondary">
                          OPEN
                                       <img src={Icon7} />
                        </Button>
                      </div>
                    </Grid>
      
                  </Grid>
      
                </Grid>}
      
              </Grid>
      
              <div className="expand-btn">
                <div className="d-flex mt-2 justify-content-center font-13 expand-btn">
                  {expand === "" ? (
                    <a
                      style={{ cursor: "pointer", textAlign: "center" }}
                      className="text-primary read-more"
                      onClick={(e) => setExpand("tribe"+index)}
                    >
                      <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9971 0.332031L21.5654 4.11133L10.5439 14.7109L0.348633 3.86523L4.25098 0.367187L10.7549 7.53906L17.9971 0.332031Z" fill="#D50073" />
                      </svg>
      
                    </a>
                  ) : (
                      <a
                        style={{ cursor: "pointer", textAlign: "center" }}
                        className="text-primary read-more"
                        onClick={(e) => setExpand("")}
                      >
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.65234 15.2188L0.0839844 11.4395L11.1055 0.839844L21.3008 11.6855L17.3984 15.1836L10.8945 8.01172L3.65234 15.2188Z" fill="#A6A6A6" />
                        </svg>
      
                      </a>
                    )}
                </div>
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Tribes;