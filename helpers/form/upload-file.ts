import storage from "../../lib/init-firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { resizeImage } from "../../helpers/resize-image";
import createSlug from "../slug-creator";

interface UploadFileToStorageProps {
	file: File;
	endpoint: string;
	contentToSlug?: string;
	fieldId: string;
	handleStateChange?: (snapshot: any) => void;
	width?: number;
	height?: number;
}

export const uploadFileToStorage: (
	props: UploadFileToStorageProps,
) => Promise<string> = async ({
	file,
	endpoint,
	contentToSlug,
	fieldId,
	handleStateChange = () => {},
	width = 1800,
	height,
}) => {
	// Check if file is an image  (type with? to avoid errors on file = URL)
	const isImage = file.type?.startsWith("image/");

	// Resize image to maxWidth of specified imageMaxWidth (defaults to 1800px)
	if (isImage) {
		try {
			file = await resizeImage({
				file,
				width,
				height,
			});
		} catch (err) {
			console.log(err);
			throw new Error(
				"Une erreur est survenue lors du traitement de l'image. Veuillez essayer avec une autre image ou un autre navigateur.",
			);
		}
	}

	// Create a Promise to return upload and return url
	return new Promise((resolve, reject) => {
		// Prepare storage ref and upload task
		const fileId = contentToSlug
			? createSlug(contentToSlug)
			: Math.random().toString(36).substring(2, 7);

		// Get current year and month under the format YY-MM
		const fileSlug = `${fileId}-${fieldId}-${file.name}`;

		const filename = fileSlug;
		const storageRef = ref(storage, `${endpoint}/${filename}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		// Handle loading, error and success
		uploadTask.on(
			"state_changed",
			handleStateChange,
			// Handle error
			(error) => {
				reject(error);
			},
			// Handle success
			async () => {
				const url = await getDownloadURL(uploadTask.snapshot.ref);
				return resolve(url);
			},
		);
	});
};
