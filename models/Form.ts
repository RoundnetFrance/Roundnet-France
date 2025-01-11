export type ApiSchema = Record<string, any>;

export interface FormConfig {
	name: string;
	fields: FormField[];
	descriptionBefore?: string | JSX.Element;
	descriptionAfter?: string | JSX.Element;
	endpoint: string;
	sendNotification?: string;
	apiSchema?: ApiSchema;
	submitText?: string;
	contentToSlug?: string;
}

export interface FormField {
	// _id: string;
	id: string;
	label: string;
	type: FormType;
	value?: string | boolean | number | File;
	options?: FormOptions;
}

export interface FormOptions {
	dateConfig?: {
		disableFuture?: boolean;
		clearable?: boolean;
		openTo?: "year" | "month" | "day";
		views?: Array<"year" | "month" | "day">;
	};
	defaultChecked?: boolean;
	defaultValue?: string;
	dividerBottom?: boolean;
	fileConfig?: {
		type: "image" | "pdf";
		imageMaxWidth?: number;
		imageMaxHeight?: number;
	};
	helperText?: string;
	hidden?: boolean;
	maxLength?: number;
	multilineRows?: number;
	optional?: {
		parentText?: string;
		isChild?: boolean;
		isParent?: boolean;
		parent?: string;
	};
	parent?: string;
	passwordConfirm?: boolean;
	required?: boolean;
	selectValues?: FormSelectOption[];
}

export type FormSelectOption = {
	value: string;
	label: string;
	hide?: boolean;
	default?: boolean;
};

export type FormType =
	| "longtext"
	| "boolean"
	| "date"
	| "autocomplete"
	| "file"
	| "password"
	| "select"
	| "text"
	| "email"
	| "number"
	| "url"
	| "phone";
