import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressHeader from "./progress-header/progress-header";
import { getProgressListOfTribe } from "../../redux/actions/progress-actions";
import Projects from "./projects/projects"
import { saveUser } from "../../redux/actions/user-actions";
import Cookies from 'js-cookie';
import Loading from "../../shared/components/loader/Loading";
import TribeUsersInfo from "./users-info/users-info"
const Progress = () => { 
  const userIdFromCookies = Cookies.get('userid');
  const dispatch = useDispatch();
  const {isLoading, progressList, projectList} = useSelector(state => state.progress);
  const {user} = useSelector(state => state.user);
  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const setProjectOpenClass = (projectclass)=>{
    if(projectclass !== ""){
      setIsProjectOpen(true)
    }else{
      setIsProjectOpen(false)
    }
  }
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
        {/* Users Info Section */}
        <TribeUsersInfo isProjectOpen={isProjectOpen} />
        {/* Users Info Section end */}
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
