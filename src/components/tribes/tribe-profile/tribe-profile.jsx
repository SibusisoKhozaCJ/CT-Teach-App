import React, {useEffect, useState} from 'react';
import Header from "./Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import {ProfileStyles} from "./Profile.styles";
import EditPublicInfo from "./Forms/EditPublicInfo/EditPublicInfo";
import {Grid} from "@material-ui/core";
import EditPrivateInfo from "./Forms/EditPrivateInfo/EditPrivateInfo";
import Loading from "../../../shared/components/loader/Loading";
import {useDispatch, useSelector} from "react-redux";
import * as Auth from "../../../shared/lib/authentication";
import {isCurrentUser, saveUser} from "../../../redux/actions/user-actions";
import {useHistory, useParams} from "react-router-dom";

const useStylesProfile = makeStyles(ProfileStyles);

const TribeProfile = () => {
  const { id } = useParams();
  const history = useHistory();
  const classesProfile = useStylesProfile();
  const [tribeData, setTribeData] = useState({});
  const [tribeOwner, setTribeOwner] = useState({});

  const { loading, user, userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
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

  const initialize = async(id)=>{
    const isCodeExist = await CheckIfTribeCodeExist(id);    
    if(!isCodeExist)
      return history.replace(`/tribe`)

    const tribeOwner = await getTribeOwnerInfo(id);
    setTribeData({...isCodeExist})
    if(!tribeOwner)
      setTribeOwner({})
    else  
    setTribeOwner({...tribeOwner}) 
  }

  useEffect(() => {
    dispatch(saveUser());
    initialize(id);
  }, []);

  // useEffect(() => {
  //     console.log("2222222222222222222222222222222222222222222222")
  //     console.log(user)
  //     console.log(userId)
  //     console.log("2222222222222222222222222222222222222222222222")
  // }, [dispatch, loading, user ,userId ]);

  if (loading || Object.keys(tribeData).length === 0 || Object.keys(tribeOwner).length === 0) {
    return (
      <div className="loader">
        <Loading />
      </div>
    );
  }

  return (
    <div className={classesProfile.root}>
      <div className="commonheight" />
      <Header />
      <Grid container>
        <EditPublicInfo
          tribeData={tribeData}
          tribeOwner={tribeOwner} 
          isEditable={user && user.tribe_code === id}
        />
        {user && user.tribe_code === id && 
        <EditPrivateInfo 
          tribeData={tribeData}
          tribeOwner={tribeOwner}
          isEditable={user && user.tribe_code === id}
        />
        }
      </Grid>
    </div>
  );
};

export default TribeProfile;