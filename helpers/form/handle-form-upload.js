import uploadFileToStorage from "./upload-file";

export default async function handleFormUpload({
  fields,
  form,
  endpoint,
  contentToSlug,
  allowOverwrite = false,
}) {
  const updatedForm = { ...form };

  // * Upload files to storage
  // Check if input fields are in fields. Else, return
  if (!fields.some((field) => field.type === "file")) {
    return updatedForm;
  }

  // Check if there are files to upload. Else, return
  const fileFields = fields
    .filter((field) => field.type === "file")
    .map((field) => {
      if (field.id) {
        return field.id;
      }
      return field._id;
    });

  // Get all files to upload (and their limit, if need be)
  const filesToUpload = [];
  for (const fileField of fileFields) {
    if (updatedForm[fileField]) {
      // Find maxWidth and maxHeight of the image. Fields ids can be "id" or "_id"
      const field = fields.find((field) => {
        if (field.id) return field.id === fileField;
        return field._id === fileField;
      });

      const maxWidth = field?.options?.fileConfig?.imageMaxWidth;
      const maxHeight = field?.options?.fileConfig?.imageMaxHeight;

      filesToUpload.push({
        id: fileField,
        file: updatedForm[fileField],
        maxWidth: maxWidth,
        maxHeight: maxHeight,
      });
    }
  }

  if (filesToUpload.length === 0) {
    return updatedForm;
  }

  // Upload files
  for (const { id, file, maxHeight, maxWidth } of filesToUpload) {
    // If file is a string, it's a URL, meaning it's already uploaded. Don't touch it.
    if (typeof file === "string") {
      return;
    }

    // Else, it's a file. Upload and get the download url
    const url = await uploadFileToStorage({
      file,
      endpoint,
      contentToSlug,
      fieldId: id,
      width: maxWidth,
      height: maxHeight,
      allowOverwrite,
    });
    // Update the form with the download url
    updatedForm[id] = url;
  }

  return updatedForm;
}
