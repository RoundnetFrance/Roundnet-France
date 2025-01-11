import Joi from "joi";
import type { ApiSchema, FormField } from "../../models/Form";
import { getNotificationData } from "./send-notification";

// * Helper functions
// Add a custom throw error
class InvalidForm {
	details: string;
	message: string;
	constructor({ message, details }) {
		this.message = message;
		this.details = details;
	}
}

// Transform apiSchema to match values from fields (value return of Joi)
interface MatchFormWithApiSchemaProps {
	formFields: FormField[];
	apiSchema: any;
}

function matchFormWithApiSchema({
	formFields,
	apiSchema,
}: MatchFormWithApiSchemaProps) {
	// Create a shallow copy to return to avoid mutating the original object
	const matchingValueForApi = { ...apiSchema };

	// We loop over apiSchema to match formFields into API Schema validation
	for (const key in matchingValueForApi) {
		const expectedValue = matchingValueForApi[key];

		// If value of key is a string, simple process
		if (typeof expectedValue === "string") {
			matchingValueForApi[key] = formFields[expectedValue];
		}
		// Else, has to build an array of elements
		else {
			const arrayElement: Record<string, any>[] = [];

			// For every element of the array, we construct a new object in an array of elements
			for (const field of expectedValue) {
				// Get the key name of first key to display it dynamically
				const keyName = Object.keys(field)[0];

				// Construct and push the new object
				arrayElement.push({
					[keyName]: field[keyName],
					[field.key]: formFields[field[keyName]],
				});
			}

			matchingValueForApi[key] = arrayElement;
		}
	}

	// Return
	return matchingValueForApi;
}

// * Build a dynamic schema for Joi based on the fields definition in formConfig (or any array of objects that matches that structure)
function schemaConstructor(fields: FormField[]) {
	const schemaKeys = {};
	fields.forEach((field) => {
		const { id, type, options } = field;

		// Define the global type via switch
		switch (type) {
			case "email":
				schemaKeys[id] = Joi.string().email({ tlds: { allow: false } });
				break;

			case "number":
				schemaKeys[id] = Joi.number();
				break;

			case "file": {
				schemaKeys[id] = Joi.object();
				break;
			}

			case "date":
				schemaKeys[id] = Joi.date();
				break;

			case "password":
				schemaKeys[id] = Joi.string().min(6);
				break;

			case "url":
				schemaKeys[id] = Joi.string().trim().uri();
				break;

			case "phone":
				schemaKeys[id] = Joi.string()
					.length(10)
					.pattern(/^[0-9]+$/);
				break;

			case "boolean":
				schemaKeys[id] = Joi.boolean();
				break;

			// Defaults to a regular string (text/longtext/select)
			default:
				schemaKeys[id] = Joi.string().trim();
		}

		// If options.maxLength is defined, we add a max length validator
		if (options?.maxLength) {
			schemaKeys[id] = schemaKeys[id].max(options.maxLength);
		}

		// If passwordConfirm, passwordConfirm must match password
		if (options?.passwordConfirm) {
			schemaKeys[id] = Joi.any().valid(Joi.ref("password"));
		}

		// If required, add the required property to the schema. Else, allow empty string, as it is the default value for all inputs
		if (options?.required) {
			schemaKeys[id] = schemaKeys[id].required();
		} else {
			schemaKeys[id] = schemaKeys[id].allow("");
		}
	});

	return Joi.object().keys(schemaKeys);
}

// * Handle formBuilder initialState builder
export function getInitialState(fields: FormField[], getInitialErrors = false) {
	// Returns an object with form ids and void values (empty strings for inputs, false for error handling)
	return fields.reduce((acc, curr) => {
		// Only case where we want to set the value to (not) void is the default value for a select for getInitialState
		if (!getInitialErrors && curr.type === "select") {
			const optionDefault = curr.options?.selectValues?.find(
				(option) => option.default,
			);
			const defaultValue = optionDefault?.value;
			return {
				...acc,
				[curr.id]: defaultValue,
			};
		}

		// In case of boolean
		if (curr.type === "boolean") {
			return {
				...acc,
				[curr.id]: curr.options?.defaultChecked || false,
			};
		}

		let value = "";
		// Populate specific values
		if (!getInitialErrors && curr.options?.defaultValue) {
			value = curr.options?.defaultValue || "";
		}

		// Returns false for errors, empty string for inputs
		return {
			...acc,
			[curr.id]: getInitialErrors ? false : value,
		};
	}, {});
}

// * Handle form validation. Requires raw form values and fields definition from formConfig. Uses schemaConstructor() to generate the schema and validates it with Joi against the form values. If error, returns an custom InvalidForm throw. If valid, return fields. Can alter fields to match an API schema if apiSchema is provided.
interface ValidateFormProps {
	form: Record<string, any>;
	fields: FormField[];
	initialFormErrors: Record<string, any>;
	apiSchema?: ApiSchema;
}

export function validateForm({
	form,
	fields,
	initialFormErrors,
	apiSchema,
}: ValidateFormProps) {
	// Dynamic constructor of the Joi schema (reading tableConfig.fields for info)
	const schema = schemaConstructor(fields);

	// Validate the form
	const { error, value } = schema.validate(form, {
		abortEarly: false,
		errors: {
			label: false,
		},
		messages: {
			"any.required": "Ce champ est requis",
			"string.empty": "Ce champ est requis",
			"string.email": "Ce champ doit être une adresse email valide",
			"string.min": "Ce champ doit contenir au moins 6 caractères",
			"string.uri": "Ce champ doit être une URL valide",
			"date.base": "Ce champ doit être une date valide",
			"object.base": "Ce champ doit être un fichier valide",
			"any.only": "Les mots de passe ne correspondent pas",
			"*": "Ce champ est invalide",
		},
	});

	if (error) {
		// If error, return an custom InvalidForm throw with an adapted details object (key: message). Uses initialFormErrors to populate errors.
		const details = initialFormErrors;
		error.details.forEach(({ context, message }) => {
			if (context?.key) details[context?.key] = message;
		});

		// Throw the custom error (see InvalidForm class)
		throw new InvalidForm({
			message: "Le formulaire comporte des erreurs.",
			details,
		});
	}

	// If no apiSchema is provided, it means that original form fields are already adapted to API Schema. Return the raw form values.
	if (!apiSchema) {
		return value;
	}

	// If apiSchema is defined, validate the form against the apiSchema
	try {
		const apiValue = matchFormWithApiSchema({
			formFields: value,
			apiSchema,
		});
		return apiValue;
	} catch (error) {
		throw new Error(
			"Une erreur est survenue au moment de la traduction des données du formulaire vers le serveur.",
		);
	}
}

// * Handles form validation for the server/API. Requires a definite schema and values that should be validated against it. Uses Joi to validate the values against the schema. If error, returns an custom InvalidForm throw. If valid, return fields. Can alter fields to match an API schema if apiSchema is provided.
interface ValidateAPIProps {
	data: Record<string, any>;
	schema: Joi.ObjectSchema | Joi.AnySchema;
}

export function validateAPI({ data, schema }: ValidateAPIProps) {
	if (!data) {
		throw new Error("Aucune donnée reçue.");
	}

	// Validate the data
	const { error, value } = schema.validate(data, {
		abortEarly: false,
	});

	if (error) {
		// Get all keys where there is an error
		const listOfErrorKeys = error.details.map(({ path }) => path);
		// Stringify the list of keys
		const errorKeysString = listOfErrorKeys.join(", ");
		// Throw explicit error
		throw new Error(`These keys are invalid :${errorKeysString}`);
	}

	return value;
}

// * Handle form submission. Requires the endpoint and definitive values.
interface SubmitFormProps {
	endpoint: string;
	values: Record<string, any>;
	sendNotification?: string;
}

export async function submitForm({
	endpoint,
	values,
	sendNotification,
}: SubmitFormProps) {
	// Get rid of empty values
	const data = Object.entries(values).reduce((acc, [key, value]) => {
		if (value !== undefined && value !== "") {
			return {
				...acc,
				[key]: value,
			};
		}
		return acc;
	}, {});

	// Fetch the endpoint.
	const response = await fetch(`/api/${endpoint}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ data }),
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	// If all sendNotification is true, send a notification to the user
	if (sendNotification) {
		try {
			await fetch("/api/send-mail/send-notification", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(
					getNotificationData({
						type: sendNotification,
						data,
					}),
				),
			});

			// Catch doesn't actually kill the process, but informs in case of malfunction
		} catch (error) {
			console.log(error);
		}
	}

	// Return response
	return response;
}
