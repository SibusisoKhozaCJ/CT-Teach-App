import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TeacherRegisterStep2 from "../register-steps/step2";

const TypeAndEmailForm = ({
  updateForm,
  form,
  loading,
  handleSubmitSecondForm,
  error,
  search,
}) => {
  return (
    <div className="reg-pd">
    <section className="registration">
      <div className="registration_main">
        <Box my={2} className="registration_title">
          <h1> WELCOME!</h1>
          <span>WE’RE SO EXCITED.</span>
        </Box>
        <Box my={2}>
          {error && (
            <Box my={1}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          <form autocomplete="off" onSubmit={handleSubmitSecondForm}>
            <TeacherRegisterStep2
              onUpdate={updateForm}
              form={form}
              loading={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="ylw-tech"
              disabled={loading}
            >
              <p className="reg-happy">LET’S DO IT.</p>
            </Button>
          </form>
        </Box>
      </div>
    </section>
    </div>
  );
};

export default TypeAndEmailForm;
