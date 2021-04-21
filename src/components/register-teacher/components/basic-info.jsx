import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import routes from "../../../routes";
import StudentRegisterStep1 from "../register-steps/step1-user";
import TeachRegisterStep1 from "../register-steps/step1-teacher";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';


const BasicInfo = ({
  updateForm,
  form,
  loading,
  handleSubmitStudentFirstForm,
  handleSubmitTeacherFirstForm,
  error,
  search,
  registerType,
  setRegisterType,
}) => {

  const[value,setValue]=useState("1");
  const handleChange = (event,string) => {     
    setValue(string);
    setRegisterType(string)
  };
  useEffect(()=>{
    setValue(registerType)
  },[registerType])
  return (
    <section className="registration">
      <div className="registration_main">
        <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} value={value} aria-label="simple tabs example">
            <Tab label="BUILD" value="1"/>
            <Tab label="TEACh" value="2"  className="tech-tab"/>
           
          </TabList>
        </AppBar>
        <TabPanel  value="1">
           <Box my={2} className="registration_title">
          <h1>
            REGISTRATION IS <br />
            SOOOOO EASY
          </h1>
        </Box>
        <Box my={2}>
          {error && (
            <Box my={1}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          <form autocomplete="off" onSubmit={handleSubmitStudentFirstForm}>
            <StudentRegisterStep1
              onUpdate={updateForm}
              form={form}
              loading={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="btn-frmn"
              // disabled={loading}
            >
              <p className="reg-happy">WOOOO HOOOO!</p>
              <p className="reg">REGISTER</p>
            </Button>
          </form>
        </Box>
        <div className="letlogin">
          <Box
            pb={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fullWidth
          >
            I’ve been here before.
            <Button
              color="primary"
              style={{ textTransform: "none", textDecoration: "underline" }}
              variant="text"
              to={`${routes.LOGIN}${search}`}
              component={NavLink}
            >
              Let me login.
            </Button>
          </Box>
        </div></TabPanel>
        <TabPanel value="2">

           <Box my={2} className="registration_title">
          <h1>
            REGISTRATION IS <br />
            SOOOOO EASY
          </h1>
        </Box>
        <Box my={2}>
          {error && (
            <Box my={1}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          <form autocomplete="off" onSubmit={handleSubmitTeacherFirstForm}>
            <TeachRegisterStep1
              onUpdate={updateForm}
              form={form}
              loading={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
             className="tech-btn"
              // disabled={loading}
            >
              <p className="reg-happy">WOOOO HOOOO!</p>
              <p className="reg">REGISTER</p>
            </Button>
          </form>
        </Box>
        <div className="letlogin">
          <Box
            pb={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fullWidth
          >
            I’ve been here before.
            <Button
              color="primary"
              style={{ textTransform: "none", textDecoration: "underline" }}
              variant="text"
              to={`${routes.LOGIN}${search}`}
              component={NavLink}
            >
              Let me login.
            </Button>
          </Box>
        </div>
        
        </TabPanel>
       
      </TabContext>
      </div>
    </section>
  );
};

export default BasicInfo;
