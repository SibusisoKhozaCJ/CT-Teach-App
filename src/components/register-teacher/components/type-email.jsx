import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TeacherRegisterStep2 from "../register-steps/step2-teacher";
import UserRegisterStep2 from "../register-steps/step2-user"

const TypeAndEmailForm = ({
  updateForm,
  form,
  loading,
  handleSubmitSecondForm,
  error,
  search,
  registerType
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
          {registerType === "2" && <form autocomplete="off" onSubmit={handleSubmitSecondForm}>
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
          </form>}
          {registerType === "1" && <form autocomplete="off" onSubmit={handleSubmitSecondForm}>
            <UserRegisterStep2
              onUpdate={updateForm}
              form={form}
              loading={loading}
            />
          </form>}
        </Box>
      </div>
    </section>
    </div>
  );
};

export default TypeAndEmailForm;
