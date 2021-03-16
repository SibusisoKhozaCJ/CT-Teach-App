import React, { useEffect, useState } from "react";
import Arrowleft from "../../../assets/images/arrowleft.svg";
import Arrowright from "../../../assets/images/arrowright.svg";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectCourseDropDown = ({ selectedCourse, setSelectedCourse, coursesData }) => {
  const [coursesList, setCourseList] = useState([])
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  useEffect(()=>{
      if(coursesData){
          let tempCourseList = []
        Object.entries(coursesData).forEach(([keyT, valueT]) => {
            tempCourseList.push(valueT);
        });
        setCourseList(tempCourseList);
      }

  },[coursesData])
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
                id="demo-simple-select-filled"
                value={selectedCourse}
                name="type"
                onChange={handleCourseChange}
              >
                {coursesList &&
                  coursesList.length > 0 &&
                  coursesList.map((course, index) => (
                    <MenuItem key={"course"+index} value={course.id}>{course.id}<span className="seperator">|</span>{course.title}</MenuItem>
                  ))}
                  {coursesList &&
                  coursesList.length <= 0 && (
                    <MenuItem disabled value="">No Course available</MenuItem>
                  )}
              </Select>
            </FormControl>
          </div>

          <div className="nextpevselect ">
            <button className="nextslect">
              <img src={Arrowleft} />
            </button>
            <button className="prevslect">
              <img src={Arrowright} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCourseDropDown;
