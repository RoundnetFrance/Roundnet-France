import { FC, useMemo } from "react";
import { getFederationMemberFormConfig } from "../../contents/forms/form-federation-member-config";

import { FormBuilder } from "../form-builder";

interface CreateRFMemberFormProps {
	isAdmin?: boolean;
}

export const CreateRFMemberForm: FC<CreateRFMemberFormProps> = () => {
	const formConfig = useMemo(() => getFederationMemberFormConfig(), []);
	return <FormBuilder formConfig={formConfig} />;
};
