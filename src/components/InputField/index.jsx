import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  
  isNotBold: PropTypes.bool,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, isNotBold, label, disable } = props;
  const { formState: {errors} } = form;
  const hasError = errors[name];
  // console.log(formState.touchedFields[name]);
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <TextField
          value={value}
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched
          inputRef={ref}
          name={name}
          label={label}
          disabled={disable}
          fullWidth
          margin="normal"
          InputLabelProps= {isNotBold === true ? {style: {color:"#424242"}} : {style: {fontWeight:"bold", color:"#424242"}}}
          error = {!!hasError}
          helperText= {errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
