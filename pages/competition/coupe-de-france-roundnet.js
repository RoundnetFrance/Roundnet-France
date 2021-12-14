import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// MUI ICONS
import EventIcon from '@mui/icons-material/Event';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import TeamRanking from '../../components/competition/national-ranking/team-ranking';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PlanningTable from '../../components/ui/planning-table';


function NationalRankingPage() {
  return (
    <Fragment>
      <Hero
        title="Coupe de France"
        image="/images/hero/classement-national.jpg"
        mini
      />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Le classement officiel de la Coupe de France de roundnet" />
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Le classement national est basé sur des tournois indépendants répondants aux critères de la fédération décrits ci-dessous.

          Les tournois en France sont régulièrement annoncés sur les réseaux sociaux Facebook et Instagram.

          Dans le tableau ci-dessous, vous pouvez voir le classement national à jour.
        </Typography>
      </Container>

      <TeamRanking />

      <Container maxWidth="md" sx={{ mt: 8 }}>
        <HeaderWithIcon
          title="Résultat des précédents tournois"
          icon={<EventIcon color="primary" sx={{ fontSize: 80 }} />}
        >
          Les tournois de la Coupe de France sont régulièrement annoncés sur les réseaux sociaux Facebook et Instagram.
        </HeaderWithIcon>
      </Container>

      <Container maxWidth="lg" sx={{ my: 4}}>
      <Typography variant="h6">
          Saison 2022/
        </Typography>
        <PlanningTable resultsTable />
      </Container>

    </Fragment>
  )
}

export default NationalRankingPage
