import React, { useMemo, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageInput from './ImageInput';
import Loading from './Loading';
import PhoneField from './PhoneField';
import AutocompleteSelect from './AutocompleteSelect';

const daysOfTheMonth = Array(31)
    .fill()
    .map((_, idx) => (1 + idx).toString())
    .map(option => option.length === 1 ? `0${option}` : option);

const UserAccountCreation = ({ form, formOptions, onUpdate, loading }) => {
    const [compressing, updateCompressing] = useState({photo: false, identification: false});
    const yearOptions = useMemo(() => {
        if (!formOptions) return [];
        const { AGE } = formOptions;
        return (
            Array(AGE.MAX - AGE.MIN + 2)
            .fill(AGE.MIN)
            .map((value, idx) => (2020-value-idx).toString())
        );
    }, [formOptions]);
    
    if (!formOptions || loading) return (<Loading />);
    const { STATES } = formOptions;

    const {
        firstname,
        lastname,
        streetaddress,
        city,
        state,
        zip,
        dob,
        gender,
        phone,
    } = form;
    const [month, day, year] = dob ? dob.split('/') : ['', '', ''];

    const handleFormEdit = key => event => onUpdate({...form, [key]: event.target.value});
    const handleAutocompleteFieldEdit = key => val => onUpdate({...form, [key]: val});
    const handleImageUpload = key => base64File => onUpdate({...form, [key]: base64File})
    const handleDobEdit = key => val => {
        let newDob;
        if (key === 'year') {
            newDob = [month, day, val];
        } else if (key === 'month') {
            newDob = [val, day, year];
        } else if (key === 'day') {
            newDob = [month, val, year];
        } else return;
        onUpdate({...form, 'dob': newDob.join('/')})
    };

    return (
        <>
            <Box mb={3}>
                <Typography variant="h4">Personal Information</Typography>
                <Box my={1}>
                    <TextField
                        fullWidth
                        required
                        label="First Name"
                        variant="outlined"
                        value={firstname}
                        onChange={handleFormEdit('firstname')}
                    />
                </Box>
                <Box my={1}>
                    <TextField
                        fullWidth
                        required
                        label="Last Name"
                        variant="outlined"
                        value={lastname}
                        onChange={handleFormEdit('lastname')}
                    />
                </Box>
                <Box my={1}>
                    <AutocompleteSelect
                        required
                        label="Sex assigned at birth"
                        selectedValue={gender}
                        options={['Female']}
                        onSelect={handleAutocompleteFieldEdit('gender')}
                    />
                </Box>
                <Box my={1}>
                    <FormHelperText>Date of Birth *</FormHelperText>
                    <Box display="flex" mt={1}>
                        <Grid item xs={3}>
                            <AutocompleteSelect
                                required
                                label="Month"
                                type="number"
                                maxDigits={2}
                                selectedValue={month}
                                options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
                                onSelect={handleDobEdit('month')}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <AutocompleteSelect
                                required
                                type="number"
                                maxDigits={2}
                                label="Day"
                                selectedValue={day}
                                options={daysOfTheMonth}
                                onSelect={handleDobEdit('day')}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <AutocompleteSelect
                                required
                                label="Year"
                                type="number"
                                maxDigits={4}
                                selectedValue={year}
                                options={yearOptions}
                                onSelect={handleDobEdit('year')}
                            />
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box mb={3}>
                <Typography variant="h4">Contact Information</Typography>
                <Box my={1}>
                    <TextField
                        fullWidth
                        required
                        label="Phone Number"
                        variant="outlined"
                        value={phone}
                        onChange={handleFormEdit('phone')}
                        InputProps={{
                            inputComponent: PhoneField
                        }}
                    />
                </Box>
            </Box>
            <Box mb={3}>
                <Typography variant="h4">Address (where we will ship prescriptions)</Typography>
                <Box my={1}>
                    <TextField
                        fullWidth
                        required
                        label="Address"
                        variant="outlined"
                        value={streetaddress}
                        onChange={handleFormEdit('streetaddress')}
                    />
                </Box>
                <Box my={1} display="flex">
                    <Grid container>
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                required
                                label="City"
                                variant="outlined"
                                value={city}
                                onChange={handleFormEdit('city')}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <AutocompleteSelect
                                required
                                label="State"
                                selectedValue={state}
                                options={STATES}
                                onSelect={handleAutocompleteFieldEdit('state')}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box my={1}>
                    <TextField
                        fullWidth
                        required
                        name='zip'
                        label="Zipcode"
                        variant="outlined"
                        type="number"
                        onKeyDown={e => {
                            if (e.keyCode === 190) {
                                e.preventDefault();
                                return;
                            }
                        }}
                        onInput={(e)=>{
                            e.target.value = parseInt(e.target.value).toString().slice(0,5);
                        }}
                        value={zip}
                        onChange={handleFormEdit('zip')}
                    />
                </Box>
            </Box>
            <Box mb={3}>
                <Typography variant="h4">Verify Your ID</Typography>
                <Typography>
                    We also need a photo of any form of identification (driver’s license, school id, etc.)
                    just to make sure you are you.</Typography>
                <Box my={1}>
                    { compressing.identification && <CircularProgress /> }
                    { form.identification && !compressing.identification && (
                        <img style={{
                            width: '200px',
                            height: '140px',
                            objectFit: 'cover',
                        }}
                        alt="Identification"
                        src={`data:image/jpeg;base64,${form.identification}`} />
                    )}
                    <ImageInput
                        updateCompressing={isCompressing => updateCompressing({...compressing, identification: isCompressing})}
                        id="id-upload"
                        onChange={handleImageUpload('identification')}
                    />
                </Box>
            </Box>
            <Box mb={3}>
                <Typography variant="h4">Profile Photo</Typography>
                <Typography>We ask for a photo as a secondary form of identification</Typography>
                <Box my={1}>
                    { compressing.photo && <CircularProgress /> }
                    { form.photo && !compressing.photo && (
                        <img style={{
                            width: '140px',
                            height: '140px',
                            objectFit: 'cover',
                        }}
                        alt="Profile"
                        src={`data:image/jpeg;base64,${form.photo}`} />
                    )}
                    <ImageInput
                        updateCompressing={isCompressing => updateCompressing({...compressing, photo: isCompressing})}
                        id="photo-upload"
                        onChange={handleImageUpload('photo')}
                    />
                </Box>
            </Box>
        </>
    );
}

export default UserAccountCreation;
