import { FC, Fragment } from "react";
import { getDocument } from "../../helpers/db";

import { Container, Divider, Typography } from "@mui/material";
import { OfficialDocument } from "../../models/collections/OfficialDocs";

import Head from "../../components/head";
import {
	DocumentHalfImage,
	FeaturedItems,
	Error,
	HeaderWithIcon,
	Hero,
	InfoBlock,
	PageTitle,
} from "../../components/ui";

import { featuredRIC, infoRIC } from "../../contents/competition";
import { GetStaticProps } from "next";

interface TournamentsResultsPageProps {
	document: OfficialDocument | null;
	error: string | null;
}

const TournamentsResultsPage: FC<TournamentsResultsPageProps> = ({
	document,
	error,
}) => {
	return (
		<Fragment>
			<Head
				title="Championnat de France des clubs - Roundnet France"
				description="La Championnat de France des clubs"
			/>
			<Hero
				title="Championnat de France des clubs"
				image="/images/hero/results.jpg"
				imagePosition="center 80%"
				mini
			/>
			<Container maxWidth="md" sx={{ my: 4 }}>
				<PageTitle title="Le rendez-vous compétitif des clubs français" />
				<Typography variant="body1">
					Le championnat de France des clubs représente l&apos;initiative de
					Roundnet France de se faire rencontrer les différents viviers de
					joueurs nationaux.
				</Typography>

				<InfoBlock
					imageToLeft
					height={450}
					items={infoRIC}
					title="Comment se déroule le championnat de France des clubs ?"
					image="/images/pages/competition/inter-clubs/inter-club.jpg"
					description="Des squads représentant les clubs français s'affronteront afin de déterminer le meilleur club français. Retrouvez toutes les informations dans le document en bas de page."
				/>
			</Container>
			<Divider />
			<Container maxWidth="lg" sx={{ my: 4 }}>
				<HeaderWithIcon title="Les avantages du format" icon="help_center" />

				<FeaturedItems items={featuredRIC} />
			</Container>
			<Divider />
			{document ? (
				<DocumentHalfImage
					document={document}
					title="Le document officiel du Championnat de France des clubs"
					description="Le document officiel du Championnat de France des clubs est disponible en PDF pour connaître tous les détails de l'organisation de cette compétition."
					image="/images/pages/competition/inter-clubs/inter-club-regles.jpg"
				/>
			) : (
				<Error message={error} />
			)}
		</Fragment>
	);
};

export default TournamentsResultsPage;

export const getStaticProps = (async () => {
	let error: string | null = null;
	let document: OfficialDocument | null = null;

	try {
		document = await getDocument<OfficialDocument>({
			collection: "official-docs",
			params: { doctype: "ric" },
			sort: { _id: -1 },
		});
	} catch (err) {
		error = err.message;
	}

	return {
		props: {
			document,
			error,
		},
		revalidate: 3600,
	};
}) satisfies GetStaticProps;
