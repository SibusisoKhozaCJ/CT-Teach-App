import React, { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parse } from "qs";
import routes from "../../routes";
import { firebaseInsert } from "../../shared/lib/authorizedFetch";
import * as Auth from "../../shared/lib/authentication";
import { AuthContext } from "../../shared/contexts/authContext";
import randomize from "randomatic";
import BasicInfo from "./components/basic-info";
import TypeAndEmailForm from "./components/type-email";
import SchoolDetailForm from "./components/school-detail";
import InviteToTribeForm from "./components/invite-code";

const CreateNewAccountPage = () => {
  const history = useHistory();
  debugger
  const [currentStep, setCurrentStep] = useState(1);
  const { search, state: fromSignInData } = useLocation();
  const params = parse(search, { ignoreQueryPrefix: true });
  const [form, updateForm] = useState({
    email: params.email,
    password: fromSignInData && fromSignInData.password,
    firstname: "",
    lastname: "",
    type: "",
    schoolname: "",
    day: "",
    month: "",
    year: "",
    city: "",
    isTeacher: false,
    phone: "",
    schoolAlreadySigned: false,
  });
  const [loading, updateLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(true);
  const [error, updateError] = useState();
  const { setTokens } = useContext(AuthContext);
  const [userTribeCode, setTribeCode] = useState("");

  useEffect(() => {
    if (params && params.redirect) {
      let paramsString = params.redirect;
      if (paramsString.includes("/join/")) {
        paramsString = paramsString.replace("/join/", "");
        paramsString = paramsString.split("-")[0];
        if (paramsString) {
          updateForm({
            ...form,
            schoolAlreadySigned: true,
            schoolAlreadySignedForced: true,
            joincode: paramsString,
          });
        }
      }
    }
    setIsInitialized(false);
  }, []);
  const handleTeacherSubmit = async (e) => {
    e.preventDefault();
    updateLoading(true);
    updateError("");
    handleFormSubmit();
  };

  const handleFormSubmit = async () => {
    const { schoolAlreadySigned, joincode } = form;
    if (schoolAlreadySigned) {
      const isCodeExist = await CheckIfTribeCodeExist(joincode);
      if (!isCodeExist) {
        updateError("Invalid Join code");
        updateLoading(false);
        setCurrentStep(2);
      } else {
        createUser(isCodeExist);
      }
    } else {
      createUser();
    }
  };

  const createUser = (tribeData) => {
    const {
      email,
      password,
      firstname,
      lastname,
      city,
      day,
      month,
      year,
      isTeacher,
      phone,
      schoolname,
      schoolAlreadySigned,
      joincode,
    } = form;
    Auth.createUser(email, password)
      .then(async (res) => {
        if (schoolAlreadySigned) {
          let tribeInfo = tribeData;
          tribeInfo.users.push(res.user.uid);
          await Auth.updateTribe(tribeInfo);
          firebaseInsert("Users/" + res.user.uid, {
            email: email,
            firstname: firstname,
            lastname: lastname,
            city: city,
            is_teacher: isTeacher,
            dob: day + "-" + month + "-" + year,
            phone: phone,
            schoolName: schoolname,
            tribe_joned: [joincode],
          });
          Auth.setCookies(email, firstname);
          setTokens({ isAuthenticate: true });
          // if(history.location && history.location.search.indexOf("redirect=/join") >= 0){
          //   history.push(routes.TRIBE);
          // }else{
          //   setTribeCode(joincode);
          //   setCurrentStep(4);
          // }
          setTribeCode(joincode);
          setCurrentStep(4);
        } else {
          CreateTribeAndRegister(res);
        }
      })
      .catch((err) => {
        updateError(err.message);
        updateLoading(false);
        setCurrentStep(2);
      });
  };

  const CreateTribeAndRegister = async (res) => {
    const {
      email,
      firstname,
      lastname,
      city,
      day,
      month,
      year,
      type,
      phone,
      isTeacher,
      schoolname,
    } = form;
    const tribeCode = `${randomize("A", 2)}${randomize("0", 3)}`;
    const isCodeExist = await CheckIfTribeCodeExist(tribeCode);
    if (isCodeExist) {
      alert("Error while creting a tribe.");
    } else {
      const tribeName = `${firstname.substring(0, 3)}-${schoolname.substring(
        0,
        3
      )}-${city}-${year}`;
      firebaseInsert("Tribes/" + tribeCode, {
        code: tribeCode,
        name: tribeName,
        users: [res.user.uid],
      });
      firebaseInsert("Users/" + res.user.uid, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        city: city,
        is_teacher: isTeacher,
        dob: day + "-" + month + "-" + year,
        phone: phone,
        schoolName: schoolname,
        type: type,
        tribe_code: tribeCode,
        tribe_joned: [],
      });
      Auth.setCookies(email, firstname);
      setTokens({ isAuthenticate: true });
      updateLoading(false);
      setTribeCode(tribeCode);
      setCurrentStep(4);
    }
  };

  const CheckIfTribeCodeExist = async (code) => {
    return await Auth.checkIfTribeExist(code)
      .then((tribe) => {
        return tribe;
      })
      .catch((err) => {
        return null;
      });
  };

  const handleSubmitFirstForm = async (e) => {
    e.preventDefault();
    updateError("");
    setCurrentStep(2);
  };

  const handleSubmitSecondForm = async (e) => {
    const { schoolAlreadySigned } = form;
    e.preventDefault();
    updateError("");
    if (schoolAlreadySigned) {
      handleFormSubmit();
    } else {
      setCurrentStep(3);
    }
  };

  const sendTribeCode = async (e) => {
    e.preventDefault();
    if (params && params.redirect) {
      const { redirect } = params;
      history.push(redirect);
    } else {
      history.push(routes.WELCOME);
    }
  };

  return (
    <>
      {isInitialized === false && currentStep === 1 && (
        <BasicInfo
          form={form}
          search={search}
          error={error}
          loading={loading}
          handleSubmitFirstForm={handleSubmitFirstForm}
          updateForm={updateForm}
        />
      )}
      {isInitialized === false && currentStep === 2 && (
        <TypeAndEmailForm
          form={form}
          search={search}
          error={error}
          loading={loading}
          handleSubmitSecondForm={handleSubmitSecondForm}
          updateForm={updateForm}
        />
      )}
      {isInitialized === false && currentStep === 3 && (
        <SchoolDetailForm
          form={form}
          search={search}
          error={error}
          loading={loading}
          handleSubmit={handleTeacherSubmit}
          updateForm={updateForm}
        />
      )}
      {isInitialized === false && currentStep === 4 && (
        <InviteToTribeForm
          sendTribeCode={sendTribeCode}
          code={userTribeCode}
          loading={loading}
        />
      )}
    </>
  );
};

export default CreateNewAccountPage;
