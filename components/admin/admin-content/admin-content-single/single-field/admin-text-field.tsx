import { TextField, Typography } from "@mui/material";
import type { FC } from "react";

interface AdminTextFieldProps {
  id: string;
  value: string;
  editable: boolean;
  handleChange: (id: string, value: string) => void;
  required: boolean;
  rows?: number;
  longText?: boolean;
}

export const AdminTextField: FC<AdminTextFieldProps> = ({
  id,
  value,
  editable,
  handleChange,
  required,
  rows,
  longText,
}) => {
  if (!editable)
    return (
      <Typography variant='body1' sx={{ my: { xs: 0, sm: 1 } }}>
        {value}
      </Typography>
    );

  return (
    <TextField
      id={id}
      variant='standard'
      value={value}
      onChange={(event) => handleChange(id, event.target.value)}
      required={required}
      multiline={longText}
      rows={rows}
      fullWidth
    />
  );
};