import { Fragment } from 'react'

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CardMedia from '@mui/material/CardMedia';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HalfImage from '../../components/ui/half-image';

function RulesPage() {
  return (
    <Fragment>

      <Hero 
      title="Règles" 
      image="/images/hero/regles.jpg"
      imagePosition='center 80%'
      mini />

      <Container maxWidth="md" sx={{ py: 4 }}>

        <Box sx={{ pb: 4 }}>
          <Typography variant="h4">Comment jouer au roundnet ?</Typography>
          <Divider />
        </Box>

        <Box sx={{ pb: 4 }}>
          <Typography variant="body1">
            Première chose à savoir : vous pouvez jouer sur n&apos;importe quel terrain. Indoor, gazon, synthétique, terre battue,  neige, boue, béton... Soyez créatifs.
          </Typography>
        </Box>

        <Box sx={{ pb: 4 }}>
          <Timeline position="alternate">

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>4 joueurs (2 vs 2) sont autour du filet de Roundnet. Equipe A vs Equipe B.</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Un joueur de l&apos;équipe A sert sur un joueur de l&apos;équipe B.</TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>L&apos;équipe B a trois touches pour renvoyer la balle sur le filet. Ils peuvent librement bouger et se placer autour du filet après le service. </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Si l&apos;équipe B renvoie la balle sur le filet, l&apos;équipe A a désormais trois touches pour la renvoyer à son tour.
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>L&apos;échange continue jusqu&apos;à ce qu&apos;une équipe ne puisse pas renvoyer la balle.
              </TimelineContent>
            </TimelineItem>

          </Timeline>
        </Box>

        <Box sx={{ pb: 4 }}>
          <Typography align="center" variant="h6">Si tout cela n&apos;est pas clair, la vidéo ci-dessous devrait faire l&apos;affaire.</Typography>
        </Box>

          <CardMedia component="iframe" src="https://www.youtube.com/embed/vGIrNrLyZZg" sx={{ width: [300, 450, 900, 900], height: [200, 300, 600] }} />

      </Container>
      <HalfImage />
    </Fragment>
  )
}

export default RulesPage
