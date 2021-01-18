import React, {forwardRef} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {FormProfileStyles} from "../../Profile.styles";
import classNames from "classnames";

function isInvalid({valid, touched}, shouldValidate) {
  return !valid && shouldValidate && touched;
}

const Input = forwardRef(({ classes, item, isEdit, onChange, ...props }) => {
  return (
    <div className={classes.control}>
      <div className={classes.controlLabel}>{item.label}</div>
      <div
        className={
          classNames(
            classes[item.className],
            (isEdit && !!item.isEdit) && classes[item.inputActiveClassName],
            isInvalid(item, props.shouldValidate) && classes.invalid
          )}
        contentEditable={(isEdit && !!item.isEdit)}
        onInput={onChange}
        ref={item.ref}
        suppressContentEditableWarning={true}
      >
        {item.value}
      </div>
      {
        isInvalid(item, props.shouldValidate)
          ? <span className={classes.errorMessage}>{item.errorMessage || 'Error'}</span>
          : null
      }
    </div>
  );
});

export default withStyles(FormProfileStyles)(Input);
