import { type FC, Fragment } from "react";
import { getDocument } from "../../helpers/db";

import { Container, Typography } from "@mui/material";

import {
  CTAFooter,
  DocumentHalfImage,
  Hero,
  PageTitle,
} from "../../components/ui";
import type { OfficialDocument } from "../../models/collections/OfficialDocs";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Comment jouer au roundnet ? Les règles du roundnet",
  description:
    "Réputé pour sa facilité de prise en main, le roundnet est un sport populaire qui emprunte au meilleur des mondes de nombreux sports pour le plaisir de tous les joueurs. ",
};

const getRule = async () => {
  try {
    return await getDocument<OfficialDocument>({
      collection: "official-docs",
      params: { doctype: "rules" },
      sort: { _id: -1 },
    });
  } catch (err) {
    const { message } = err as Error;
    return { error: message };
  }
};

const RulesPage: FC = async () => {
  const rule = await getRule();
  return (
    <Fragment>
      <Hero
        title='Règles'
        image='/images/hero/regles.jpg'
        imagePosition='center 80%'
        mini
      />

      <Container maxWidth='md' sx={{ my: { xs: 4, md: 12 } }}>
        <PageTitle title='Jouer au roundnet selon les règles officielles' />
        <Typography variant='body1' mb={2}>
          La fédération française de roundnet met régulièrement à jour les
          règles. Les règles ci-dessous sont la référence des compétitions
          officielles françaises. N’oubliez pas que le fair-play est la première
          règle de notre sport !
        </Typography>
        <Typography variant='body1'>
          Les règles modifiées dans la dernière version sont surlignées en
          jaune.
        </Typography>
        <Typography variant='body1' color={"red"} fontWeight={600}>
          Attention : document en cours de mise à jour.
        </Typography>
      </Container>

      {!("error" in rule) && (
        <DocumentHalfImage
          document={rule}
          title='Règles officielles 2021 de Roundnet'
          description='Distance au service, gênes, cas particuliers : pour ceux qui souhaitent être incollables, vous pouvez télécharger les règles officielles de roundnet et valables en tournoi, en cliquant sur le bouton ci-dessous (et en français !).'
          buttonText='Télécharger les règles'
        />
      )}

      <CTAFooter
        title='Vous vous sentez prêts à en découdre ?'
        subtitle='Passez à la prochaine étape !'
        mainLink={{
          url: "/clubs-et-communautes/liste-des-clubs",
          text: "Inscrivez votre club",
        }}
      />
    </Fragment>
  );
};

export const revalidate = 3600;
export default RulesPage;
