import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TeacherRegisterStep3 from "../register-steps/step3";

const SchoolDetailForm = ({
  updateForm,
  form,
  loading,
  handleSubmit,
  error,
  search,
}) => {
  return (
    <section className="registration">
      <div className="registration_main">
        <Box my={2} className="registration_title">
          <h1> SCHOOL DETAILS!</h1>
        </Box>
        <Box my={2}>
          {error && (
            <Box my={1}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
          <form onSubmit={handleSubmit}>
            <TeacherRegisterStep3
              onUpdate={updateForm}
              form={form}
              loading={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              <p className="reg-happy">DONE! ;)</p>
            </Button>
          </form>
        </Box>
      </div>
    </section>
  );
};

export default SchoolDetailForm;
