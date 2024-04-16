import clientPromise from "../../lib/mongodb";
import type { DocumentQueryParams } from "../../models/DB";
import type { Document } from "mongodb";

// Get all documents from a mongoDB collection
export const getDocuments: <T>(params: DocumentQueryParams<T>) => Promise<T[]> =
	async ({ collection, params, fields, sort, limit }) => {
		try {
			const client = await clientPromise;
			const db = client.db();
			const documents = await db
				.collection(collection)
				.find(params ?? {})
				.project(fields ?? {})
				.sort(sort ?? {})
				.limit(limit ?? 0)
				.toArray();

			// Clean the _id field from the documents
			return JSON.parse(JSON.stringify(documents));
		} catch (error) {
			return error.message ?? "An error occurred while fetching the documents.";
		}
	};

// Get a single document from a mongoDB collection
export const getDocument: <T>(
	params: Omit<DocumentQueryParams<T>, "limit">,
) => Promise<T> = async ({ collection, params, fields, sort }) => {
	try {
		const client = await clientPromise;
		const db = client.db();
		const document = await db
			.collection(collection)
			.findOne(params ?? {}, { projection: fields, sort: sort || { _id: -1 } });

		// Clean the _id field from the documents
		return JSON.parse(JSON.stringify(document));
	} catch (error) {
		return error.message ?? "An error occurred while fetching the document.";
	}
};

// Insert a new document into a mongoDB collection
export const insertDocument = async <T>({
	collection,
	document,
}: Pick<DocumentQueryParams<T>, "collection"> & {
	document: Document;
}) => {
	try {
		const client = await clientPromise;
		const db = client.db();
		const result = await db.collection(collection).insertOne(document);
		return result;
	} catch (error) {
		return error.message ?? "An error occurred while inserting the document.";
	}
};

// Patch a document into a mongoDB collection
export const patchDocument = async <T>({
	collection,
	params,
	document,
}: Pick<DocumentQueryParams<T>, "collection" | "params"> & {
	document: Document;
}) => {
	try {
		const client = await clientPromise;
		const db = client.db();
		const result = await db
			.collection(collection)
			.updateOne(params ?? {}, { $set: document });
		return result;
	} catch (error) {
		return error.message ?? "An error occurred while updating the document.";
	}
};

// Delete a document from a mongoDB collection
export const deleteDocument = async <T>({
	collection,
	params,
}: Pick<DocumentQueryParams<T>, "collection" | "params">) => {
	try {
		const client = await clientPromise;
		const db = client.db();
		const result = await db.collection(collection).deleteOne(params ?? {});

		return result;
	} catch (error) {
		return error.message ?? "An error occurred while deleting the document.";
	}
};
