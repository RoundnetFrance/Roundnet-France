import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import InfoBlock from '../../components/ui/info-block';

function TournamentsResultsPage() {
  return (
    <Fragment>
      <Hero
        title="Rencontres inter-clubs"
        image="/images/hero/results.jpg"
        imagePosition='center 80%'
        mini
      />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Le rendez-vous compétitif des clubs français" />
        <Typography variant="body1">
          Les rencontres inter-clubs représentent l&apos;initiative de Roundnet France de se faire rencontrer les différents viviers de joueurs nationaux.
        </Typography>

        <InfoBlock
          imageToLeft
          title="Comment se déroulent les rencontres inter-clubs ?"
          image="/images/home-slide.jpg"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eveniet possimus quidem, voluptas blanditiis rem beatae hic asperiores inventore nobis quos adipisci laboriosam earum in necessitatibus, accusantium itaque voluptatem aliquid error odio a autem officia eum maxime. Doloribus ducimus, debitis modi libero nesciunt similique excepturi laborum temporibus cumque esse deserunt labore aspernatur expedita consectetur, odit hic quos exercitationem quaerat dolore. Expedita modi neque quam."
        >

        </InfoBlock>

      </Container>






    </Fragment>

  )
}

export default TournamentsResultsPage
