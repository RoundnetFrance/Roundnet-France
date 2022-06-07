import { useState, useEffect, Fragment } from "react";
// DYNAMIC IMPORTS
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

// MUI IMPORTS
import {
  TextField,
  Stack,
  Typography,
  Divider,
  Switch,
  Box,
  useMediaQuery,
  Dialog,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// MUI ICONS
import EditIcon from "@mui/icons-material/Edit";
import AbcIcon from "@mui/icons-material/Abc";

// COMPONENT IMPORTS
import AdminTextField from "./admin-text-field";
import AdminFileField from "./admin-file-field";
import AdminSelectField from "./admin-select-field";
import AdminDateField from "./admin-date-field";
import FormBuilder from "../../../../form-builder";

export default function DataSingleField({
  id,
  value,
  fieldLayout,
  handleValuesChange,
}) {
  useEffect(() => {
    if (document) {
    }
  }, []);

  // Theme breakpoint listener
  const theme = useTheme();
  const higherThanMd = useMediaQuery(theme.breakpoints.up("md"));

  // Get options of field
  const { name: label, type, editable, options } = fieldLayout;

  // Store image and change it only if value is string (is URI to Firebase Storage)
  const [imageUrl, setImageUrl] = useState(value);
  useEffect(() => {
    if (typeof value === "string") {
      setImageUrl(value);
    }
  }, [value]);

  // Handle Quill image dialog
  const [quillImageDialogOpen, setQuillImageDialogOpen] = useState(false);

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

    case "date":
      content = (
        <AdminDateField
          id={id}
          value={value}
          handleChange={handleValuesChange}
          editable={editable}
          required={options?.required || false}
          dateConfig={options?.dateConfig}
        />
      );
      break;

    case "file":
      content = (
        <AdminFileField
          id={id}
          value={value}
          image={imageUrl}
          setImage={setImageUrl}
          handleChange={handleValuesChange}
          editable={editable}
          fileType={options?.fileConfig?.type}
        />
      );
      break;

    case "rich-editor": {
      function handleQuillDialogOpen() {
        setQuillImageDialogOpen(true);
      }
      function handleQuillDialogClose() {
        setQuillImageDialogOpen(false);
      }

      const quillImageHandler = () => {
        handleQuillDialogOpen();
      };

      content = (
        <Fragment>
          <QuillNoSSRWrapper
            modules={{
              toolbar: {
                container: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["link", "image"],
                  // ["clean"],
                  [{ color: [] }],
                ],
                handlers: {
                  image: quillImageHandler,
                },
              },
            }}
            theme="snow"
            value={value}
            onChange={(content) => handleValuesChange(id, content)}
          />

          {/* Image Dialog */}
          <Dialog
            title="Ajouter une image"
            open={quillImageDialogOpen}
            handleClose={handleQuillDialogClose}
            cancelText="Annuler"
          >
            <FormBuilder
              formConfig={{
                name: "Upload",
                endpoint: "upload-image",
                submitText: "Ajouter",
                fields: [
                  {
                    id: "image",
                    label: "Image",
                    type: "file",
                    options: {
                      fileConfig: {
                        type: "image",
                        imageMaxWidth: 800,
                      },
                    },
                  },
                ],
              }}
            />
          </Dialog>
        </Fragment>
      );
      break;
    }

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
    // Full row for boolean switches/checkboxes
    <Stack
      direction={{ xs: type === "boolean" ? "row" : "column", md: "row" }}
      spacing={{ xs: type === "boolean" ? 3 : 0, md: 4 }}
      alignItems={type === "boolean" ? "center" : "flex-start"}
      my={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 1, md: 2 }}
        sx={{
          width: {
            xs: type === "boolean" ? "fit-content" : "100%",
            md: "230px",
          },
          pt: 0.5,
        }}
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
