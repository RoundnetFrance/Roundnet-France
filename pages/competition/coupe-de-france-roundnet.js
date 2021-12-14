import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import PlayerRanking from '../../components/competition/national-ranking/player-ranking';

function NationalRankingPage() {
  return (
    <Fragment>
      <Hero
        title="Coupe de France"
        image="/images/hero/classement-national.jpg"
        mini
      />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Le classement officiel des équipes françaises" />
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Le classement national est basé sur des tournois indépendants répondants aux critères de la fédération décrits ci-dessous.

          Les tournois en France sont régulièrement annoncés sur les réseaux sociaux Facebook et Instagram.

          Dans le tableau ci-dessous, vous pouvez voir le classement national à jour.
        </Typography>
      </Container>

        <PlayerRanking />

    </Fragment>
  )
}

export default NationalRankingPage
