// MUI IMPORTS
import { TextField } from "@mui/material";

export default function DataSingleField({}) {
  return (
    <TextField
      id="outlined-basic"
      label="Plop"
      value={2}
      onChange={() => {}}
      fullWidth
      variant="standard"
      sx={{ mb: 2 }}
    />
  );
}
