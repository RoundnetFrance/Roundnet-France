import { FC, Fragment } from "react";
import { getDocument } from "../../helpers/db";

import { Container, Typography } from "@mui/material";

import { GetStaticProps } from "next";
import Head from "../../components/head";
import {
	CTAFooter,
	DocumentHalfImage,
	Error,
	Hero,
	PageTitle,
} from "../../components/ui";
import { OfficialDocument } from "../../models/collections/OfficialDocs";

interface StatusPageProps {
	officialDoc: OfficialDocument | null;
	error?: string | null;
}

const StatusPage: FC<StatusPageProps> = ({ error, officialDoc }) => {
	return (
		<Fragment>
			<Head
				title="Statuts officiels de la fédération de France de Roundnet"
				description="La fédération est constituée de membres adhérents, qui sont les clubs de roundnet en France. Chaque année, les membres adhérents élisent un Conseil d’Administration (CA). "
			/>

			<Hero
				title="Statuts officiels"
				image="/images/hero/statuts.jpg"
				imagePosition="center 20%"
				mini
			/>

			<Container maxWidth="md" sx={{ my: { xs: 4, md: 12 } }}>
				<PageTitle title="Comment est constituée la fédération française de roundnet ?" />
				<Typography variant="body1" sx={{ mb: 2 }}>
					La fédération est constituée de membres adhérents, qui sont les clubs
					de roundnet en France. Chaque année, les membres adhérents élisent un
					Conseil d’Administration (CA). Le CA est composé de membres de
					plusieurs clubs, il est chargé de diriger la fédération, en lien
					direct avec les clubs et les joueurs et joueuses de France.
				</Typography>
				<Typography variant="body1" sx={{ mb: 2 }}>
					Le CA a un fonctionnement collégial, c’est à dire qu’il n’y a aucune
					hiérarchie, chaque membre a les mêmes droits et les mêmes devoirs que
					les autres. Chacun peut intervenir sur les sujets qu’il souhaite. Mais
					pour simplifier, il y a quand même des équipes spécialisées, car
					chaque membre a ses sujets de prédilection.
				</Typography>
				<Typography variant="body1" sx={{ mb: 2 }}>
					Les équipes sont :
				</Typography>
				<ul>
					<Typography component="li" variant="body1">
						Communauté
					</Typography>
					<Typography component="li" variant="body1">
						Communication
					</Typography>
					<Typography component="li" variant="body1">
						Compétition
					</Typography>
					<Typography component="li" variant="body1">
						Partenariats
					</Typography>
					<Typography component="li" variant="body1">
						Secrétariat
					</Typography>
					<Typography component="li" variant="body1">
						Trésorerie
					</Typography>
				</ul>
			</Container>

			{!error ? (
				<DocumentHalfImage
					document={officialDoc}
					title="Télécharger les statuts officiels 2021 de Roundnet"
					description="Roundnet France devient une fédération. Le conseil d'administration devient collégial."
					buttonText="Télécharger les statuts"
				/>
			) : (
				<Error message={error} />
			)}

			<CTAFooter
				title="Vous avez une question précise à nous demander ?"
				subtitle="Contactez-nous directement via le formulaire du site."
				mainLink={{
					url: "/qui-sommes-nous/contact",
					text: "Nous écrire",
				}}
			/>
		</Fragment>
	);
};

export const getStaticProps = (async () => {
	let officialDoc: OfficialDocument | null = null;
	let error: string | null = null;

	try {
		officialDoc = await getDocument<OfficialDocument>({
			collection: "official-docs",
			params: { doctype: "statuts" },
			sort: { _id: -1 },
		});
	} catch (e) {
		error = e.message ?? "Une erreur est survenue";
	}

	return {
		props: {
			officialDoc,
			error,
		},
		revalidate: 3600,
	};
}) satisfies GetStaticProps;

export default StatusPage;
