import React from "react";
import UserRecord from "./user-records/user-records";
import CrsArrow from "../../../../assets/images/crossarow.svg";
import LinearProgress from "@material-ui/core/LinearProgress";
const UserRow = ({isProjectOpen, usersProgressList, lessionClass, setLessionClass}) => {
    return (
        <div className={isProjectOpen ? "table_row project-open" : "table_row"}>
            <div className="progress-name ">
                <div class="table projecttable">
                    <div class="theader name-header">
                       
                        <div class="table_header name-head">
                              <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
                            FIRST{" "}
                            <svg
                                width="15"
                                height="10"
                                viewBox="0 0 19 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.4609 0.464844L18.4346 3.61426L9.25 12.4473L0.753906 3.40918L4.00586 0.494141L9.42578 6.4707L15.4609 0.464844Z"
                                    fill="#A6A6A6"
                                />
                            </svg>
                        </div>
                        <div class="table_header name-head">
                              <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
                            LAST{" "}
                            <svg
                                width="16"
                                height="10"
                                viewBox="0 0 19 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.4609 0.464844L18.4346 3.61426L9.25 12.4473L0.753906 3.40918L4.00586 0.494141L9.42578 6.4707L15.4609 0.464844Z"
                                    fill="#A6A6A6"
                                />
                            </svg>
                        </div>
                             <div class="table_row">
             
              <div class="table_small">
                <div class="table_cell">avinash</div>
              </div>
              <div class="table_small">
                <div class="table_cell">avinash</div>
              </div>
            </div>
                          <div class="table_row">
             
              <div class="table_small">
                <div class="table_cell">avinash</div>
              </div>
              <div class="table_small">
                <div class="table_cell">avinash</div>
              </div>
            </div>
                        </div>
                        
                        {/* Project Headerr */}
                        {/* Task Header */}
                                      <div className="theader project-header">
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
        P1
        
       
      </div>
     
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
        P2
      
      </div>
   
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
         P3
       
      </div>
   
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
         P4
       
      </div>
     
      <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
        P5
      
      </div>
   
      <div className="table_header"></div>
        <div class="table_row">
             
              <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
            </div>
                <div class="table_row">
             
              <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><LinearProgress variant="determinate" value={100} /></div>
              </div>
            </div>
    </div>

                
                       {/* Challenege Header */}

                        {/* <div className="theader project-header">
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
       1
        
       
      </div>
     
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
        2
      
      </div>
   
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
        3
       
      </div>
   
      <div className="table_header">
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
        4
       
      </div>
     
      <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
      5
      
      </div>
       <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
     6
      
      </div>
       <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
      7
      
      </div>
       <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
     8
      
      </div>
       <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
      9
      
      </div>
       <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
            <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
      10
      
      </div>
   
      <div className="table_header"></div>
        <div class="table_row">
            
       
              <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
               <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
               <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
            </div>
              <div class="table_row">
            
       
              <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
               <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
               <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
               <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
                <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
            </div>
    </div> */}
              
                    {usersProgressList && usersProgressList.length > 0 && usersProgressList.map((progress,index)=>(
                        <UserRecord progress={progress}/>
                    ))}
                    
                    </div>
                    
            </div>
        </div>
    );
};
export default UserRow;