import { type FC, type MouseEventHandler, useState } from "react";

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordInputProps {
  label: string;
  value: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
  required: boolean;
}

const PasswordInput: FC<PasswordInputProps> = ({
  error,
  handleChange,
  helperText,
  label,
  name,
  required,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleMouseDownPassword: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant='outlined' required={required}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        type={showPassword ? "text" : "password"}
        value={value}
        error={error}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      {error && (
        <FormHelperText error id={`${name}-error`}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default PasswordInput;
