import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressHeader from "./progress-header/progress-header";
import { getCourseProjects, getProgressListOfTribe } from "../../redux/actions/progress-actions";
import Projects from "./projects/projects"
import { saveUser } from "../../redux/actions/user-actions";
import Cookies from 'js-cookie';
import Loading from "../../shared/components/loader/Loading";
import TribeUsersInfo from "./users-info/users-info"
const Progress = () => { 
  const userIdFromCookies = Cookies.get('userid');
  const dispatch = useDispatch();
  const {isLoading, progressList, projectList, trainingList} = useSelector(state => state.progress);
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
      dispatch(getCourseProjects("C001"))
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
        {projectList && projectList.length > 0 && (
            <TribeUsersInfo isProjectOpen={isProjectOpen} />
        )}
        {/* Users Info Section end */}
        {/* //Project 1 */}
        {projectList && projectList.length > 0 && (
          projectList.map((project,index)=>(
            <Projects index={index} projectList={projectList} trainingList={trainingList} projectData={project} projectClass={projectClass} setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Progress;
