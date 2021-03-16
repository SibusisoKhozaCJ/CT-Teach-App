import React, { useEffect, useState } from "react";
import Arrowleft from "../../../assets/images/arrowleft.svg";
import Arrowright from "../../../assets/images/arrowright.svg";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectCourseDropDown = ({ selectedCourse, setSelectedCourse, coursesData }) => {
  const [coursesList, setCourseList] = useState([])
  const [disablePrevious, setDisablePrevious] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  useEffect(()=>{
      if(coursesData){
          let tempCourseList = []
          let index = -1;
        Object.entries(coursesData).forEach(([keyT, valueT]) => {
            tempCourseList.push(valueT);
            index++
            if(keyT === selectedCourse){
              setSelectedIndex(index)
            }
            
        });
        const firstCourse = Object.entries(coursesData)[0][0];
        const lastCourse = Object.entries(coursesData)[index][0];
        if(firstCourse === selectedCourse){
          setDisablePrevious(true)
        }
        if(lastCourse === selectedCourse){
          setDisableNext(true)
        }
        setCourseList(tempCourseList);
      }

  },[coursesData])

  const setPreviousCourse =()=>{
    const previousCourse = Object.entries(coursesData)[selectedIndex-1][0];
    setSelectedCourse(previousCourse)
  }
  const setNextCourse =()=>{
    const nextCourse = Object.entries(coursesData)[selectedIndex+1][0];
    setSelectedCourse(nextCourse)
  }
  return (
    <>
      <div className="project-slect">
        <div className="select-header">
          <div className="slt-btn">
            <button></button>
          </div>

          <div className="projectslect ">
            <FormControl variant="filled">
              <Select
                labelId="slect-filled-label"
                className="course-drp"
                value={selectedCourse}
                name="type"
                onChange={handleCourseChange}
              >
                {coursesList &&
                  coursesList.length > 0 &&
                  coursesList.map((course, index) => (
                    <MenuItem key={"course"+index} value={course.id}>{course.id}<span className="seperator">|</span><span>{course.title}</span></MenuItem>
                  ))}
                  {coursesList &&
                  coursesList.length <= 0 && (
                    <MenuItem disabled value="">No Course available</MenuItem>
                  )}
              </Select>
            </FormControl>
          </div>

          <div className="nextpevselect ">
            <button onClick={()=>setPreviousCourse()} disabled={disablePrevious} className={disablePrevious ? "nextslect btn-move-back btn-disabled" :"nextslect btn-move-back"}>
              <img src={Arrowleft} />
            </button>
            <button onClick={()=>setNextCourse()} disabled={disableNext} className={disableNext ? "prevslect btn-move-back btn-disabled": "prevslect btn-move-back"}>
              <img src={Arrowright} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCourseDropDown;
