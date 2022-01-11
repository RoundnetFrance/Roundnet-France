// MUI IMPORTS
import { Box, Stack, Paper, Typography, Divider, Container, Grid, Icon, Button } from '@mui/material';

// MUI ICONS
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

// STATIC CONTENT
import { fourSquareContent } from '../../contents/home/index';

// COMPONENT EXPORT
import HeaderWithIcon from '../../components/ui/header-with-icon';
import Link from '../../components/ui/link';


function FourSquareInfo() {
  return (
    <Container id="methods" maxWidth="lg" sx={{ mt: -8 }}>

      <Box my={8}>
        <HeaderWithIcon
          icon="info"
          title="Les démarches de la fédération"
        />
      </Box>

      <Grid
        container
        item
        spacing={4}
      >

        {fourSquareContent.map(content => (
          <Grid item xs={12} sm={6} key={content._id} >
            <Paper sx={{
              p: 2,
              borderRadius: 4,
              backgroundColor: 'primary.main',
              height: '95%'
            }}
            >
              <Stack direction="column" justifyContent="space-between" sx={{ height: 'inherit' }}>
                <Stack mb={2} direction="row" alignItems="center">
                  <Icon sx={{ color: 'neutral.main' }}>{content.icon}</Icon>
                  <Typography ml={2} variant="h5" component="h3" color="neutral.main" fontWeight="bold">{content.title}</Typography>
                </Stack>
                <Divider color="neutral.main" />
                <Stack spacing={2} mt={4}>
                  {content.content.map(paragraph => (
                    <Typography variant="body1" component="div" color="neutral.main" key={paragraph}>
                      {paragraph}
                    </Typography>
                  ))}
                  <Button variant="contained" color="secondary" sx={{ width: 'fit-content' }} startIcon={<ArrowCircleRightIcon />}>
                    <Link href={content.link} color="neutral.main" underline="none">
                      {content.linkText || 'En savoir plus'}
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}

      </Grid>
    </Container >
  );
}

export default FourSquareInfo;