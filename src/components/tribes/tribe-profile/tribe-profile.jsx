import React, {useEffect, useState} from 'react';
import Header from "./header-tribe/header";
import {makeStyles} from "@material-ui/core/styles";
import {ProfileStyles} from "./Profile.styles";
import EditPublicInfo from "./tribe-edit-forms/edit-public-info/edit-public-info";
import {Grid} from "@material-ui/core";
import EditPrivateInfo from "./tribe-edit-forms/edit-private-info/edit-private-info";
import Loading from "../../../shared/components/loader/Loading";
import {useDispatch, useSelector} from "react-redux";
import * as Auth from "../../../shared/lib/authentication";
import {saveUser} from "../../../redux/actions/user-actions";
import {useHistory, useParams} from "react-router-dom";
import { tribeCodeToIframe, tribeEmojiCode } from '../../../redux/actions/tribe-actions';

const useStylesProfile = makeStyles(ProfileStyles);

const TribeProfile = () => {
  const { id } = useParams();
  const history = useHistory();
  const classesProfile = useStylesProfile();
  const [tribeData, setTribeData] = useState({});
  const [tribeOwner, setTribeOwner] = useState({});

  const { loading, user } = useSelector((state) => state.user);
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
    if(isCodeExist.codeInIframe)
      dispatch(tribeCodeToIframe(isCodeExist.codeInIframe))
    if(isCodeExist.emojiCode)
      dispatch(tribeEmojiCode(isCodeExist.emojiCode))
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
  }, [dispatch]);

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
      <Header 
        isEditable={user && user.tribe_code === id}
        tribeCode={id}
      />
      <Grid container className="TribeP">
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