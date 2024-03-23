import { FC, Fragment } from "react";
import { getDocument } from "../../helpers/db";

import { Container, Typography } from "@mui/material";

import { Hero, PageTitle, DocumentHalfImage, Error } from "../../components/ui";
import Head from "../../components/head";
import { OfficialDocument } from "../../models/collections/OfficialDocs";

interface NationalRankingPageProps {
	document: OfficialDocument | null;
	error: string | null;
}

const NationalRankingPage: FC<NationalRankingPageProps> = ({
	document,
	error,
}) => {
	return (
		<Fragment>
			<Head
				title="Coupe de France de roundnet 2023 - Roundnet France"
				description="Les tournois en France sont régulièrement annoncés sur les réseaux sociaux Facebook et Instagram."
			/>

			<Hero
				title="Coupe de France"
				image="/images/hero/classement-national.jpg"
				mini
			/>
			<Container maxWidth="md" sx={{ mt: 4 }}>
				<PageTitle title="Le tournoi immanquable du roundnet français" />
				<Typography align="left" variant="body1" sx={{ my: 2 }}>
					Le tournoi de la Coupe de France de Roundnet est le plus grand tournoi
					qui se déroule sur le territoire français. Avec 5 dates, des centaines
					de joueuses et de joueurs parmi le gratin de l&apos;hexagone,
					c&apos;est l&apos;événement à ne surtout pas manquer de la saison !
				</Typography>
			</Container>

			<Container maxWidth="md" sx={{ my: 8 }}>
				{/* <InfoBlock
          // imageToLeft
          height={450}
          items={infoCDF}
          title="Comment se déroule la Coupe de France de roundnet ?"
          image="/images/pages/competition/coupe-de-france/coupe-de-france-roundnet.jpg"
          description={[
            "La coupe de France est le format classique de la compétition : des équipes de 2 joueurs s’affrontent dans les 3 catégories : femmes, open, mixtes.",
            "La coupe de France est composée, de :",
          ]}
        /> */}

				{/* <Box textAlign="center" mt={8}>
          <Link
            href="https://docs.google.com/spreadsheets/d/17SMHWKT9j3coeA8te2TbB0td11AwuHUV1jf9c9wNxtI/edit?usp=sharing"
            color="#fff"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<ArrowForwardIcon />}
            >
              Consulter le classement
            </Button>
          </Link>
        </Box> */}
			</Container>

			{!error ? (
				<DocumentHalfImage
					title="Le règlement complet de la Coupe de France"
					description="Pour tout savoir des formats, des points et des différentes spécificités de la coupe de France de roundnet, vous pouvez télécharger le document PDF ci-dessous."
					document={document}
					image="/images/pages/competition/coupe-de-france/coupe-de-france-regles.jpg"
				/>
			) : (
				<Error message={error} />
			)}

			{/* <Container maxWidth="md" sx={{ my: 6 }}>
        <HeaderWithIcon
          title="Cette année, la coupe de France servira à la qualification des équipes qui représenteront la France lors des Worlds (septembre 2022 en Belgique)."
          icon="info"
        />
        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Button
            size="large"
            variant="contained"
            sx={{ width: "fit-content" }}
            href="https://www.helloasso.com/associations/roundnet-france/evenements/inscription-equipe-coupe-de-france"
            target="_blank"
          >
            Inscription Coupe de France
          </Button>
        </Stack>
      </Container> */}
		</Fragment>
	);
};

export default NationalRankingPage;

export async function getStaticProps() {
	let document: OfficialDocument | null = null;
	let error: string | null = null;

	try {
		document = await getDocument<OfficialDocument>({
			collection: "official-docs",
			params: { doctype: "cdf" },
			sort: { _id: -1 },
		});
	} catch (err) {
		error =
			err.message ??
			"Une erreur est survenue lors de la récupération du document officiel de la Coupe de France";
	}

	return {
		props: {
			document,
			error,
		},
		revalidate: 3600,
	};
}
