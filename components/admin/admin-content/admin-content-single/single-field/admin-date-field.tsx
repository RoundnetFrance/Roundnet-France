import { fr } from "date-fns/locale";

import { TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import type { FormOptions } from "../../../../../models/Form";
import type { FC } from "react";

interface AdminDateFieldProps {
  id: string;
  value: string | null;
  editable: boolean;
  handleChange: (id: string, value: string | null) => void;
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
        {value
          ? new Date(value).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : null}
      </Typography>
    );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <DatePicker
        disableFuture={dateConfig?.disableFuture}
        clearable={dateConfig?.clearable}
        id={id}
        openTo={dateConfig?.openTo || "month"}
        views={dateConfig?.views || ["year", "month", "day"]}
        //@ts-ignore
        value={value || null}
        onChange={(newValue) => {
          handleChange(id, newValue ? newValue.toISOString() : null);
        }}
        slotProps={{
          textField: {
            required,
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};
