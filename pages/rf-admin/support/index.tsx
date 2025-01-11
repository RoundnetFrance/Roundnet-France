import { Container, Paper, Typography, Stack, Button } from "@mui/material";

import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import { PageTitle } from "../../../components/ui";
import type { FCWithAuth } from "../../../models/Utils";
import type { GetStaticProps } from "next";

const SupportPage: FCWithAuth = () => {
  return (
    <DashboardWrapper>
      <Container maxWidth='lg'>
        <PageTitle title='Support' />
        <Typography variant='body1' color='initial'>
          Faire un report de bug / Demander une nouvelle fonctionnalité
        </Typography>

        {/* CONTENT */}
        <Container maxWidth='lg'>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ my: 4 }}
            justifyContent='space-evenly'
            width='100%'
          >
            <Paper sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
              <Typography variant='h5' mb={2}>
                {" "}
                Signaler une demande
              </Typography>
              <Typography variant='body1'>
                Dans le cas où vous rencontrez un bug, veuillez nous le signaler
                en remplissant le formulaire dans le lien ci-dessous.
              </Typography>
              <Button
                variant='contained'
                color='primary'
                href='https://github.com/Niborwood/Roundnet-France/issues/new'
                target='_blank'
                sx={{ my: 2 }}
              >
                Signaler un bug
              </Button>
              <Typography variant='body1'>
                Dans le lien suivant, vous pouvez remplir le formulaire de bug
                de la manière suivante :
              </Typography>
              <ul>
                <Typography variant='body1' component='li'>
                  <strong>Description :</strong> Entrez dans le détail la
                  fonctionnalité qui ne fonctionne pas, la page sur laquelle
                  vous êtes, votre état (connecté / non-connecté), si un message
                  d&apos;erreur est affiché ou non, etc. Mieux vaut être
                  explicite !
                </Typography>
                <Typography variant='body1' component='li'>
                  <strong>Assignees :</strong> Ajoutez{" "}
                  <strong>Niborwood</strong> (Robin SOURIAU)
                </Typography>
                <Typography variant='body1' component='li'>
                  <strong>Labels :</strong> Ajoutez le label qui correspond au
                  problème que vous rencontrez. Si vous souhaitez faire une
                  demande de nouvelle fonctionnalité, ajoutez le label{" "}
                  <strong>enhancement</strong>.
                </Typography>
              </ul>
            </Paper>

            <Paper sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
              <Typography variant='h5' mb={2}>
                Pour tout autre besoin
              </Typography>
              <Typography variant='body1'>
                En cas de question spécifique, vous pouvez me contacter
                directement en m&apos;ajoutant en ami Discord :{" "}
                <strong>Niborwood#7893</strong>
              </Typography>
            </Paper>
          </Stack>
        </Container>
      </Container>
    </DashboardWrapper>
  );
};

SupportPage.auth = {
  role: "superadmin",
};

export default SupportPage;

export const getStaticProps = (async () => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
