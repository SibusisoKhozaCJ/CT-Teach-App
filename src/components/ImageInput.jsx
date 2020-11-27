/**
 * This is the image input form element. It is built to auto-compress uploaded images.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import imageCompression from 'browser-image-compression';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const ImageInput = ({ onChange, required, id, width,  updateCompressing }) => {
    return (
        <Box>
            <Button variant="outlined" style={{ textTransform: 'none', width }}><label for={id}>Choose Image</label></Button>
            <Input
                id={id}
                type="file"
                style={{ visibility: 'hidden' }}
                inputProps={{ accept: 'image/*' }}
                onChange={async e => {
                     updateCompressing(true);
                    const { target: { files } = {} } = e;
                    if (!files.length) return;

                    let compressedFile;
                    try {
                        compressedFile = await imageCompression(files[0], { maxSizeMB: 1.0 });
                        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
                    } catch (error) {
                        console.log(error);
                        updateCompressing(false);
                        return null;
                    }
                    if (!compressedFile) {  updateCompressing(false); return; }
                    const result = await toBase64(compressedFile).catch(e => Error(e));
                    if(result instanceof Error) {
                        console.log('Error: ', result.message);
                        updateCompressing(false);
                        return;
                    }
                    const strippedConversion = result.split(',');
                    if (strippedConversion.length <= 1) {
                        console.log('Could not convert file to base64');
                         updateCompressing(false);
                        return;
                    }
                    onChange(strippedConversion[1]);
                    updateCompressing(false);
                }}
            />
        </Box>

    );
};

ImageInput.defaultProps = {
    width: '140px',
};

ImageInput.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.string,
};

export default ImageInput;
