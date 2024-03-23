export type DashboardElement = {
	_id: string;
	label: string;
	color?: "primary" | "secondary" | "neutralDark";
	icon: string;
	description: string;
	url: string;
};

export type AcccountMenuElement = {
	_id: string;
	label: string;
	icon: React.ReactNode;
	color?: "error";
};

export type AdminTableConfig = {
	name: string;
	tableHead: {
		_id: string;
		name: string;
		align?: "left" | "right" | "center";
		hidden?: boolean;
		editable?: boolean;
		image?: boolean;
		file?: boolean;
		date?: boolean;
		array?: boolean;
	}[];
	tableData: any[];
	endpoint: string;
	error: boolean;
	loading: boolean;
	deletable: boolean;
};

export type AdminSingleConfig = {
	title: string;
	tabs: {
		_id: string;
		name: string;
		description: string;
		layout: any[];
	}[];
	endpoint: string;
	adminEndpoint: string;
	frontEndpoint?: string;
	contentToSlug?: string;
};
