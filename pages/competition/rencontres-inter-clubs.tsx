import { Fragment } from "react";
import { getDocument } from "../../helpers/db";

import { Container, Divider, Typography } from "@mui/material";

import Head from "../../components/head";
import {
	CTAFooter,
	DocumentHalfImage,
	FeaturedItems,
	HeaderWithIcon,
	Hero,
	InfoBlock,
	PageTitle,
} from "../../components/ui";

import { featuredRIC, infoRIC } from "../../contents/competition/";
import { OfficialDocument } from "../../models/collections/OfficialDocs";
import { GetStaticProps } from "next";

export default function TournamentsResultsPage({ document }) {
	return (
		<Fragment>
			<Head
				title="Rencontres inter-clubs - Roundnet France"
				description="Les rencontres inter-clubs représentent l'initiative de Roundnet France de se faire rencontrer les différents viviers de joueurs nationaux."
			/>

			<Hero
				title="Rencontres inter-clubs"
				image="/images/hero/results.jpg"
				imagePosition="center 80%"
				mini
			/>

			<Container maxWidth="md" sx={{ my: 4 }}>
				<PageTitle title="Le rendez-vous compétitif des clubs français" />
				<Typography variant="body1">
					Les rencontres inter-clubs représentent l&apos;initiative de Roundnet
					France de se faire rencontrer les différents viviers de joueurs
					nationaux.
				</Typography>

				<InfoBlock
					imageToLeft
					height={450}
					items={infoRIC}
					title="Comment se déroulent les rencontres inter-clubs ?"
					image="/images/pages/competition/inter-clubs/inter-club.jpg"
					description="Les clubs inscrivent une ou plusieurs équipes gratuitement auprès de la fédération. Chaque équipe est composée au maximum de 10 personnes, au minimum de 2 femmes et 4 hommes. Une rencontre est composée de 5 matchs en 2v2 : 1 femmes, 2 hommes et 2 mixtes. L’équipe qui a gagné le plus de matchs remporte la rencontre. Les clubs de la même région se mettent d’accord sur le lieu et la date de la rencontre sans intervention de la fédération. A la fin de la saison, les 2 premières équipes de chaque région sont qualifiées pour la phase finale qui se déroulera au dernier trimestre 2022, et désignera l’équipe championne de France."
				/>
			</Container>

			<Divider />

			<Container maxWidth="lg" sx={{ my: 4 }}>
				<HeaderWithIcon title="Les avantages du format" icon="help_center" />

				<FeaturedItems items={featuredRIC} />
			</Container>

			<Divider />

			<DocumentHalfImage
				document={document}
				title="Le document officiel des recontres inter-clubs"
				description="Le document officiel des rencontres inter-clubs est disponible en PDF pour connaître tous les détails de l'organisation de cette compétition."
				image="/images/pages/competition/inter-clubs/inter-club-regles.jpg"
			/>

			<CTAFooter
				title="Vous souhaitez participer aux rencontres inter-clubs ?"
				subtitle="Inscrivez votre club ou crééz votre équipe !"
				mainLink={{
					url: "https://docs.google.com/forms/d/e/1FAIpQLSfWm8xlQtrY-RoK2B-eB-gRN384btFC1IY2G0K2Wu9THa9xDQ/viewform",
					text: "Inscrivez votre club",
				}}
				altLink={{
					url: "/clubs-et-communautes/adherer-a-roundnet-france",
					text: "Adhérer à la Fédération",
				}}
			/>
		</Fragment>
	);
}

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
