// Send mail through SendGrid function
import sendMail from "./send-mail";
import type { Dispatch, SetStateAction } from "react";

export type Form = Record<string, any>;

// Trim inputs function
const trimInputs = (form: Form) => {
	const trimmedForm: Form = {};
	for (const key of Object.keys(form)) {
		if (key === "password" || key === "passwordConfirm") {
			trimmedForm[key] = form[key];
		}
		trimmedForm[key] = form[key].trim();
	}
	return trimmedForm;
};

// Get initial form state
const getInitialFormState = (form: Form) => {
	const initialFormState: Form = {};
	for (const key of Object.keys(form)) {
		initialFormState[key] = "";
	}
	return initialFormState;
};

// Specific email validation by Regex function
import { validateEmail } from "./validate-email";

// Validation inputs function
function validateInputs(
	formData: Form,
	initialFormState: Form,
	requiredFields: string[],
) {
	const errors = initialFormState;

	// For each formData input, check if empty
	Object.keys(formData).forEach((key) => {
		if (
			(!formData[key] || formData[key] === "") &&
			requiredFields.includes(key)
		) {
			errors[key] = "Ce champ est requis";
		}
	});

	// If formData input is an email, check if valid by Regex
	let emailValid: boolean;
	if (formData.email) {
		emailValid = !!validateEmail(formData.email);
		if (!emailValid) {
			errors.email = "L'email n'est pas valide";
		}
	}

	// If formData input is a password, check if valid by length and if it matches passwordConfirm
	let passwordValid: boolean;
	if (formData.password) {
		// Check if password is valid by length
		passwordValid = formData.password.length >= 6;
		if (!passwordValid) {
			errors.password =
				"Le mot de passe n'est pas valide. Il doit faire plus de 6 caractères.";
		}

		// Check if it matches password
		if (formData.password !== formData.passwordConfirm) {
			errors.passwordConfirm = "Les mots de passe ne correspondent pas";
		}
	}

	// Return errors
	return errors;
}

// throwError function for invalid inputs
function InvalidFormInput({ message, input }) {
	this.message = message;
	this.input = input;
	this.invalidFormInput = true;
}

interface HandleFormSubmitProps {
	setLoading: Dispatch<SetStateAction<boolean>>;
	setErrors: Dispatch<SetStateAction<Form>>;
	setForm: Dispatch<SetStateAction<Form>>;
	setSubmitStatus: Dispatch<
		SetStateAction<{
			open: boolean;
			success?: boolean;
			error?: boolean;
			message: string;
		}>
	>;
	form: Form;
	errors: Form;
	url: string;
	requiredFields: string[];
}

export default async function handleFormSubmit({
	setLoading,
	setErrors,
	setForm,
	setSubmitStatus,
	form,
	errors,
	url,
	requiredFields,
}: HandleFormSubmitProps) {
	// Set loading to true
	setLoading((prevLoading) => !prevLoading);

	// Get initial form state
	const initialFormState = getInitialFormState(form);
	// Trim inputs if need be
	const formData = trimInputs(form);

	// Check if all errors are empty strings
	const validationErrors = validateInputs(
		form,
		initialFormState,
		requiredFields,
	);
	const isValid = Object.values(validationErrors).every(
		(error) => error === "",
	);
	if (!isValid) {
		setErrors(validationErrors);
		setLoading((prevLoading) => !prevLoading);
		return;
	}

	// If ok, proceed to send API request (mail or API call)
	// If mail, send mail through SendGrid function
	if (url === "mail") {
		await sendMail(
			formData,
			initialFormState,
			setSubmitStatus,
			setForm,
			setErrors,
			setLoading,
		);
		return;
	}

	// If API call, send API request through fetch function
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		const data = await response.json();

		// If response is not OK, throw error
		if (!response.ok) {
			// In specific case of invalid input data
			if (response.status === 422) throw new InvalidFormInput(data);

			throw new Error(data.message || response.statusText);
		}

		// If everything is ok, return status of submission and reset form and errors
		setSubmitStatus({
			open: true,
			success: true,
			message: data.message,
		});
		setForm(initialFormState);
		setErrors(initialFormState);
		// End of try
	} catch (error) {
		// Catch if errors
		// Console log and set error message for UI
		console.error(error);

		// If error is an InvalidFormInput, set specific error message
		if (error.invalidFormInput) {
			setErrors({
				...errors,
				[error.input]: error.message,
			});
			return;
		}

		setSubmitStatus({
			open: true,
			error: true,
			message: error.message || "Une erreur est survenue. Merci de réessayer.",
		});
	} finally {
		setLoading(false);
	}
}
