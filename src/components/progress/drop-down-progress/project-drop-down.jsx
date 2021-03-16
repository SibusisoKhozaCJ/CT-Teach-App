import React from "react";
import Arrowleft from "../../../assets/images/arrowleft.svg";
import Arrowright from "../../../assets/images/arrowright.svg";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectProjects = ({
  selectedProject,
  setSelectedProject,
  selectedCourse,
  projectList
}) => {
  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };
  return (
    <>
      <div className="project-slect">
        <div className="select-header">
          <div className="slt-btn">
            <button>{selectedCourse}</button>
          </div>
          <div className="projectslect prj1">
            <FormControl variant="filled">
              <Select
                labelId="slect-filled-label"
                id="demo-simple-select-filled"
                value={selectedProject}
                name="type"
                onChange={handleProjectChange}
              >
                {projectList &&
                  projectList.length > 0 &&
                  projectList.map((project, index) => (
                    <MenuItem key={"project"+index} value={project.id}>{project.id}<span className="seperator">|</span>{project.title}</MenuItem>
                  ))}
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

export default SelectProjects;
