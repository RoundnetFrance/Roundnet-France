import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDocuments } from "../../helpers/db";

import SignUpOAuthForm from "../../components/admin/forms/signup-oauth-form";
import { GetStaticProps } from "next";
import { Club } from "../../models/collections/Clubs";

function SignUpPage({ clubs }) {
	const router = useRouter();

	const { query } = router;
	const hiddenFields = {
		name: query.name,
		email: query.email,
	};

	return (
		<Container maxWidth="sm">
			<SignUpOAuthForm clubs={clubs} hiddenFields={hiddenFields} />
		</Container>
	);
}

export default SignUpPage;

export const getStaticProps = (async () => {
	const clubs = await getDocuments<Pick<Club, "_id" | "title">>({
		collection: "clubs",
		fields: { _id: 1, title: 1 },
	});
	const clubsSelectValues = clubs.map((club) => ({
		value: club._id,
		label: club.title,
	}));
	return {
		props: {
			clubs: clubsSelectValues,
		},
	};
}) satisfies GetStaticProps;
