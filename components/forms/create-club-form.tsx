import { FC, useMemo } from "react";
import { getClubFormConfig } from "../../contents/forms/form-club-config";

import { FormBuilder } from "../../components/form-builder";

export const CreateClubForm: FC = () => {
	const formConfig = useMemo(() => getClubFormConfig(), []);
	return <FormBuilder formConfig={formConfig} />;
};
