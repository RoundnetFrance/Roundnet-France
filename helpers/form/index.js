import Joi from 'joi';

// Add a custom throw error
class InvalidForm {
  constructor({ message, details }) {
    this.message = message;
    this.details = details;
  }
}

// * Build a dynamic schema for Joi based on the fields definition in formConfig (or any array of objects that matches that structure)
function schemaConstructor(fields) {
  const schemaKeys = {};
  fields.forEach((field) => {
    const { id, type, options } = field;

    // Define the global type via switch
    switch (type) {
      case 'email':
        schemaKeys[id] = Joi.string().email({ tlds: { allow: false } });
        break;

      case 'date':
        schemaKeys[id] = Joi.date();
        break;

      case 'password':
        schemaKeys[id] = Joi.string().min(6);
        break;

      case 'url':
        schemaKeys[id] = Joi.string().trim().uri();
        break;

      // Defaults to a regular string (text/longtext)
      default:
        schemaKeys[id] = Joi.string().trim();
    }
    // If required, add the required property to the schema. Else, allow empty string, as it is the default value for all inputs
    if (options?.required) {
      schemaKeys[id] = schemaKeys[id].required();
    }
    else {
      schemaKeys[id] = schemaKeys[id].allow('');
    }
  });

  return Joi.object().keys(schemaKeys);
}

// * Handle form validation. Requires raw form alues and fields definition from formConfig. Uses schemaConstructor() to generate the schema and validates it with Joi against the form values. If error, returns an custom InvalidForm throw. If valid, return fields.
export function validateForm({ form, fields, initialFormErrors }) {
  // Dynamic constructor of the Joi schema (reading tableConfig.fields for info)
  const schema = schemaConstructor(fields);

  // Validate the form
  const { error, value } = schema.validate(form, {
    abortEarly: false,
  });

  if (error) {
    // If error, return an custom InvalidForm throw with an adapted details object (key: message). Uses initialFormErrors to populate errors.
    const details = initialFormErrors;
    error.details.forEach(({ context, message }) => {
      details[context.key] = message;
    });

    // Throw the custom error (see InvalidForm class)
    throw new InvalidForm({ message: 'Le formulaire comporte des erreurs.', details });
    // throw new Error(error.details.length > 1 ? 'Plusieurs champs sont invalides' : error.details[0].message);
  }

  return value;
}

export function validateAPIForm({ form, schema }) {
  // Validate the form
  const { error, value } = schema.validate(form, {
    abortEarly: false,
  });


  if (error) {
    // Get all keys where there is an error
    const listOfErrorKeys = error.details.map(({ context }) => context.key);
    // Stringify the list of keys
    const errorKeysString = listOfErrorKeys.join(', ');
    // Throw explicit error
    throw new Error('These keys are invalid :' + errorKeysString);
  }

  return value;
}

// * Handle form submission. Requires the endpoint and definitive values.
export async function submitForm({
  endpoint,
  values,
}) {

  // Get rid of empty values
  const data = Object.entries(values).reduce((acc, [key, value]) => {
    if (value) {
      return {
        ...acc,
        [key]: value,
      };
    }

    return acc;
  }, {});

  // Fetch the endpoint
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
      formBuilder: true,
    }),
  });
  return response;
}