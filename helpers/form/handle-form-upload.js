import uploadFileToStorage from './upload-file';

export default async function handleFormUpload({ fields, form, endpoint }) {
  const updatedForm = { ...form };

  // * Upload files to storage
  // Check if input fields are in fields. Else, return
  if (!fields.some(field => field.type === 'file')) {
    return updatedForm;
  }

  // Check if there are files to upload. Else, return
  const fileFields = fields.filter(field => field.type === 'file').map(field => field.id);

  const filesToUpload = [];
  for (const fileField of fileFields) {
    if (updatedForm[fileField]) {
      filesToUpload.push({
        id: fileField,
        file: updatedForm[fileField]
      });
    }
  }

  if (filesToUpload.length === 0) {
    return updatedForm;
  }

  // Upload files
  for (const { id, file } of filesToUpload) {
    // Upload and get the download url
    const url = await uploadFileToStorage({
      file,
      endpoint,
    });
    // Update the form with the download url
    updatedForm[id] = url;
  }

  return updatedForm;
}