export type MenuItem = {
	name: string;
	url?: string;
	slug: string;
	icon?: string;
	subElements?: Pick<MenuItem, "name" | "url">[];
	dividerTop?: boolean;
	dividerBottom?: boolean;
};
