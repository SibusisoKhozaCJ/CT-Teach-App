import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TeacherRegisterStep2 from "../register-steps/step2-teacher";
import UserRegisterStep2 from "../register-steps/user-reg-step2";
import Grid from "@material-ui/core/Grid";
import FrgIcon from "../../../assets/images/frgarrow.svg";
import RightArrIcon from "../../../assets/images/rightarrow.svg";
const TypeAndEmailForm = ({
  updateForm,
  form,
  loading,
  handleSubmitTeacherSecondForm,
  error,
  handleEmailSkip,
  registerType,
  handleBackClick
}) => {
  return (
    <div className="reg-pd1">
      <section className="registration">
        <div className="registration_main">
          <Box my={2}>
            {error && (
              <Box my={1}>
                <Typography color="error">{error}</Typography>
              </Box>
            )}
            {registerType === "2" && (
              <form autocomplete="off" onSubmit={handleSubmitTeacherSecondForm}>
                <TeacherRegisterStep2
                  onUpdate={updateForm}
                  form={form}
                  loading={loading}
                />
                <Grid container spacing={2}>
                  <Grid item xs={3} spacing={0}>
                    <Button
                      fullWidth
                      variant="contained"
                      className="Frgback"
                      onClick={(e)=> handleBackClick(registerType)}
                    >
                      <p className="reg-happy">
                        <img src={FrgIcon} />
                      </p>
                    </Button>
                  </Grid>
                  <Grid item xs={9}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="ylw-tech"
                      // disabled={loading}
                    >
                      <p className="reg-happy">
                        LET’S DO IT. <img src={RightArrIcon} />
                      </p>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
            {registerType === "1" && (
              <form autocomplete="off">
                <UserRegisterStep2
                  onUpdate={updateForm}
                  form={form}
                  loading={loading}
                  handleEmailSkip={handleEmailSkip}
                />
              </form>
            )}
          </Box>
        </div>
      </section>
    </div>
  );
};

export default TypeAndEmailForm;
