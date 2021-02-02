import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ShareTribe = ({ code }) => {
  return (
    <div className="send-code-form">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box my={1}>
            <TextField fullWidth variant="outlined" value={code} />
          </Box>
          <span className="btm-lbl">Where do you want share?</span>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box my={1}>
            <div className="code-circle">
              <Button className="fb-btn" variant="text">
                FACEBOOK
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box my={1}>
            <div className="code-circle">
              <Button className="tw-btn" variant="text">
                TWITTER
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box my={1}>
            <div className="code-circle">
              <Button className="tumb-btn" variant="text">
                TUMBLER
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box my={1}>
            <div className="code-circle">
              <Button className="copy-btn" variant="text">
                <svg
                  width="43"
                  height="48"
                  viewBox="0 0 43 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.6842 0H4.52632C2.03684 0 0 1.96364 0 4.36364V34.9091H4.52632V4.36364H31.6842V0ZM29.4211 8.72727L43 21.8182V43.6364C43 46.0364 40.9632 48 38.4737 48H13.5563C11.0668 48 9.05263 46.0364 9.05263 43.6364L9.07526 13.0909C9.07526 10.6909 11.0895 8.72727 13.5789 8.72727H29.4211ZM27.1579 24H39.6053L27.1579 12V24Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>
              </Button>
              <p>Copy</p>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShareTribe;
