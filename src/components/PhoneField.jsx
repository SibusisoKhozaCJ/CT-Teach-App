/**
 * This is the phone number input field for forms. There is a mask on it that
 * adds the parentheses and hyphens for a well-formatted number.
 */

import React from 'react';
import MaskedInput from 'react-text-mask'

const PhoneField = props => {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={ref => { inputRef(ref ? ref.inputElement : null); }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
      />
    );
};

export default PhoneField;
