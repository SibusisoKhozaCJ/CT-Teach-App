import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ShareTribe from "../register-steps/share-tribe";

const InviteToTribeForm = ({ code, loading, sendTribeCode }) => {
  return (
    <section className="send-code">
      <div className="send-code_main">
        <Box my={2} className="send-code_title">
          <h1>SEND THIS “JOIN” LINK</h1>
          <span>To everyone who should join the class or Tribe.</span>
        </Box>
        <Box my={2}>
          <ShareTribe loading={loading} code={code} />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={sendTribeCode}
          >
            <p className="reg-happy">OK, SENT IT.</p>
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default InviteToTribeForm;
