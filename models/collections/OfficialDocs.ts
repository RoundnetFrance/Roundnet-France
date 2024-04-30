export type DocType = "rules" | "cdf" | "statuts" | "ric" | "observers";

export type OfficialDocument = {
	_id: string;
	url: string;
	version: string;
	description: string;
	doctype: DocType;
	createdAt: string;
};
