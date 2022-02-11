import propTypes from "prop-types";
import { Fragment } from "react";
import { fr } from "date-fns/locale";

// MUI IMPORTS
import { TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";

export default function AdminDateField({
  id,
  value,
  editable,
  handleChange,
  required,
  dateConfig,
}) {
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
          <Fragment>
            <TextField label="Date" {...params} required={required} fullWidth />
          </Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

AdminDateField.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string,
  editable: propTypes.bool,
  handleChange: propTypes.func.isRequired,
  required: propTypes.bool.isRequired,
  dateConfig: propTypes.shape({
    disableFuture: propTypes.bool,
    clearable: propTypes.bool,
    openTo: propTypes.string,
    views: propTypes.arrayOf(propTypes.string),
  }),
};

AdminDateField.defaultProps = {
  value: "",
  editable: false,
};
