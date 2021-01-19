import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const ContactUs = () => (
    <div>
        <Box mb={1}>
            <Typography variant="h1">Contact Us</Typography>
        </Box>
        <Box mb={1}>
            <Typography>
                If you need to speak, text, ask questions or other wise say hello, please leverage one of the below. 
            </Typography>
        </Box>
        <Box my={2}>
            <Typography variant="h4">Text</Typography>
            <Typography>123-456-789</Typography>
        </Box>
        <Box my={2}>
            <Typography variant="h4">Email</Typography>
            <Typography variant="subtitle1">No teacher/personal details please</Typography>
            <Typography><Link href="mailto:support@codjika.org">support@codjika.org</Link></Typography>
        </Box>
    </div>
);

export default ContactUs;
