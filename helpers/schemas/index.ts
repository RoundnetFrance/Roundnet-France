import Joi from "joi";

type SchemaRefProps =
	| "club"
	| "event"
	| "rule"
	| "official-docs"
	| "federation-members"
	| "partners";

export default function getSchema(schemaRef: SchemaRefProps) {
	let schema: Joi.ObjectSchema | Joi.AnySchema = null;

	switch (schemaRef) {
		case "club":
			schema = Joi.object({
				image: Joi.string().uri().required(),
				title: Joi.string().trim().required(),
				chip: Joi.string().trim().required(),
				description: Joi.string().trim().required(),
				clubCreated: Joi.date().allow(""),
				referer: Joi.string().trim().required(),
				email: Joi.string()
					.trim()
					.email({ tlds: { allow: false } })
					.required(),
				phone: Joi.string()
					.trim()
					.length(10)
					.pattern(/^[0-9]+$/)
					.required(),
				players: Joi.string().trim().allow(""),
				links: Joi.array().items(
					Joi.object({
						source: Joi.string().trim().required(),
						url: Joi.string().trim().uri().allow(""),
					}),
				),
				discord: Joi.string().trim().allow(""),
			});
			break;

		case "event":
			schema = Joi.object({
				image: Joi.string().uri().allow(""),
				banner: Joi.string().uri().allow(""),
				slug: Joi.string().trim().required(),
				title: Joi.string().trim().max(80).required(),
				city: Joi.string().trim().required(),
				address: Joi.string().trim().allow(""),
				date: Joi.date().required(),
				dateEnd: Joi.date().allow(""),
				organization: Joi.string().trim().allow(""),
				description: Joi.string().trim().required(),
				participants: Joi.number().required(),
				field: Joi.string().trim().required(),
				format: Joi.string().trim().required(),
				category: Joi.string().trim().required(),
				type: Joi.string().trim().required(),
				inscriptionUrl: Joi.string().trim().uri().required(),
				beginnerFriendly: Joi.boolean().required(),
				price: Joi.number().allow(""),
				createdAt: Joi.date().required(),
			});
			break;

		case "rule":
			schema = Joi.object({
				url: Joi.string().uri().required(),
				version: Joi.string().trim().required(),
				description: Joi.string().trim(),
			});
			break;

		case "official-docs":
			schema = Joi.object({
				url: Joi.string().uri().required(),
				version: Joi.string().trim().required(),
				description: Joi.string().trim(),
				doctype: Joi.string().trim().allow(""),
			});
			break;

		case "federation-members":
			schema = Joi.object({
				title: Joi.string().trim().required(),
				chip: Joi.string().trim().required(),
				image: Joi.string().uri().required(),
				description: Joi.string().trim().required(),
			});
			break;

		case "partners":
			schema = Joi.object({
				title: Joi.string().trim().required(),
				description: Joi.string().trim().required(),
				image: Joi.string().uri().required(),
				links: Joi.string().trim().uri().allow(""),
			});
			break;

		default:
			schema = Joi.any();
			break;
	}

	return schema;
}
