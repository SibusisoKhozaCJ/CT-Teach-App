import React, { useMemo, useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AutocompleteSelect from "../../../shared/components/inputs/AutocompleteSelect";
import { Button } from "@material-ui/core";

const daysOfTheMonth = Array(31)
    .fill()
    .map((_, idx) => (1 + idx).toString())
    .map(option => option.length === 1 ? `0${option}` : option);
const UserRegisterStep1 = ({ onUpdate, form, handleEmailSkip }) => {
    const { dob } = form;
    const [month, day, year] = dob ? dob.split('/') : ['', '', ''];
    const handleFormEdit = (key) => (event) =>
        onUpdate({ ...form, [key]: event.target.value });
    const handleDobEdit = key => val => {
        let newDob;
        if (key === 'year') {
            newDob = [month, day, val];
        } else if (key === 'month') {
            newDob = [val, day, year];
        } else if (key === 'day') {
            newDob = [month, val, year];
        } else return;
        onUpdate({ ...form, 'dob': newDob.join('/') })

    };
    const yearOptions = useMemo(() => {
        return (
            Array(112)
                .fill(10)
                .map((value, idx) => (2021 - idx).toString())
        );
    }, [])

    const handleSubmitForm = () => {
        onUpdate({ ...form, ["email"]: undefined });
        handleEmailSkip()
    }
    return (
        <>
            <div className="registration-form">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box my={1} className="registration_title">
                            <h1>
                                WANNA ADD YOUR <br />
            NAME?
          </h1>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box my={1}>
                            <TextField
                                fullWidth
                                label="First Name"
                                variant="outlined"
                                value={form.firstname}
                                onChange={handleFormEdit("firstname")}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box my={1}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                variant="outlined"
                                value={form.lastname}
                                onChange={handleFormEdit("lastname")}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <div className="Dob-section">
                    <h2 className="Dob_title">Date of Birth</h2>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Box my={1}>
                                <AutocompleteSelect
                                    type="number"
                                    maxDigits={2}
                                    label="Day"
                                    selectedValue={day}
                                    options={daysOfTheMonth}
                                    onSelect={handleDobEdit('day')}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box my={1}>
                                <AutocompleteSelect
                                    label="Month"
                                    type="number"
                                    maxDigits={2}
                                    selectedValue={month}
                                    options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
                                    onSelect={handleDobEdit('month')}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box my={1}>
                                <AutocompleteSelect
                                    label="Year"
                                    type="number"
                                    maxDigits={4}
                                    selectedValue={year}
                                    options={yearOptions}
                                    onSelect={handleDobEdit('year')}
                                />
                            </Box>
                        </Grid>
                        <Grid container className="skp-sur-btn" spacing={1}>
                            <Grid item xs={4}>
                                <Button onClick={() => handleSubmitForm()} className="skip-btn">SKIP</Button>
                            </Grid>
                            <Grid item xs={8} className="sure-btn">
                                <Button onClick={() => handleEmailSkip()}>SURE</Button>
                            </Grid>
                        </Grid>
                        <div className="newprive">
                            <Box
                                pb={2}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                fullWidth
                            >
                                BY CLICKING I AGREE TO THE TERMS AND CONDITIONS
            </Box>
                        </div>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default UserRegisterStep1;
