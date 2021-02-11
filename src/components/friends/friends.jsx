import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon7 from "../../assets/icons/tribe/icon7.svg";
const FriendsPage = () => {
  const [friendEmail, setFriendEmail] = useState("");
  const [expand, setExpand] = useState("false");
  const handleSendRequest = () => {};

  return (
    <div className="manage-frnd">
      <div className="commonheight"></div>
      <div className="page-divid">
        <Box pb={1} className="top-friend-btn">
          <Grid md={12} xs={12}>
            <Button color="secondary">
              <span>25</span>
              Friends
            </Button>
            <Button color="secondary">
              <span>25</span>
              Panding
            </Button>
            <Button className="dived">|</Button>
            <Button color="secondary">
              <span className="add-frnd-i">@</span> +
            </Button>
          </Grid>
        </Box>

        <Grid md={6} xs={12}>
          <div className="pgeBG">
            <div className="nav-slide">
              <Grid container spacing={1} className="main-manu" xs={12}>
                <Grid item xs={12} className="tribe-header">
                  <Typography variant="h1" className="title">
                    @Vikram Nextjs
                  </Typography>
                </Grid>
                <Grid item xs={12} className="tribe-header">
                  <Typography variant="p" className="title-text">
                    Hey, saw your profile and the event you organized. Lets
                    collabarate on the next one.
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
                {expand === "tribe" && (
                  <Grid xs={12} className="tribe-expandtext">
                    <Grid item xs={12} md={12}>
                      <ul>
                        <li>
                          <strong> SCHOOL : </strong> <span>chandigarh</span>
                        </li>
                        <li>
                          <strong> TAGS : </strong> <span>Beginner</span>{" "}
                          <span>Js</span> <span>App</span>
                        </li>
                        <li>
                          <strong> INVITED : </strong>{" "}
                          <span>3 days ago (8 feb 2021) </span>
                        </li>
                        <li>
                          <strong> JOINED : </strong> <span>3 March 2021</span>
                        </li>
                        <p>Sector9 , chandigarh</p>
                      </ul>
                    </Grid>
                  </Grid>
                )}
              </Grid>

              <div className="expand-btn">
                <div className="d-flex mt-2 justify-content-center font-13 expand-btn">
                  <div className="accept-btn">
                    <span>Accept</span>
                  </div>
                  {expand === "" || expand !== "tribe" ? (
                    <button
                      style={{ cursor: "pointer", textAlign: "center" }}
                      className="text-primary read-more"
                      onClick={(e) => setExpand("tribe")}
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
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default FriendsPage;
