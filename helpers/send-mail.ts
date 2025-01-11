import type { Dispatch, SetStateAction } from "react";
import type { Form } from "./handle-form-submit";

// Send mail through SendGrid function
const sendMail = async (
	formData: Form,
	initialFormState: Form,
	setSubmitStatus: Dispatch<
		SetStateAction<{
			open: boolean;
			success?: boolean;
			error?: boolean;
			message: string;
		}>
	>,
	setForm: Dispatch<SetStateAction<Form>>,
	setErrors: Dispatch<SetStateAction<Form>>,
	setLoading: Dispatch<SetStateAction<boolean>>,
) => {
	try {
		const response = await fetch("/api/send-mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		// If response is not OK, throw error
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		// If everything is ok, return status of submission and reset form and errors
		const data = await response.json();
		setSubmitStatus({
			open: true,
			success: true,
			message: data.message,
		});
		setForm(initialFormState);
		setErrors(initialFormState);
	} catch (error) {
		// CATCH
		// Console log and set error message for UI
		setSubmitStatus({
			open: true,
			error: true,
			message:
				"Une erreur est survenue lors de l'envoi du mail. Merci de réessayer",
		});
	} finally {
		// In any case, set loading to false
		setLoading(false);
	}
};

export default sendMail;
