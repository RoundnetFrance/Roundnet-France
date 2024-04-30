export type PlanningRow = {
	_id: string;
	organization: string;
	place: string;
	date: string;
	players: number;
	price: number;
	results?: {
		position: number;
		teamName: string;
		players: string;
		points: number;
	}[];
};
