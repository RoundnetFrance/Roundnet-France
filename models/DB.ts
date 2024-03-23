import type { Document, Filter, Sort } from "mongodb";

export type DocumentQueryParams<T> = {
	collection: string;
	params?: Filter<T>;
	fields?: Document;
	sort?: Sort;
	limit?: number;
};

export type FileDocument = {
	url: string;
	description: string;
	version: string;
	createdAt: string;
};
