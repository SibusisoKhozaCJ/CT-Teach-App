import React, {useEffect, useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import Loading from "../../shared/components/loader/Loading";
import {useDispatch, useSelector} from "react-redux";
import { saveUser } from "../../redux/actions/user-actions";
import {useHistory, useLocation, useParams} from "react-router-dom";
import * as Auth from "../../shared/lib/authentication";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { addUserToTribe, getUserTribes } from '../../redux/actions/tribe-actions';
import Celebrate from "../../assets/images/celebrate.svg"

const JoinTribePage = ({isAuthenticated}) => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //const { userTribes,userJoinedTribes } = useSelector((state) => state.tribe);

  const [loading,setLoading] = useState(true)
  const [joinResponse,setJoinRepsonse] = useState('');
  const [joinTribeResponse, setJoinTribeResponse] = useState({
    status: "",
    message: "",
  });
const CheckIfTribeCodeExist = async (code) => {
    return await Auth.checkIfTribeExist(code)
      .then((tribe) => { 
        return tribe;   
      })
      .catch((err) => {  
        return null;
      });
};
const getTribeOwnerInfo =async (code)=>{
    return await Auth.getTribeOwner(code)
    .then((tribeOwner)=>{
        if(tribeOwner && tribeOwner.length)
          return tribeOwner[0];
        else
          return null;  
    })
    .catch((err)=>{
        return null;
    })  
}
const CheckifUserExist = async (userId) =>{
    if(!userId) return null;
    return await Auth.getProfile(userId)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        return null;
      });
}
  const initialize = async(id)=>{
    const isCodeExist = await CheckIfTribeCodeExist(id.split('-')[0]);
    const tribeOwner = await getTribeOwnerInfo(id.split('-')[0]);
    const isUserExist = await CheckifUserExist(id.split('-')[1])

    if(isCodeExist && tribeOwner && isUserExist){
        setLoading(false);
        return setJoinRepsonse('JOIN BY USER');    
    }
    if(isCodeExist && tribeOwner){
        setLoading(false);
        return setJoinRepsonse('JOIN BY ADMIN')
    }
    setLoading(false);
    return setJoinRepsonse('Invalid Join Code');    
  }
    
  useEffect(() => {
      initialize(id);
  }, []);
  
  useEffect(() => {
    if (user !== null) {
      dispatch(getUserTribes(user));
    }else{
      dispatch(saveUser(undefined));
    }
  }, [dispatch,user]);

  const handleLogInJoin = ()=>{
     history.replace(`/login?redirect=${location.pathname}`)
  }
  
  const handleSignUpJoin =()=>{
     history.replace(`/new-account?redirect=${location.pathname}`)
  }

  const handleInvite =async ()=>{
    if(user.tribe_joined && user.tribe_joined.length){
        for(let i=0;i<user.tribe_joined.length;i++){
          if(user.tribe_joined[i] === id.split('-')[0]){
            setJoinTribeResponse({
              status: "red",
              message: "You Have already been added to the tribe",
              });
              return;
          }  
        }
    }

    const isCodeExist = await CheckIfTribeCodeExist(id.split('-')[0]);
      if (isCodeExist) {
        dispatch(addUserToTribe(id.split('-')[0], isCodeExist)).then(
        (res) => {
          setJoinTribeResponse({
            status: "green",
            message: "Succesfully Added To The Tribe",
          });
        }
        );
        } else {
          setJoinTribeResponse({
            status: "red",
            message: "The Entered Tribe is Not Found",
          });
        }
  }

  const handleReject = ()=>{
    history.push(`/`);
    window.location.reload()
  }
  if (loading) {
    return (
      <div className="loader">
        <Loading />
      </div>
    );
  }

  return (
    <>
    <div className="commonheight" />
    <div className="invite-link" >     
      {/* {joinResponse && ( 
          <Grid container>    
          <h1>{joinResponse}</h1>
          <h1></h1>
          {!isAuthenticated && <Button color="primary" variant="outlined" onClick={handleSignUpJoin}>Sign Up</Button>}
          {!isAuthenticated && <Button color="primary" variant="outlined" onClick={handleLogInJoin}>Log in</Button>}
          {isAuthenticated && <Button color="primary" variant="outlined" onClick={handleInvite}>Accept Invite</Button>}
          {isAuthenticated && <Button color="primary" variant="outlined" onClick={handleReject}>Reject</Button>}
          {joinTribeResponse.message && (
                    <p style={{ color: `${joinTribeResponse.status}` }}>
                      {joinTribeResponse.message}
                    </p>
          )}
          </Grid>)
      }     */}

    
         <Grid >  
           <h1 className="link-heading">OH MY GOSH</h1>  
          <Grid>
                    <Grid item xs={12} className="top-section">
                     
                        <img src={Celebrate}/>
                         <p>
                        YOU’VE BEEN INVITED TO A TRIBE!
                      </p>                       
                    </Grid>
                    <Grid className="main-link-section">

                   
                     <Grid item xs={12} className="link-user">
                      <p>
                        By user: <span> Denis Rodman</span>
                      </p>                       
                    </Grid>
                     <Grid item xs={12} className="link-add">
                       <p>
                       At:  <span> Paris High, France</span>
                      </p>                                            
                    </Grid>
                     <Grid item xs={12} className="link-tribleClass">
                       <p>
                          Tribe or Class Name:  <br/><span> 20 3rd Term Grade 8 D</span>
                      </p>                                            
                    </Grid>
                    <Grid  item xs={12} className="invt">
                      <p>
                        DO YOU ACCEPT THE INVITE?
                      </p>
                    </Grid>
                       <Grid  item xs={12}>
                         <h2>
                           YAAASSSS!!!
                         </h2>
                       </Grid>
                        <Grid  item xs={12}>
                          <Button color="primary" variant="outlined" className="linkbtn">I’M NEW, LET’S GO!</Button>
                          <Button color="primary" variant="outlined"  className="linkbtn1">I ALREADY HAVE AN ACCOUNT</Button>                          
                        </Grid>
                         </Grid>
                 
         </Grid>   
         </Grid>  

          <Grid >  
           <h1 className="link-heading">YAAAY!!!</h1>  
          <Grid>
                    <Grid item xs={12} className="top-section">
                     
                        <img src={Celebrate}/>
                         <p>
                        I GOT A JOIN CODE.
                      </p>                       
                    </Grid>
                    <Grid className="main-joincode-section">

                    <Grid container  spacing={2} className="invite-code">    
                    <Grid item xs={9}>
                        <Box my={1}>
                            <TextField
                                fullWidth                              
                                label="ENTER CODE"
                                variant="outlined"  
                            />
                        </Box>
                    </Grid>
                     <Grid item xs={3}>
                         <Button  variant="outlined" className="GOlinkbtn"> GO</Button>
                    </Grid>
                    </Grid>
                     <Grid item xs={12} className="link-add">
                        <h3>I DON’T HAVE A CODE.</h3> 
                        <p>No worries. You can code anyway and once you’re done Project 1 you can start your OWN Tribe.</p>                                         
                    </Grid>
                  
                      
                          <Grid  item xs={12}>
                          <Button  variant="outlined" className="linkbtn">I’M NEW, LET’S GO!</Button>
                          <Button  variant="outlined"  className="linkbtn1">I ALREADY HAVE AN ACCOUNT</Button>                          
                          </Grid>
                         </Grid>
                 
         </Grid>   
         </Grid>  

</div>
</>
  );
};

export default JoinTribePage;
