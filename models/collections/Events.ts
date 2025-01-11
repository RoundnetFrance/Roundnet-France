export type Event = {
	_id: string;
	address: string;
	banner: string;
	beginnerFriendly: boolean;
	category: EventCategory;
	city: string;
	createdAt: string;
	date: string;
	dateEnd: string;
	description: string;
	field: string;
	format: string;
	image: string;
	inscriptionUrl: string;
	organization: string;
	participants: number;
	price: number;
	slug: string;
	title: string;
	type: string;
	validated: boolean;
};

export type EventCategory =
	| "other"
	| "indoor"
	| "grass"
	| "sand"
	| "turf"
	| "urban"
	| "2v2"
	| "3v3"
	| "mixed"
	| "male"
	| "female"
	| "nonMixed"
	| "free"
	| "mixed-non-mixed"
	| "cdf"
	| "cdfSquads"
	| "ric"
	| "open"
	| "worlds"
	| "europe"
	| "all"
	| "beginnerFriendly"
	| "noBeginner"
	| "tourStop"
	| "ets";

export type ListingEvent = Omit<
	Event,
	"price" | "inscriptionUrl" | "address" | "organization"
>;
