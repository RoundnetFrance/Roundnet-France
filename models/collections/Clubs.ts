export type Club = {
	_id: string;
	chip: string;
	clubCreated: string;
	description: string;
	image: string;
	referer?: string;
	title: string;
	validated: boolean;
	phone?: string;
	email?: string;
	players?: string;
	links: {
		source: string;
		url: string;
	}[];
};

export type ClubLogo = Pick<Club, "title" | "image">;
