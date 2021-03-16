import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressHeader from "./progress-header/progress-header";
import {
  getAllCourses,
  getCourseProjects,
  getProgressListOfTribe,
  getUserTribes,
} from "../../redux/actions/progress-actions";
import { saveUser } from "../../redux/actions/user-actions";
import Cookies from "js-cookie";
import Loading from "../../shared/components/loader/Loading";
import TribeUsersInfo from "./users-info/users-info";
import SelectProjects from "./drop-down-progress/project-drop-down";
import SelectCourseDropDown from "./drop-down-progress/course-dropdown";
import SelectTaskDropDown from "./drop-down-progress/task-drop-down";
const Progress = () => {
  const userIdFromCookies = Cookies.get("userid");
  const dispatch = useDispatch();
  const {
    isLoading,
    progressList,
    projectList,
    trainingList,
    courseList,
    tribesList,
  } = useSelector((state) => state.progress);
  const { user } = useSelector((state) => state.user);
  const [projectClass, setProjectClass] = useState("");
  const [selectedTribe, setSelectedTribe] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedTraning, setSelectedTraning] = useState("");
  
  useEffect(() => {
    if (!user) {
      dispatch(saveUser(userIdFromCookies));
    } else {
      dispatch(getUserTribes());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if(courseList){
      const defaultCourse = Object.entries(courseList)[0][0];
      setSelectedCourse(defaultCourse)
    }else{
      dispatch(getAllCourses());
    }
  }, [courseList]);

  useEffect(() => {
    if (selectedCourse !== "") {
      dispatch(getCourseProjects(selectedCourse));
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedTribe !== "") {
      dispatch(getProgressListOfTribe(selectedTribe));
    }
  }, [selectedTribe]);

  if (isLoading) {
    return (
      <div className="loader">
        <Loading />
      </div>
    );
  }

  return (
    <div className="main-pro-page">
      <div className="commonheight"></div>
      {/* Header with filters and tribes */}
      <ProgressHeader
        setSelectedTribe={(evt) => setSelectedTribe(evt)}
        selectedTribe={selectedTribe}
        tribesList={tribesList}
      />
      {/* Show Courses Dropdown */}
      {selectedProject === "" && (
        <SelectCourseDropDown
        setSelectedCourse={(evt) => setSelectedCourse(evt)}
        selectedCourse={selectedCourse}
        coursesData={courseList}
      />
      )}
      
      {/* End Courses Dropdown */}
      {/* Show Project Drop Down */}
      {selectedProject !== "" && selectedTraning === "" && (
        <SelectProjects projectList={projectList} setSelectedProject={(evt)=>setSelectedProject(evt)} selectedCourse={selectedCourse} selectedProject={selectedProject} />
      )}
      {/* End Project Drop Down */}
      {/* Show Task Drop Down */}
      {selectedTraning !== "" && (
        <SelectTaskDropDown trainingList={trainingList} selectedTraning={selectedTraning} setSelectedTraning={(evt)=>setSelectedTraning(evt)} selectedProject={selectedProject} />
      )}
      {/* End Task Drop Down */}
      <div className="progess-page">
        {/* Users Info Section */}
        {projectList && projectList.length > 0 && (
          <TribeUsersInfo
            usersProgressList={progressList}
            projectList={projectList}
            setSelectedProject={(evt)=>{setSelectedProject(evt)}}
            selectedProject={selectedProject}
            trainingList={trainingList}
            selectedTraning={selectedTraning}
            selectedCourse={selectedCourse}
            setSelectedTraning={(evt)=>setSelectedTraning(evt)}
          />
        )}

      </div>
    </div>
  );
};

export default Progress;
