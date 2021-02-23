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
              phone: phone,
              schoolName: schoolname,
              tribe_joined: [joincode],
            });
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
      const { firstname, lastname } = form;
      if (email) {
        createUserFromEmailAndPassword(email, password, tribeData)
      } else {
        const emailAddress = (
          firstname +
          lastname +
          day +
          month +
          year +
          "@codejika.com"
        ).toLowerCase();
        const userPassword = (
          firstname +
          lastname +
          day +
          month +
          year
        ).toLowerCase();
        createUserFromEmailAndPassword(emailAddress, userPassword, tribeData)
      }
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
            phone: phone,
            schoolName: schoolname,
            tribe_joined: [joincode],
          });
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
          CreateTribeAndRegister(res, email);
        }
      })
      .catch((err) => {
        updateError(err.message);
        updateLoading(false);
        setCurrentStep(1);
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
          dob: day + "-" + month + "-" + year,
          phone: phone,
          schoolName: schoolname,
          type: type,
          tribe_code: tribeCode,
          tribe_joned: [],
        });
        Auth.setCookies(email, firstname);
      } else {
        const { firstname, lastname } = form;
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
          email: emailAddress,
          firstname: firstname,
          lastname: lastname,
          city: city,
          is_teacher: false,
          dob: day + "-" + month + "-" + year,
          phone: phone,
          schoolName: schoolname,
          type: type,
          tribe_code: tribeCode,
          tribe_joned: [],
        });
        Auth.setCookies(emailAddress, firstname);
      }
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

  const handleSubmitStudentFirstForm = async (e) => {
    e.preventDefault();
    updateError("");
    setCurrentStep(2);
  };

  const handleSubmitTeacherFirstForm = async (e) => {
    e.preventDefault();
    updateError("");
    setCurrentStep(2);
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
  const handleEmailSkip = (evt) => {
    createUser();
  };

  const handleSubmitWithJoinCode = async (evt) => {
    try {
      const { joincode } = form;
      const isCodeExist = await CheckIfTribeCodeExist(joincode);
      if (!isCodeExist) {
        updateError("Invalid Join code");
        updateLoading(false);
        setCurrentStep(2);
      } else {
        createUser(isCodeExist);
      }
    } catch (err) { }
  }

  const handleSubmitUserSecondForm = async (evt) => {
    try {
      createUser();
    } catch (err) { }
  };
  return (
    <>
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
          handleSubmitUserSecondForm={handleSubmitUserSecondForm}
          handleSubmitWithJoinCode={handleSubmitWithJoinCode}
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
