import { useState } from "react";

// MUI IMPORTS
import {
  TextField,
  Stack,
  Typography,
  Divider,
  Switch,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// MUI ICONS
import EditIcon from "@mui/icons-material/Edit";
import AbcIcon from "@mui/icons-material/Abc";

// COMPONENT IMPORTS
import AdminTextField from "./admin-text-field";
import AdminFileField from "./admin-file-field";
import AdminSelectField from "./admin-select-field";

export default function DataSingleField({
  id,
  value,
  fieldLayout,
  handleValuesChange,
}) {
  // Theme breakpoint listener
  const theme = useTheme();
  const higherThanMd = useMediaQuery(theme.breakpoints.up("md"));

  // Handle dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  function handleDialogOpen() {
    setDialogOpen(true);
  }
  function handleDialogClose() {
    setDialogOpen(false);
  }

  // Get options of field
  const { name: label, type, editable, options } = fieldLayout;

  // Store image
  const [imageURL] = useState(value);

  // Define which content to use
  let content;
  switch (type) {
    case "longtext":
      content = (
        <AdminTextField
          id={id}
          value={value}
          handleChange={handleValuesChange}
          editable={editable}
          required={options?.required || false}
          rows={options?.multilineRows}
          longText
        />
      );
      break;

    case "select":
      content = (
        <AdminSelectField
          id={id}
          value={value}
          handleChange={handleValuesChange}
          editable={editable}
          required={options?.required || false}
          selectValues={options?.selectValues}
        />
      );
      break;

    case "boolean":
      content = (
        <Switch
          id={id}
          checked={value}
          size="large"
          onChange={() => {
            handleValuesChange(id, !value);
          }}
        />
      );
      break;

    case "array":
      if (!value) {
        content = (
          <Typography variant="body1" sx={{ my: 1 }}>
            N/A
          </Typography>
        );
        break;
      }

      content = value.map((element, valueIndex) => {
        // Content if array is not editable (only display)
        if (!editable) {
          return (
            <Box
              key={element[options.array.key]}
              sx={{ mt: valueIndex === 0 && 1 }}
            >
              <Typography variant="body1">
                <strong>{element[options.array.key]}</strong>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {element[options.array.value] || "N/A"}
              </Typography>
            </Box>
          );
        }

        // Editable array content
        return (
          <TextField
            key={element[options.array.key]}
            value={element[options.array.value]}
            label={element[options.array.key]}
            onChange={(event) => {
              const newArray = value.map((item, itemIndex) => {
                if (itemIndex === valueIndex) {
                  item[options.array.value] = event.target.value;
                }
                return item;
              });
              handleValuesChange(id, newArray);
            }}
            variant="standard"
            fullWidth
            margin={higherThanMd ? "normal" : "dense"}
          />
        );
      });
      break;

    // case "date":
    //   content = (
    //     <LocalizationProvider dateAdapter={DateAdapter} locale={fr}>
    //       <DatePicker
    //         disableFuture={options?.dateConfig?.disableFuture}
    //         clearable={options?.dateConfig?.clearable}
    //         error={booleanError}
    //         id={id}
    //         label={label}
    //         openTo={options?.dateConfig?.openTo || "month"}
    //         views={options?.dateConfig?.views || ["year", "month", "day"]}
    //         value={value || null}
    //         onChange={(newValue) => {
    //           handleChange({
    //             target: {
    //               id,
    //               value: newValue,
    //             },
    //           });
    //         }}
    //         renderInput={(params) => (
    //           <Fragment>
    //             <TextField label="Date" {...params} />
    //             <FormHelperText
    //               error={booleanError}
    //               id={`${label}-error`}
    //               sx={{ position: "relative", bottom: 10 }}
    //             >
    //               {error}
    //             </FormHelperText>
    //           </Fragment>
    //         )}
    //       />
    //     </LocalizationProvider>
    //   );
    //   break;

    // case "autocomplete":
    //   content = (
    //     <Autocomplete
    //       disablePortal
    //       freeSolo
    //       selectOnFocus
    //       clearOnBlur
    //       handleHomeEndKeys
    //       id={id}
    //       value={value}
    //       onChange={(event, newValue) => {
    //         handleChange({
    //           target: {
    //             id,
    //             value: newValue,
    //           },
    //         });
    //       }}
    //       options={options?.selectValues}
    //       renderInput={(params) => <TextField {...params} label={label} />}
    //     />
    //   );
    //   break;

    // case "password":
    //   content = (
    //     <PasswordInput
    //       label={label}
    //       value={value}
    //       name={id}
    //       handleChange={handleChange}
    //       error={booleanError}
    //       helperText={error}
    //       confirm={options?.passwordConfirm}
    //       required={options?.required}
    //     />
    //   );
    //   break;

    case "file":
      content = (
        <AdminFileField
          id={id}
          value={value}
          image={imageURL}
          handleChange={handleValuesChange}
          editable={editable}
          fileType={options?.fileConfig?.type}
        />
      );
      break;

    default:
      content = (
        <AdminTextField
          id={id}
          value={value}
          handleChange={handleValuesChange}
          editable={editable}
          required={options?.required || false}
        />
      );
      break;
  }

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      alignItems="flex-start"
      my={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 1, md: 2 }}
        sx={{ width: "180px", maxWidth: "180px", pt: 0.5 }}
      >
        {editable ? (
          <EditIcon color="primary" fontSize="small" />
        ) : (
          <AbcIcon color="primary" fontSize="small" />
        )}
        <Typography variant="h6" color="initial">
          {label}
        </Typography>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ width: "100%" }}>{content}</Box>
    </Stack>
  );
}
