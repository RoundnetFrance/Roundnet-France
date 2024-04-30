import type { Document, Filter } from "mongodb";
import {
	getDocuments,
	getDocument,
	insertDocument,
	deleteDocument,
	patchDocument,
} from "../../helpers/db";
import type { User } from "../../models/collections/Users";
import type { DocumentQueryParams } from "../../models/DB";

// Get all users of the app
export async function getUsers(params: Filter<User>, fields?: Document) {
	const data = await getDocuments({
		collection: "users",
		params,
		fields,
	});
	return data;
}

// Get a single user
export async function getUser(params: Filter<User>, fields?: Document) {
	const data = await getDocument<User>({
		collection: "users",
		params,
		fields,
	});
	return data;
}

// Insert a new user
export async function insertUser(user: User) {
	const data = await insertDocument<User>({
		collection: "users",
		document: user,
	});
	return data;
}

// Patch a user
export async function patchUser(
	params: DocumentQueryParams<User>["params"],
	user: User,
) {
	const data = await patchDocument<User>({
		collection: "users",
		params,
		document: user,
	});
	return data;
}

// Delete a user
export async function deleteUser(params: DocumentQueryParams<User>["params"]) {
	const data = await deleteDocument<User>({ collection: "users", params });
	return data;
}
