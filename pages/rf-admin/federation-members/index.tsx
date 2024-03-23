import useEvents from "../../../hooks/use-federation-members";

import { Container } from "@mui/material";

import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import { PageTitle } from "../../../components/ui";
import { AdminContent } from "../../../components/admin/admin-content";
import { CreateRFMemberForm } from "../../../components/forms/create-federation-member-form";
import type { GetStaticProps } from "next/types";

export default function RFMembersAdminPage() {
	// Get events info
	const { members, isLoading, isError } = useEvents();

	const config = {
		name: "administrators",
		listProps: {
			title: "title",
			subtitle: "description",
			image: "image",
		},
		data: members,
		endpoint: "federation-members",
		isLoading: isLoading,
		isError: isError,
	};

	return (
		<DashboardWrapper>
			<Container maxWidth="lg">
				<PageTitle title="Liste des membres de l'équipe roundnet France" />
			</Container>
			<AdminContent config={config} form={<CreateRFMemberForm isAdmin />} />
		</DashboardWrapper>
	);
}

RFMembersAdminPage.auth = {
	role: "superadmin",
};

export const getStaticProps = (() => {
	return {
		props: {
			adminLayout: true,
		},
	};
}) satisfies GetStaticProps;
