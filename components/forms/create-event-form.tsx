import { type FC, useMemo } from "react";
import { getEventFormConfig } from "../../contents/forms/form-event-config";

import { FormBuilder } from "../form-builder";

interface CreateEventFormProps {
	isAdmin?: boolean;
}

export const CreateEventForm: FC<CreateEventFormProps> = ({ isAdmin }) => {
	const formConfig = useMemo(() => getEventFormConfig(isAdmin), [isAdmin]);
	return <FormBuilder formConfig={formConfig} />;
};
