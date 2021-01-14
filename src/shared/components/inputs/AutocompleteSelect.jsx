/**
 * This component is the auto-complete select component for forms.
 * There is a bit of juggling between the parent component's selectedValue and the component's current value.
 */

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteSelect = ({ type, maxDigits, options, onSelect, selectedValue, disabled, required, label }) => {
	const [currentValue, setCurrentValue] = useState(selectedValue);
	if (!(options || options.length)) return null;

	return (
		<Autocomplete
			fullwidth
			autoSelect
			autoHighlight
			disabled={disabled}
			inputValue={selectedValue}
			onInputChange={(e, newInputValue) => {
				if (!e) return;
				onSelect(newInputValue);
			}}
			options={options}
			renderInput={(params) =>
				<TextField
					{...params}
					value={currentValue}
					onChange={e => {
						setCurrentValue(e.currentTarget.value);
					}}
					type={type}
					onKeyDown={e => {
						if (type === "number" && e.keyCode === 190) {
							e.preventDefault();
						}
					}}
					onInput={(e)=>{
						if (type === "number" && maxDigits) {
							e.target.value = parseInt(e.target.value).toString().slice(0, maxDigits);
						}
					}}
					required={required}
					label={label}
					ref={params.InputProps.ref}
					variant="outlined"
				/>
			}
		/>
	);
};

AutocompleteSelect.defaultProps = {
	type: 'text',
};

export default AutocompleteSelect;