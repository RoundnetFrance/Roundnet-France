import { fr } from "date-fns/locale";

import { TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import type { FormOptions } from "../../../../../models/Form";
import type { FC } from "react";

interface AdminDateFieldProps {
  id: string;
  value: string;
  editable: boolean;
  handleChange: (id: string, value: string) => void;
  required: boolean;
  dateConfig?: FormOptions["dateConfig"];
}

export const AdminDateField: FC<AdminDateFieldProps> = ({
  id,
  value = "",
  editable = false,
  handleChange,
  required,
  dateConfig,
}) => {
  if (!editable)
    return (
      <Typography variant="body1" sx={{ my: { xs: 0, sm: 1 } }}>
        {new Date(value).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
    );

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={fr}>
      <DatePicker
        disableFuture={dateConfig?.disableFuture}
        clearable={dateConfig?.clearable}
        id={id}
        openTo={dateConfig?.openTo || "month"}
        views={dateConfig?.views || ["year", "month", "day"]}
        value={value || null}
        onChange={(newValue) => {
          handleChange(id, newValue);
        }}
        renderInput={(params) => (
            <TextField key={params} label="Date" {...params} required={required} fullWidth />
        )}
      />
    </LocalizationProvider>
  );
}