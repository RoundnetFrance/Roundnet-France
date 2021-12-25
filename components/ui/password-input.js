import { useState } from 'react';
import propTypes from 'prop-types';

// MUI IMPORT
import { FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, FormHelperText } from '@mui/material';

// MUI ICONS
import { Visibility, VisibilityOff } from '@mui/icons-material';

function PasswordInput({ label, value, name, handleChange, error, helperText, required }) {
  const [showPassword, setShowPassword] = useState(false);

  // Handle password show/hide
  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1 }} variant="outlined" required={required}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        type={showPassword ? 'text' : 'password'}
        value={value}
        error={error}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      {
        error && <FormHelperText error id={`${name}-error`}>{helperText}</FormHelperText>
      }
    </FormControl>
  )
}

PasswordInput.propTypes = {
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  error: propTypes.bool.isRequired,
  helperText: propTypes.string.isRequired,
  confirm: propTypes.bool,
}

PasswordInput.defaultProps = {
  confirm: false,
}

export default PasswordInput
