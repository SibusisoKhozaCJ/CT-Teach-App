
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {FormProfileStyles} from "../../Profile.styles";
import classNames from "classnames";
import {isEmpty} from "lodash";

const useStyles = makeStyles(FormProfileStyles);

const Input = React.forwardRef(({ item, errors, name, isEdit, ...props }, ref) => {
  const classes = useStyles();
  const isError = !isEmpty(errors) && errors[name];

  const inputClasses = classNames(
    classes[item.className],
    (isEdit) && classes[item.inputActiveClassName],
    isError && classes.invalid
  );

  return (
    <div className={classes.control}>
      <div className={classNames(classes.controlLabel, classes[item.hiddenClass])}>
        {item.label}
        {item.optional && <span> (Optional)</span>}
      </div>
      {
        item.type === 'input' ? (
          <input
            className={inputClasses}
            ref={ref}
            onChange={event => props.onChange(event.target.value)}
            placeholder={item.placeHolder || ''}
            value={props.value}
            disabled={!isEdit}
          />
        ) : item.type === 'textarea' ? (
          <textarea
            ref={ref}
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            className={inputClasses}
            disabled={!isEdit}
            placeholder={item.placeHolder}
          />
        ) : (
          <div className={classes[item.className]}>{props.value}</div>
        )
      }
      {
        isError
          ? <div className={classes.errorMessage}>{errors[name]?.message}</div>
        : null
      }
    </div>
  )
});

export default Input;
