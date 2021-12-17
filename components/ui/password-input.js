import { useState } from 'react';
import propTypes from 'prop-types';

// MUI IMPORT
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';

// MUI ICONS
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function PasswordInput({ value, name, handleChange, error, helperText, confirm }) {
  const [showPassword, setShowPassword] = useState(false);

  // Handle password show/hide
  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = confirm ? 'Confirmation du mot de passe' : 'Mot de passe';

  return (
    <FormControl sx={{ m: 1 }} variant="outlined" required>
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
