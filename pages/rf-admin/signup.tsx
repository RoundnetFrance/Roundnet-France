import Container from "@mui/material/Container";
import { getDocuments } from "../../helpers/db";

import { GetStaticProps } from "next";
import { FC } from "react";
import SignUpForm from "../../components/admin/forms/signup-form";
import { FormSelectOption } from "../../models/Form";
import { Club } from "../../models/collections/Clubs";

interface SignUpPageProps {
	clubs: FormSelectOption[];
}

const SignUpPage: FC<SignUpPageProps> = ({ clubs }) => {
	return (
		<Container maxWidth="sm">
			<SignUpForm clubs={clubs} />
		</Container>
	);
};

export default SignUpPage;

export const getStaticProps = (async () => {
	const clubs = await getDocuments<Pick<Club, "_id" | "title">>({
		collection: "clubs",
		fields: { _id: 1, title: 1 },
	});
	const clubsSelectValues: FormSelectOption[] = clubs.map((club) => ({
		value: club._id,
		label: club.title,
	}));
	return {
		props: {
			clubs: clubsSelectValues,
		},
	};
}) satisfies GetStaticProps;
