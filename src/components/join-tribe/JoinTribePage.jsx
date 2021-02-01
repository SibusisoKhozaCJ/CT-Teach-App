import React, {useEffect, useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import Loading from "../../shared/components/loader/Loading";
import {useDispatch, useSelector} from "react-redux";
import { saveUser } from "../../redux/actions/user-actions";
import {useHistory, useLocation, useParams} from "react-router-dom";
import * as Auth from "../../shared/lib/authentication";
import { addUserToTribe, getUserTribes } from '../../redux/actions/tribe-actions';

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
    <div >
      <div className="commonheight" />
      {joinResponse && ( 
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
      }    
    </div>
  );
};

export default JoinTribePage;
