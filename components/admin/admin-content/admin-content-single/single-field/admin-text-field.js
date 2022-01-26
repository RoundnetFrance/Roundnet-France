import propTypes from "prop-types";

// MUI IMPORTS
import { TextField, Typography } from "@mui/material";

export default function AdminTextField({
  id,
  value,
  editable,
  handleChange,
  required,
  rows,
  longText,
}) {
  if (!editable)
    return (
      <Typography variant="body1" sx={{ my: { xs: 0, sm: 1 } }}>
        {value}
      </Typography>
    );

  return (
    <TextField
      id={id}
      variant="standard"
      value={value}
      onChange={(event) => handleChange(id, event.target.value)}
      required={required}
      multiline={longText}
      rows={rows}
      fullWidth
    />
  );
}

AdminTextField.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string,
  editable: propTypes.bool,
  handleChange: propTypes.func.isRequired,
  required: propTypes.bool.isRequired,
  rows: propTypes.number,
  longText: propTypes.bool,
};

AdminTextField.defaultProps = {
  value: "",
  editable: false,
  rows: 5,
  longText: false,
};
