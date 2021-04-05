import React, { useEffect, useRef, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon7 from "../../assets/icons/tribe/icon7.svg";
import DotIcon from "../../assets/icons/tribe/dot.svg";
import Friendicon from "../../assets/images/friend.svg";
import Pandingicon from "../../assets/images/panding.svg";
import PlusIcon from "../../assets/images/plus.svg";
import Loading from "../../shared/components/loader/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptRequest,
  sendFriendRequest,
  setUserFriends,
  deleteFriend,
  resetFriendModal
} from "../../redux/actions/friend-actions";
import { saveUser } from "../../redux/actions/user-actions";
import AddFriendModal from "./modals/add-friend-modal.jsx";
import AddRemoveFriendModal from "./modals/accept-reject.jsx";
const FriendsPage = () => {
  const [expand, setExpand] = useState("false");
  const dispatch = useDispatch();
  const [friendListType, setTriendListType] = useState("friend");
  const { user } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [openAcceptModal, setAcceptOpenModal] = useState(false);
  const [unfriendModal, setUnfriednModal] = useState("");
  const [btnOpen, setBtnOpen] = useState(false);
  
  const [friendUid, setFriendUid] = useState("");
  const { friendList, pendingList, successErrorMessage, showSuccessModal } = useSelector(
    (state) => state.friend
  );
  const unFriendContainer = useRef();
  const handleClickOutsides = (evt) => {
    if (unFriendContainer.current && !unFriendContainer.current.contains(evt.target)) {
        setUnfriednModal("");
         setBtnOpen(!btnOpen);
    }
  }
  const isLoading = useSelector(state => state.friend.isLoading);


  const toggleUnfriendMenu = (index) => {
         setUnfriednModal("unfriend" + index);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsides);
  }, []);

  useEffect(() => {
    if (user !== null) {
      if (user.friends && user.friends.length > 0) {
        dispatch(setUserFriends(user));
      }
    } else {
      dispatch(saveUser(undefined));
    }
  }, [dispatch, user]);

  const handleSendRequest = async (email, userName, requestNote) => {
    await dispatch(sendFriendRequest(email, userName, requestNote));
    dispatch(saveUser(user.userId));
  };

  const handleAcceptRequest = async (friendId) => {
    await dispatch(acceptRequest(friendId));
    dispatch(saveUser(user.userId));
  };
  const handleremoveFriend = async (friendId) => {
    await dispatch(deleteFriend(friendId));
    dispatch(saveUser(user.userId));
  };
  const handledeleteFriend = async (friendId) => {
    await dispatch(deleteFriend(friendId));
    dispatch(saveUser(user.userId));
    setFriendUid("");
    setUnfriednModal("");
    setBtnOpen(false);
  };

  if (isLoading) {
    return (
      <div className="loader">
        <Loading />
      </div>
    )
  }
  return (
    <div   className="manage-frnd">
      <AddFriendModal 
        friendList={friendList}
        successErrorMessage={successErrorMessage}
        showSuccessMessage={showSuccessModal}
        openModal={openModal}
        handleModalClose={() => {
          setOpenModal(false);
        }}
        handleSuccessRequest={() => {
          setOpenModal(false);
          dispatch(resetFriendModal());
        }}
        handleSendRequest={(email, UserName, requestNote) => handleSendRequest(email, UserName, requestNote)}
      />
      <AddRemoveFriendModal
        openModal={openAcceptModal}
        handleModalClose={() => {
          setAcceptOpenModal(false);
        }}
        handledeleteFriend={() => handledeleteFriend(friendUid)}

      />
      <div className="commonheight"></div>
      <div className="page-divid">
        <Box pb={1} className="top-friend-btn">
          <Grid md={12} xs={12}>
            <Button
              color="secondary"
              onClick={() => setTriendListType("friend")}
            >
              <span><img src={Friendicon} /> </span>
              <span className="margin-main">Friends</span><span className="totalFriend">{friendList.length}</span>
            </Button>
            <Button
              color="secondary"
              onClick={() => setTriendListType("pending")}
            >
              <span><img src={Pandingicon} /> </span>
              <span className="margin-main">Pending</span><span className="totalFriend">{pendingList.length}</span>
            </Button>
            <Button className="dived">|</Button>
            <Button color="secondary" onClick={(evt) => setOpenModal(true)}>
              <span className="add-frnd-i"><img src={PlusIcon} /></span> <span> A FRIEND</span>
            </Button>
          </Grid>
        </Box>

        <Grid md={6} xs={12}>
          <div
            className={
              (friendListType === "friend" && friendList.length > 0) ||
                (friendListType === "pending" && pendingList.length > 0)
                ? "pgeBG"
                : "hide"
            }
          >
            {friendListType === "friend" && friendList.length > 0 && (
              <>
                {friendList.map((friend, index) => (
                  <div className="nav-slide">
                    <Grid  container spacing={1} className="main-manu" xs={12}>
                      <Grid item xs={10} className="tribe-header">
                        <Typography variant="h1" className="title">
                          {friend.info.firstname}
                        </Typography>
                      </Grid>
                      <Grid   xs={2} className="frnd-drpBtn">
                        <img
                          onClick={(evt) => {toggleUnfriendMenu(index); setBtnOpen(!btnOpen)}}
                          src={DotIcon}
                        />
                      </Grid>
                      {unfriendModal == "unfriend" + index && btnOpen && (
                        <Grid ref={unFriendContainer} item xs={12} className="unfriend-Btn">
                          <Button  variant="contained" color="primary" onClick={(evt) => {setFriendUid(friend.info.uid);  setAcceptOpenModal(true); }}>
                            UNFRIEND
                          </Button>
                        </Grid>
                      )}

                      <Grid item xs={12} className="tribe-header">
                        <Typography variant="p" className="title-text">
                          {friend.requestNote ? friend.requestNote :
                            `Hey, saw your profile and the event you organized.
                         Lets collabarate on the next one`
                          }
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
                      {expand === "friend" + index && (
                        <Grid xs={12} className="tribe-expandtext">
                          <Grid item xs={12} md={12}>
                            <ul>
                              <li>
                                <strong> SCHOOL : </strong>
                                <span>
                                  {friend.info.schoolName
                                    ? friend.info.schoolName
                                    : ""}
                                </span>
                              </li>
                              <li className="friend-tag">
                                <strong> TAGS : </strong>{" "}
                                <span>
                                  {friend.info.tags
                                    ? friend.info.tags
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
                                  {friend.info.city ? friend.info.city : ""}
                                </span>
                              </li>
                            </ul>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>

                    <div className="expand-btn">
                      <div className="d-flex mt-2 justify-content-center font-13 expand-btn">
                        {expand === "" || expand !== "friend" + index ? (
                          <button
                            style={{ cursor: "pointer", textAlign: "center" }}
                            className="text-primary read-more"
                            onClick={(e) => setExpand("friend" + index)}
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
              </>
            )}
            {friendListType === "pending" && pendingList.length > 0 && (
              <>
                {pendingList.map((friend, index) => (
                  <div className="nav-slide">
                    <Grid container spacing={1} className="main-manu" xs={12}>
                      <Grid item xs={12} className="tribe-header">
                        <Typography variant="h1" className="title">
                          {friend.info.firstname}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} className="tribe-header">
                        <Typography variant="p" className="title-text">
                          {friend.requestNote ? friend.requestNote :
                            `Hey, saw your profile and the event you organized.
                         Lets collabarate on the next one`
                          }

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
                      {expand === "pending" + index && (
                        <Grid xs={12} className="tribe-expandtext">
                          <Grid item xs={12} md={12}>
                            <ul>
                              <li>
                                <strong> SCHOOL : </strong>
                                <span>
                                  {friend.info.schoolName
                                    ? friend.info.schoolName
                                    : ""}
                                </span>
                              </li>
                              <li className="friend-tag">
                                <strong> TAGS : </strong>{" "}
                                <span>
                                  {friend.info.tags
                                    ? friend.info.tags
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
                                  {friend.info.city ? friend.info.city : ""}
                                </span>
                              </li>
                            </ul>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>

                    <div className="expand-btn">
                      <div className="d-flex mt-2 justify-content-center font-13 expand-btn">
                        {friend.sender !== user.uid ? (
                          <>
                            <div className="frnd-cancel">
                              <span onClick={() => setAcceptOpenModal(true)}>
                                X
                              </span>
                            </div>
                            <div
                              className="accept-btn"
                              onClick={() =>
                                handleAcceptRequest(friend.info.uid)
                              }
                            >
                              <span>Accept</span>
                            </div>
                          </>
                        ) : (
                          <div
                            className="accept-btn"
                            onClick={() => handleremoveFriend(friend.info.uid)}
                          >
                            <span>Remove</span>
                          </div>
                        )}

                        {expand === "" || expand !== "pending" + index ? (
                          <button
                            style={{ cursor: "pointer", textAlign: "center" }}
                            className="text-primary read-more"
                            onClick={(e) => setExpand("pending" + index)}
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
              </>
            )}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default FriendsPage;
