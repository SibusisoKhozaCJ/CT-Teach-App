import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressHeader from "./progress-header/progress-header";
import { getProgressListOfTribe } from "../../redux/actions/progress-actions";
import Projects from "./projects/projects"
import { saveUser } from "../../redux/actions/user-actions";
import Cookies from 'js-cookie';
import Loading from "../../shared/components/loader/Loading";
const Progress = () => { 
  const userIdFromCookies = Cookies.get('userid');
  const dispatch = useDispatch();
  const {isLoading, progressList} = useSelector(state => state.progress);
  const {user} = useSelector(state => state.user);
  useEffect(()=>{
    if (!user) {
      dispatch(saveUser(userIdFromCookies));
    }else{
      dispatch(getProgressListOfTribe())
    }
  },[dispatch,user])

  if (isLoading) {
    return (
      <div className="loader">
        <Loading />
      </div>
    )
  }
  
  return (
    <div className="main-pro-page">
        <div className="commonheight"></div>
      <ProgressHeader />
      <div className="progess-page">
        
         <ProjectsName isProjectOpen={isProjectOpen} />

        {/* //Project 1 */}
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
      </div>
    </div>
  );
};

export default Progress;
