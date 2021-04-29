import React from 'react';
import classNames from "classnames";
import {isEmpty} from "lodash";


const Input = React.forwardRef(({ item, errors, name, isEdit, ...props}, ref) => {
  const isError = !isEmpty(errors) && errors[name];

  const inputClasses = classNames(
    item.className,
    (isEdit) && item.inputActiveClassName,
    isError && 'invalid'
  );

  return (
    <div className='controlProfile'>
      <div className="controlLabel">
        {item.label}
        {item.optional && <span> (Optional)</span>}
      </div>
      {
        item.type === 'input' ? (
          <input
            className={inputClasses}
            ref={ref}
            onChange={event => props.onChange(event.target.value)}
            value={props.value}
            disabled={!isEdit}
            placeholder={item.placeholder}
          />
        ) : item.type === 'textarea' ? (
          <textarea
            ref={ref}
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            className={inputClasses}
            disabled={!isEdit}
            placeholder={item.placeholder}
          />
        ) : (
          <div className={item.className}>{props.value}</div>
        )
      }
      {
        isError
          ? <div className='errorMessage'>{errors[name]?.message}</div>
        : null
      }
    </div>
  )
});

export default Input;
