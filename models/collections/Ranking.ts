export interface Ranking2022 {
	rank: number;
	teamname: string;
	player1name: string;
	player2name: string;
	points: number;
}

export interface Ranking2024 {
	ranking: {
		"Rank Open": Ranking[];
		"Rank Women": Ranking[];
		"Rank Coed": Ranking[];
	};
	date: string;
}

export interface Ranking {
	Rang: number;
	rank?: number;
	Points: number;
	RFID: string;
	Prénom: string;
	Nom: string;
	Club: string;
	Baguette?: string;
	Pro?: string;
	Mtp: number;
	Bdx: number;
	Lyon: number;
	Rennes: number;
	Paris: number;
}
