import type { FormField } from "../../models/Form";
import { uploadFileToStorage } from "./upload-file";

interface HandleFormUploadProps {
	fields: FormField[];
	form: Record<string, any>;
	endpoint: string;
	contentToSlug?: string;
}

export const handleFormUpload: (
	props: HandleFormUploadProps,
) => Promise<Record<string, any>> = async ({
	fields,
	form,
	endpoint,
	contentToSlug,
}) => {
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
			return "_id" in field && (field._id as string);
		});

	// Get all files to upload (and their limit, if need be)
	const filesToUpload: {
		id: string;
		file: any;
		maxWidth?: number;
		maxHeight?: number;
	}[] = [];
	for (const fileField of fileFields) {
		if (updatedForm[String(fileField)]) {
			// Find maxWidth and maxHeight of the image. Fields ids can be "id" or "_id"
			const field = fields.find((field) => {
				if (field.id) return field.id === fileField;
				return "_id" in field && field._id === fileField;
			});

			const maxWidth = field?.options?.fileConfig?.imageMaxWidth;
			const maxHeight = field?.options?.fileConfig?.imageMaxHeight;

			filesToUpload.push({
				id: String(fileField),
				file: updatedForm[String(fileField)],
				maxWidth: maxWidth,
				maxHeight: maxHeight,
			});
		}
	}

	if (filesToUpload.length === 0) {
		return updatedForm;
	}

	for (const { id, file, maxHeight, maxWidth } of filesToUpload) {
		// If file is a string, it's a URL, meaning it's already uploaded. Don't touch it.
		if (typeof file !== "string") {
			// Else, it's a file. Upload and get the download url
			const url = await uploadFileToStorage({
				file,
				endpoint,
				contentToSlug,
				fieldId: id,
				width: maxWidth,
				height: maxHeight,
			});

			// Update the form with the download url
			updatedForm[id] = url;
		}
	}

	return updatedForm;
};
