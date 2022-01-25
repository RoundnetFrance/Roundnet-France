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

export default function DataSingleField({
  id,
  value,
  fieldLayout,
  handleValuesChange,
}) {
  const theme = useTheme();
  const higherThanMd = useMediaQuery(theme.breakpoints.up("md"));

  // Get options of field
  const { name: label, type, editable, options } = fieldLayout;

  // Define which input to use
  let input;
  switch (type) {
    case "longtext":
      input = (
        <TextField
          id={id}
          variant="standard"
          value={value}
          onChange={(event) => handleValuesChange(id, event.target.value)}
          required={options?.required || true}
          multiline
          rows={options?.multilineRows || 5}
          fullWidth
        />
      );
      break;

    case "boolean":
      input = (
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
      input = value.map((element, valueIndex) => {
        console.log();
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
    //   input = (
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
    //   input = (
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
    //   input = (
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

    // case "select": {
    //   input = (
    //     <FormControl error={booleanError} required={options?.required}>
    //       <InputLabel id={id}>{label}</InputLabel>
    //       <Select
    //         labelId={id}
    //         label={label}
    //         id={id}
    //         value={value}
    //         onChange={(event) => {
    //           handleChange({
    //             target: {
    //               id,
    //               value: event.target.value,
    //             },
    //           });
    //         }}
    //       >
    //         {options?.selectValues.map((item) => (
    //           <MenuItem key={item.value} value={item.value}>
    //             {item.label}
    //           </MenuItem>
    //         ))}
    //       </Select>
    //       {booleanError && (
    //         <FormHelperText error={booleanError} id={`${label}-error`}>
    //           {error}
    //         </FormHelperText>
    //       )}
    //     </FormControl>
    //   );
    //   break;
    // }

    // case "file": {
    //   // Define which files are accept (HTML/Browser shallow validation only)
    //   let accept;
    //   switch (options?.fileConfig?.type) {
    //     case "image":
    //       accept = "image/*";
    //       break;

    //     case "pdf":
    //       accept = "application/pdf";
    //       break;

    //     default:
    //       accept = "*";
    //       break;
    //   }

    //   input = (
    //     <Fragment>
    //       <Box>
    //         <Button
    //           size="large"
    //           variant="outlined"
    //           color={booleanError ? "error" : "primary"}
    //           component="label"
    //           onClick={handleFileDialogOpen}
    //           sx={{ mr: 2 }}
    //         >
    //           {label} - Upload
    //         </Button>
    //         <Typography component="span" variant="body2">
    //           {value.name || "Aucun fichier séléctionné"}
    //         </Typography>
    //         {booleanError && (
    //           <FormHelperText error={booleanError} id={`${label}-error`}>
    //             {error}
    //           </FormHelperText>
    //         )}
    //       </Box>

    //       {/* Dialog component */}
    //       <Dialog
    //         open={dialogOpen}
    //         title="Uploader"
    //         handleClose={handleFileDialogClose}
    //         cancelText="Annuler"
    //         confirmButton={
    //           <Button variant="contained" onClick={handleFileDialogClose}>
    //             Choisir ce fichier
    //           </Button>
    //         }
    //       >
    //         <Button variant="contained" component="label" color="primary">
    //           Envoyer un fichier
    //           <input
    //             type="file"
    //             name="file"
    //             accept={accept}
    //             hidden
    //             onChange={(event) =>
    //               handleChange({
    //                 target: {
    //                   id,
    //                   value: event.target.files[0],
    //                 },
    //               })
    //             }
    //           />
    //         </Button>
    //         <Typography variant="body2" mt={2} pl={2}>
    //           {value ? value.name : "Aucun fichier sélectionné"}
    //         </Typography>
    //       </Dialog>
    //     </Fragment>
    //   );
    //   break;
    // }

    default:
      input = (
        <TextField
          id={id}
          value={value}
          onChange={(event) => handleValuesChange(id, event.target.value)}
          placeholder="Vide"
          fullWidth
          variant="standard"
          margin={higherThanMd ? "normal" : "dense"}
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
        spacing={1}
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
      <Box sx={{ width: "100%" }}>
        {editable ? input : <Typography variant="body1">{value}</Typography>}
      </Box>
    </Stack>
  );
}
