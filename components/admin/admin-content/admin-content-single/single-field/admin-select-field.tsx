import { FormControl, Select, MenuItem, Typography } from "@mui/material";
import type { FC } from "react";

interface AdminSelectFieldProps {
  id: string;
  value: string;
  editable: boolean;
  handleChange: (id: string, value: string) => void;
  required: boolean;
  selectValues: { value: string; label: string }[];
}

export const AdminSelectField: FC<AdminSelectFieldProps> = ({
  id,
  value = "",
  editable = false,
  handleChange,
  required,
  selectValues,
}) => {
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