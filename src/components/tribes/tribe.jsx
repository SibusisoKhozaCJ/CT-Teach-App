import React, { useEffect, useRef, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon2 from "../../assets/icons/tribe/icon1.svg";
import Icon3 from "../../assets/icons/tribe/icon2.svg";
import Icon4 from "../../assets/icons/tribe/icon3.svg";
import Icon9 from "../../assets/icons/tribe/icon4.svg";
import Icon8 from "../../assets/icons/tribe/usericon.png";
import Icon1 from "../../assets/icons/tribe/mission.png";
import Box from "@material-ui/core/Box";
import Icon7 from "../../assets/icons/tribe/icon7.svg";
import Friendicon from "../../assets/images/friend.svg";
import Pandingicon from "../../assets/images/panding.svg";
import PlusIcon from "../../assets/images/plus.svg";
import DotIcon from "../../assets/icons/tribe/dot.svg";
import { useDispatch, useSelector } from "react-redux";
import { acceptTribeRequest, getUserTribes, rejectTribeJoinRequest,leaveTribeAction, deleteTribeAction } from "../../redux/actions/tribe-actions";
import Loading from "../../shared/components/loader/Loading";
import { saveUser } from "../../redux/actions/user-actions";
import AddTribeModal from "./modals/add-tribe-modal.jsx";
import { useHistory } from "react-router-dom";
import AddRemoveTribeModal from "./modals/accept-reject-tribe.jsx";
import {getAppBaseUrl} from "../../helper"
const Tribes = () => {
  const [expand, setExpand] = useState("");
  const [expandUser, setUserExpand] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { loading } = useSelector((state) => state.user);
  const history = useHistory();
  const [openAcceptModal, setAcceptOpenModal] = useState(false);
  const [removeTribeModal, setRemoveTribeModal] = useState("")
  const [deleteTribeModal, setDeleteTribeModal] = useState(false)
  const [showTribes,setShowTrbies]=useState(true);
  const [showTribesRequests,setShowTrbiesRequest]=useState(false);
  const { userTribes, userJoinedTribes, requestedTribes } = useSelector((state) => state.tribe);
  const [joinUrl, setJoinUrl] = useState("")
  const [selectedTribe, setSelectedTribe] = useState({})
  const unFriendContainer = useRef();
  const [btnOpen, setBtnOpen] = useState(false);
  const [tribeToDeleteLeave, setTribeToDeleteLeave] = useState({})
  const [modalType, setModalType] = useState("");
  const [ loader, setLoader ] = useState(false);
  const handleClickOutsides = (evt) => {
    if (unFriendContainer.current && !unFriendContainer.current.contains(evt.target)) {
      setRemoveTribeModal("");
      setDeleteTribeModal(false);
         setBtnOpen(!btnOpen);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsides);
  }, []);
  useEffect(() => {
    if (user !== null) {
      dispatch(getUserTribes(user));
    } else {
      dispatch(saveUser(undefined));
    }
  }, [user]);

  if (loading) {
    return (
      <div className="loader">
        <Loading />
      </div>
    );
  }

  const bindPendingTribeCount=()=>{
    return requestedTribes.length
  }
  
  const bindTribeCount=()=>{
    if(userJoinedTribes && userTribes){
      return userTribes.length + userJoinedTribes.length
    }else{
      return 0
    }
  }

  const setJoinTribeLink = (tribeCode, senderType)=>{
    let joinLink = "";
    if(senderType === "self"){
       const tribeJoinCode = tribeCode ? tribeCode : userTribes[0].code
       joinLink = getAppBaseUrl() + "/join/"+tribeJoinCode;
      
    }else{
      joinLink = getAppBaseUrl() + "/join/L"+tribeCode;
    }
    setJoinUrl(joinLink);
    setOpenModal(true);
  }

  const handleRejectTribeRequest =()=>{
    if(modalType === "accept"){
      dispatch(rejectTribeJoinRequest(userTribes, selectedTribe)).then((res) => {
        setAcceptOpenModal(false)
      });
    }else if(modalType === "leave"){
      leaveTribe();
    }else if(modalType === "delete"){
      deleteTribe();
    }
  }

  const toggleLeaveTribeMenu = (index) => {
    setRemoveTribeModal("unfriend" + index);
    setDeleteTribeModal(false)
}

  const handleAcceptRequest=(userId)=>{
    dispatch(acceptTribeRequest(userTribes, userId)).then((res) => {
      dispatch(getUserTribes(user));
    });
  }

  const leaveTribe =()=>{
    setLoader(true);
    dispatch(leaveTribeAction(tribeToDeleteLeave, user)).then((res) => {
      dispatch(getUserTribes(user)).then((res) => {
        setAcceptOpenModal(false);
      });
    });
    setLoader(true);
  }

  const deleteTribe =()=>{
    setLoader(true);
    dispatch(deleteTribeAction(tribeToDeleteLeave,user)).then((res) => {
      if(user.tribe_joined && user.tribe_joined.length > 0){
        dispatch(getUserTribes(user)).then((res) => {
          setAcceptOpenModal(false);
        });
      }else{
        setAcceptOpenModal(false);
      }
    });
    setLoader(true);
  }
  return (
    
    <div className="tribe-page">
         <AddTribeModal
        openModal={openModal}
        joinLink={joinUrl}
        handleModalClose={() => {
          setOpenModal(false);
        }}
     
      />
        <AddRemoveTribeModal
        openModal={openAcceptModal}
        handleRejectTribeRequest={()=>handleRejectTribeRequest()}
        handleModalClose={() => {
          setAcceptOpenModal(false);
        }}
      
      />
      <div className="commonheight"></div>
      <div className="page-divid">
          <Box pb={1} className="top-friend-btn">
          <Grid md={12} xs={12}>
            <Button
              color="secondary"
              onClick={()=> {setShowTrbiesRequest(false);setShowTrbies(true)}}
            >
              <span><img src={Friendicon} /> </span>
              <span className="margin-main">TRIBES</span><span className="totalFriend">{bindTribeCount()}</span>
            </Button>
            <Button
              color="secondary"
             onClick={()=> {setShowTrbiesRequest(true);setShowTrbies(false)}}
            >
               <span><img src={Pandingicon} /> </span>
              <span  className="margin-main">Pending</span><span className="totalFriend">{bindPendingTribeCount()}</span>
            </Button>
            <Button className="dived mob-dived">|</Button>
            <Button color="secondary" className="btnplusfrnd" onClick={(evt) =>{userTribes && userTribes.length > 0 ? setJoinTribeLink(undefined, "self") : alert("Tribe is not created yet.") }}>
              <span className="tribplusfriend"><img src={PlusIcon} /></span> <span> TO TRIBE</span>
            </Button>
          </Grid>
        </Box>
        <Grid md={6} xs={12}>
          <div className="pgeBG">
            {showTribes && (<>
              {userTribes &&
              userTribes.length > 0 &&
              <>
              <h1 className="tribe-mainheading">My Tribe</h1>
              
              {userTribes.map((tribe, index) => (
                <div className="nav-slide tribes-section">
                  <Grid container spacing={1} className="main-manu" xs={12}>
                    <Grid item xs={12} className="tribe-header">
                      <Typography variant="h1" className="title">
                        {tribe.name || tribe.code}
                      </Typography>
                    </Grid>
                       {/* <Grid xs={2} className="frnd-drpBtn">
                        <img
                          onClick={(evt) => setDeleteTribeModal(true)}
                          src={DotIcon}
                        />
                      </Grid>
                      {deleteTribeModal && (
                        <Grid ref={unFriendContainer} item xs={12} className="unfriend-Btn">
                          <Button variant="contained" color="primary" onClick={() =>{setAcceptOpenModal(true); setTribeToDeleteLeave(tribe); setModalType("delete")}} >
                           DELETE TRIBE
                          </Button>
                        </Grid>
                      )} */}

                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon2} className="coverage" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon3} className="coverage" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon4} className="coverage" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon9} className="coverage" alt="" />
                      </div>
                    </Grid>
                    {expand === "tribe" + index && (
                      <Grid xs={12} className="tribe-expandtext">
                        <p>
                          Friends that love CSS and JS functions in business
                          websites.
                        </p>
                        <ul>
                          <li>
                            <strong> MEMBERS: </strong> {tribe.users.length}
                          </li>
                        </ul>
                        <Grid
                          container
                          spacing={1}
                          xs={12}
                          className="expand-icontext"
                        >
                          <Grid item xs={3} md={3}>
                            <div onClick={()=> setJoinTribeLink(tribe.code,"self")} className="tribe-icon">
                              <img src={Icon8} className="coverage" alt="" />
                            </div>
                          </Grid>
                          <Grid item xs={3} md={3}>
                            <div className="tribe-icon">
                              <img src={Icon1} className="coverage" alt="" />
                            </div>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <div className="tribe-button">
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                  history.replace(
                                    `/tribe-profile/${tribe.code}`
                                  )
                                }
                              >
                                Open
                                <img src={Icon7} alt="" />
                              </Button>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>

                  <div className="expand-btn">
                    <div className="d-flex mt-2 justify-content-center font-13 expand-btn">
                      {expand === "" || expand !== "tribe" + index ? (
                        <button
                          style={{ cursor: "pointer", textAlign: "center" }}
                          className="text-primary read-more"
                          onClick={(e) => setExpand("tribe" + index)}
                        >
                          <svg
                            width="22"
                            height="15"
                            viewBox="0 0 22 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9971 0.332031L21.5654 4.11133L10.5439 14.7109L0.348633 3.86523L4.25098 0.367187L10.7549 7.53906L17.9971 0.332031Z"
                              fill="#D50073"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          style={{ cursor: "pointer", textAlign: "center" }}
                          className="text-primary read-more"
                          onClick={(e) => setExpand("")}
                        >
                          <svg
                            width="22"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.65234 15.2188L0.0839844 11.4395L11.1055 0.839844L21.3008 11.6855L17.3984 15.1836L10.8945 8.01172L3.65234 15.2188Z"
                              fill="#A6A6A6"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              </>}
              {userJoinedTribes &&
              userJoinedTribes.length > 0 &&
              <>
            <h1 className="tribe-mainheading">Joined Tribes</h1>
            
              {userJoinedTribes.map((tribe, index) => (
                <div className="nav-slide tribes-section">
                  <Grid container spacing={1} className="main-manu" xs={12}>
                    <Grid item xs={9}>
                      <Typography variant="h1" className="title">
                        {tribe.name || tribe.code}
                      </Typography>
                    </Grid>
                    <Grid xs={2} className="frnd-drpBtn">
                        <img
                          onClick={(evt) => {toggleLeaveTribeMenu(index); setBtnOpen(!btnOpen)}}
                          src={DotIcon}
                        />
                      </Grid>
                      {removeTribeModal == "unfriend" + index && btnOpen&& (
                        <Grid ref={unFriendContainer} item xs={12} className="unfriend-Btn">
                          <Button variant="contained" color="primary" onClick={() =>{setAcceptOpenModal(true); setTribeToDeleteLeave(tribe); setModalType("leave")}}>
                           LEAVE TRIBE
                          </Button>
                        </Grid>
                      )}
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon2} className="coverage" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon3} className="coverage" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon4} className="coverage" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="tribe-icon">
                        <img src={Icon9} className="coverage" alt="" />
                      </div>
                    </Grid>
                    {expand === "joined" + index && (
                      <Grid xs={12} className="tribe-expandtext">
                        <p>
                          Friends that love CSS and JS functions in business
                          websites.
                        </p>
                        <ul>
                          <li>
                            <strong> MEMBERS: </strong>{" "}
                            {tribe?.users?.length ? tribe.users.length : 0}
                          </li>
                        </ul>
                        <Grid
                          container
                          spacing={1}
                          xs={12}
                          className="expand-icontext"
                        >
                          <Grid item xs={3} md={3}>
                            <div onClick={()=> setJoinTribeLink(tribe.code, "friend")} className="tribe-icon">
                              <img src={Icon8} className="coverage" alt="" />
                            </div>
                          </Grid>
                          <Grid item xs={3} md={3}>
                            <div className="tribe-icon">
                              <img src={Icon1} className="coverage" alt="" />
                            </div>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <div className="tribe-button">
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                  history.replace(
                                    `/tribe-profile/${tribe.code}`
                                  )
                                }
                              >
                                Open
                                <img src={Icon7} alt="" />
                              </Button>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <div className="expand-btn">
                    <div className="d-flex mt-2 justify-content-center font-13 expand-btn">
                      {expand === "" || expand !== "joined" + index ? (
                        <button
                          style={{ cursor: "pointer", textAlign: "center" }}
                          className="text-primary read-more"
                          onClick={(e) => setExpand("joined" + index)}
                        >
                          <svg
                            width="22"
                            height="15"
                            viewBox="0 0 22 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9971 0.332031L21.5654 4.11133L10.5439 14.7109L0.348633 3.86523L4.25098 0.367187L10.7549 7.53906L17.9971 0.332031Z"
                              fill="#D50073"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          style={{ cursor: "pointer", textAlign: "center" }}
                          className="text-primary read-more"
                          onClick={(e) => setExpand("")}
                        >
                          <svg
                            width="22"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.65234 15.2188L0.0839844 11.4395L11.1055 0.839844L21.3008 11.6855L17.3984 15.1836L10.8945 8.01172L3.65234 15.2188Z"
                              fill="#A6A6A6"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              </>}
              </>)}
              {showTribesRequests && (<>
              {requestedTribes &&
              requestedTribes.length > 0 &&
              <>
              <h1 className="tribe-mainheading">Join Requests</h1>
              
              {requestedTribes.map((user, index) => (
                <div className="nav-slide">
                <Grid  container spacing={1} className="main-manu" xs={12}>
                  <Grid item xs={10} className="tribe-header">
                    <Typography variant="h1" className="title">
                      {user.firstname}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="manage-frnd-btn">
                      <Button variant="contained" color="secondary">
                        Profile
                        <img src={Icon7} alt="" />
                      </Button>
                    </div>
                  </Grid>
                  {expandUser === "user" + index && (
                    <Grid xs={12} className="tribe-expandtext">
                      <Grid item xs={12} md={12}>
                        <ul>
                          <li>
                            <strong> SCHOOL : </strong>
                            <span>
                              {user.schoolName
                                ? user.schoolName
                                : ""}
                            </span>
                          </li>
                          <li className="friend-tag">
                            <strong> TAGS : </strong>{" "}
                            <span>
                              {user.tags
                                ? user.tags
                                : "No tag"}
                            </span>
                          </li>
                          <li>
                            <strong> INVITED : </strong>
                            <span>3 days ago (8 feb 2021) </span>
                          </li>
                          <li>
                            <strong> JOINED : </strong>
                            <span>3 March 2021</span>
                          </li>
                          <li>
                            <strong> CITY : </strong>
                            <span>
                              {user.city ? user.city : ""}
                            </span>
                          </li>
                        </ul>
                      </Grid>
                    </Grid>
                  )}
                </Grid>

                <div className="expand-btn">
                      <div className="d-flex mt-2 justify-content-center font-13 expand-btn">
                            <div className="frnd-cancel">
                              <span onClick={() => {setSelectedTribe(user); setAcceptOpenModal(true);setModalType("accept")}}>
                                X
                              </span>
                            </div>
                            <div
                              className="accept-btn"
                              onClick={() =>
                                handleAcceptRequest(user)
                              }
                            >
                              <span>Accept</span>
                            </div>
                        {expandUser === "" || expandUser !== "user" + index ? (
                          <button
                            style={{ cursor: "pointer", textAlign: "center" }}
                            className="text-primary read-more"
                            onClick={(e) => setUserExpand("user" + index)}
                          >
                            <svg
                              width="22"
                              height="15"
                              viewBox="0 0 22 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.9971 0.332031L21.5654 4.11133L10.5439 14.7109L0.348633 3.86523L4.25098 0.367187L10.7549 7.53906L17.9971 0.332031Z"
                                fill="#D50073"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            style={{ cursor: "pointer", textAlign: "center" }}
                            className="text-primary read-more"
                            onClick={(e) => setUserExpand("")}
                          >
                            <svg
                              width="22"
                              height="16"
                              viewBox="0 0 22 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.65234 15.2188L0.0839844 11.4395L11.1055 0.839844L21.3008 11.6855L17.3984 15.1836L10.8945 8.01172L3.65234 15.2188Z"
                                fill="#A6A6A6"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
              </div>
            ))}
              </>}
              </>)}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Tribes;
