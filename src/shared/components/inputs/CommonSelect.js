import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    dropdown: {

    }
}));
const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        height: '37px',
        background: '#eaeaeb',
        border: 'none',
        fontSize: 18,
        padding: '10px 26px 10px 12px',
        color: '#374954',
        fontWeight:700,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
           
        },
    },
}))(InputBase);
const CommonSelect = ({ options, placeholder, value, onChange }) => {
    const classes = useStyles();
    return (
        <div>
            <FormControl>
                <NativeSelect
                    id="demo-customized-select-native"
                    input={<BootstrapInput />}
                    className={classes.dropdown}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Placeholder</em>;
                        }

                        return selected.join(', ');
                    }}
                    value={value}
                  onChange={onChange}
                >
                    <option  value={""}>
                        {placeholder}
                    </option>
                    {options.map((name) => (
                        <>
                            <option key={name} value={name}>
                                {name}
                            </option>
                        </>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CommonSelect