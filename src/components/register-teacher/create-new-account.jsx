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
import InviteToTribeForm from "./components/invite-code";
import { insertDefaultTodo } from "../../redux/actions/todo-actions";

const CreateNewAccountPage = () => {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(1);
  const [registerType, setRegisterType] = useState("1");
  const { search, state: fromSignInData } = useLocation();
  const params = parse(search, { ignoreQueryPrefix: true });
  const [form, updateForm] = useState({
    email: params.email,
    password: fromSignInData && fromSignInData.password,
    name: "",
    firstname: "",
    lastname: "",
    type: "",
    schoolname: "",
    day: "",
    month: "",
    year: "",
    city: "",
    isTeacher: false,
    hasEntered: false,
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

  const handleFormSubmitTeacher = async () => {
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
      name,
      city,
      day,
      month,
      year,
      phone,
      schoolname,
      schoolAlreadySigned,
      joincode,
    } = form;
    if (registerType === "2") {
      let tempName = name.split(" ");
      let firstname = "";
      let lastname = "";
      if (tempName.length > 1) {
        lastname = tempName[tempName.length - 1];
        tempName.pop();
        firstname = tempName.toString().replace(/,/g, " ");
      } else {
        firstname = tempName[0];
      }
      Auth.createUser(email, password)
        .then(async (res) => {
          if (schoolAlreadySigned) {
            let tribeInfo = tribeData;
            tribeInfo.users.push(res.user.uid);
            await Auth.updateTribe(tribeInfo);
            firebaseInsert("Users/" + res.user.uid, {
              uid: res.user.uid,
              email: email,
              firstname: firstname,
              lastname: lastname,
              city: city,
              is_teacher: true,
              hasEntered: false,
              phone: phone,
              schoolName: schoolname,
              tribe_joined: [joincode],
            });
            insertDefaultTodo(res.user.uid);
            Auth.setCookies(email, firstname);
            setTokens({ isAuthenticate: true });
            if (
              history.location &&
              history.location.search.indexOf("redirect=/join") >= 0
            ) {
              history.push(routes.TRIBE);
            } else {
              setTribeCode(joincode);
              setCurrentStep(4);
            }
          } else {
            CreateTribeAndRegister(res);
          }
        })
        .catch((err) => {
          updateError(err.message);
          updateLoading(false);
          setCurrentStep(2);
        });
    } else {
      createUserFromEmailAndPassword(email, password, tribeData)
    }
  };

  const createUserFromEmailAndPassword = async (email, password, tribeData) => {
    const {
      city,
      day,
      month,
      year,
      phone,
      schoolname,
      schoolAlreadySigned,
      joincode,
      firstname,
      lastname
    } = form;
    Auth.createUser(email, password)
      .then(async (res) => {
        if (schoolAlreadySigned) {
          let tribeInfo = tribeData;
          tribeInfo.users.push(res.user.uid);
          await Auth.updateTribe(tribeInfo);
          firebaseInsert("Users/" + res.user.uid, {
            uid: res.user.uid,
            email: email,
            dob: day + "-" + month + "-" + year,
            firstname: firstname,
            lastname: lastname,
            city: city,
            is_teacher: false,
            hasEntered: false,
            phone: phone,
            schoolName: schoolname,
            tribe_joined: [joincode],
          });
          insertDefaultTodo(res.user.uid);
          Auth.setCookies(email, firstname);
          setTokens({ isAuthenticate: true });
          if (
            history.location &&
            history.location.search.indexOf("redirect=/join") >= 0
          ) {
            history.push(routes.TRIBE);
          } else {
            history.push(routes.HOME);
          }
        } else {
          CreateTribeAndRegister(res, email);
        }
      })
      .catch((err) => {
        updateError(err.message);
        updateLoading(false);
        setCurrentStep(2);
      });
  }

  const CreateTribeAndRegister = async (res, emailAddress) => {
    const {
      email,
      name,
      city,
      day,
      month,
      year,
      type,
      phone,
      schoolname,
    } = form;
    const tribeCode = `${randomize("A", 2)}${randomize("0", 3)}`;
    const isCodeExist = await CheckIfTribeCodeExist(tribeCode);
    if (isCodeExist) {
      alert("Error while creting a tribe.");
    } else {
      if (registerType === "2") {
        let tempName = name.split(" ");
        let firstname = "";
        let lastname = "";
        if (tempName.length > 1) {
          lastname = tempName[tempName.length - 1];
          tempName.pop();
          firstname = tempName.toString().replace(/,/g, " ");
        } else {
          firstname = tempName[0];
        }
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
          uid: res.user.uid,
          email: email,
          firstname: firstname,
          lastname: lastname,
          city: city,
          is_teacher: true,
          hasEntered: false,
          dob: day + "-" + month + "-" + year,
          phone: phone,
          schoolName: schoolname,
          type: type,
          tribe_code: tribeCode,
          tribe_joned: [],
        });
        insertDefaultTodo(res.user.uid);
        Auth.setCookies(email, firstname);
      } else {
        const { firstname, lastname } = form;
        let tribeName = ""
        if(firstname && firstname !== ""){
          tribeName = `${firstname.substring(0, 3)}-${schoolname.substring(
            0,
            3
          )}-${city}-${year}`;
        }else{
          tribeName = tribeCode;
        }
        
        firebaseInsert("Tribes/" + tribeCode, {
          code: tribeCode,
          name: tribeName,
          users: [res.user.uid],
        });
        firebaseInsert("Users/" + res.user.uid, {
          uid: res.user.uid,
          email: emailAddress,
          firstname: firstname,
          lastname: lastname,
          city: city,
          is_teacher: false,
          hasEntered: false,
          dob: day + "-" + month + "-" + year,
          phone: phone,
          schoolName: schoolname,
          type: type,
          tribe_code: tribeCode,
          tribe_joned: [],
        });
        insertDefaultTodo(res.user.uid);
        Auth.setCookies(emailAddress, firstname);
      }
      setTokens({ isAuthenticate: true });
      updateLoading(false);
      if(registerType === "2"){
          setTribeCode(tribeCode);
          setCurrentStep(4);
      }else{
        history.push(routes.HOME);
      }
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

  const handleSubmitStudentFirstForm = async (e) => {
    e.preventDefault();
    updateLoading(true);
    const { email, joincode,schoolAlreadySigned } = form;
    await Auth.getUserWithEmail(email)
      .then( async (res) => {
        if(res && res.length > 0){
          updateError("Email already exist!");
          updateLoading(false);
        }else{
          if(schoolAlreadySigned){
            const isCodeExist = await CheckIfTribeCodeExist(joincode);
            if (isCodeExist) {
              updateError("");
              updateLoading(true);
              setCurrentStep(2);
            }else{
              updateError("Join code not exist");
              updateLoading(false);
            }
          }else{
            updateError("");
            updateLoading(true);
            setCurrentStep(2);
          }
        }
      })
      .catch((err) => {
        updateLoading(true);
        return null;
      });
  };

  const handleSubmitTeacherFirstForm = async (e) => {
    e.preventDefault();
    updateLoading(true);
    const {
      email,
    } = form;
    await Auth.getUserWithEmail(email)
      .then((res) => {
        if(res && res.length > 0){
          updateError("An account with same email already exists.");
          updateLoading(false);
        }else{
          updateError("");
          setCurrentStep(2);
        }
      })
      .catch((err) => {
        return null;
      });
  };

  const handleSubmitTeacherSecondForm = async (e) => {
    e.preventDefault();
    updateError("");
    handleFormSubmitTeacher();
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

  const setTypeOfUser = (evt) => {
    setRegisterType(evt);
  };
  const handleEmailSkip = async (evt) => {
    try {
    const { joincode, schoolAlreadySigned } = form;
      if(schoolAlreadySigned){
        const isCodeExist = await CheckIfTribeCodeExist(joincode);
        if (!isCodeExist) {
          updateError("Invalid Join code");
          updateLoading(false);
          setCurrentStep(1);
        } else {
          createUser(isCodeExist);
        }
      }else{
        createUser();
      }
    } catch (err) { }
  };

  const handleBackClick = (evt)=>{
    setTypeOfUser(evt);
    setCurrentStep(1);
  }

  return (
    <>
    {}
      {isInitialized === false && currentStep === 1 && (
        <BasicInfo
          form={form}
          search={search}
          error={error}
          loading={loading}
          handleSubmitTeacherFirstForm={handleSubmitTeacherFirstForm}
          updateForm={updateForm}
          registerType={registerType}
          setRegisterType={(evt) => setTypeOfUser(evt)}
          handleSubmitStudentFirstForm={handleSubmitStudentFirstForm}
        />
      )}
      {isInitialized === false && currentStep === 2 && (
        <TypeAndEmailForm
          form={form}
          search={search}
          error={error}
          loading={loading}
          handleSubmitTeacherSecondForm={handleSubmitTeacherSecondForm}
          updateForm={updateForm}
          registerType={registerType}
          handleEmailSkip={handleEmailSkip}
          handleBackClick={handleBackClick}
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
