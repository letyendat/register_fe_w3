import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormHelperText, OutlinedInput } from "@mui/material";
import { Controller } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disable } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  // console.log(formState.touchedFields[name]);
  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <InputLabel sx={{
        color: "#424242",
        '&.Mui-focused': {
          color: "#424242"
        }
      }} htmlFor={name}>{label}</InputLabel>
      <Controller
        control={form.control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <OutlinedInput
            value={value}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched
            inputRef={ref}
            id={name}
            type={showPassword ? "text" : "password"}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            disabled={disable}
            error={!!hasError}
          />
        )}
      />
      {!!hasError && (
        <FormHelperText error id={name}>
          {errors[name]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default PasswordField;
