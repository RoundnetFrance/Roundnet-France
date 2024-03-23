import { FC, Fragment } from "react";
import { getDocuments } from "../../helpers/db";

import { Box, Container, Typography } from "@mui/material";

import Head from "../../components/head";
import {
	CrossingItems,
	Error,
	HeaderWithIcon,
	Hero,
	PageTitle,
} from "../../components/ui";
import { GetStaticProps } from "next";

interface TeamPageProps {
	members: any[];
	error?: boolean;
}

const TeamPage: FC<TeamPageProps> = ({ members, error }) => {
	return (
		<Fragment>
			<Head
				title="Les membres du bureau - Fédération Française de Roundnet"
				description="Retrouvez tous les membres du bureau de la Fédération Française de Roundnet."
			/>

			<Hero
				title="L'équipe Roundnet France"
				image="/images/hero/equipe-roundnet-france.jpg"
				imagePosition="center 45%"
				mini
			/>

			<Container maxWidth="md" sx={{ my: 4 }}>
				<PageTitle title="Découvrez celles et ceux qui font la fédération" />
				<Typography variant="body1" sx={{ pb: 4 }}></Typography>

				<Box mb={4}>
					<HeaderWithIcon
						icon="workspaces"
						title="C'est qui, Roundnet France ?"
					/>
				</Box>
			</Container>

			<Container maxWidth="sm" sx={{ my: 8 }}>
				{error ? <Error /> : <CrossingItems items={members} roundedItems />}
			</Container>
		</Fragment>
	);
};

export const getStaticProps = (async () => {
	let members: any[] | null = null;
	let error: string | null = null;

	try {
		members = await getDocuments<any>({
			collection: "members",
		});
	} catch (e) {
		error = e.message ?? "Une erreur est survenue";
	}

	return {
		props: {
			error,
			members,
		},
		revalidate: 60,
	};
}) satisfies GetStaticProps;

export default TeamPage;
