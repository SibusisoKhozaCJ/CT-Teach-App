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
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [projectClass, setProjectClass] = useState("");
  const setProjectOpenClass = (pClass)=>{
    if(pClass !== ""){
      setIsProjectOpen(true)
    }else{
      setIsProjectOpen(false)
    }
    setProjectClass(pClass)
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
        {progressList && progressList.length > 0 && (
            <TribeUsersInfo progressList={progressList} isProjectOpen={isProjectOpen} />
        )}
        {/* Users Info Section end */}
        {/* //Project 1 */}
        {projectList && projectList.length > 0 && (
          projectList.map((project,index)=>(
            <Projects index={index}  progressList={progressList} projectData={project} projectClass={projectClass} setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Progress;
