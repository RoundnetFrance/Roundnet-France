import propTypes from "prop-types";

// MUI IMPORTS
import { FormControl, Select, MenuItem, Typography } from "@mui/material";

export default function AdminSelectField({
  id,
  value,
  editable,
  handleChange,
  required,
  selectValues,
}) {
  if (!editable)
    return (
      <Typography variant="body1" sx={{ my: { xs: 0, sm: 1 } }}>
        {value}
      </Typography>
    );

  return (
    <FormControl required={required} fullWidth>
      <Select
        labelId={id}
        id={id}
        value={value}
        onChange={(event) => {
          handleChange(id, event.target.value);
        }}
      >
        {selectValues.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

AdminSelectField.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string,
  editable: propTypes.bool,
  handleChange: propTypes.func.isRequired,
  required: propTypes.bool.isRequired,
  selectValues: propTypes.array.isRequired,
};

AdminSelectField.defaultProps = {
  value: "",
  editable: false,
};
