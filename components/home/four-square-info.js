import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// MATERIAL ICONS
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';

function FourSquareInfo() {
  return (
    <div id="methods">
      <Box sx={{
        mb: -1,
      }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f50057" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,234.7C480,245,600,203,720,192C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></svg>
      </Box>
      <Box sx={{
        background: 'linear-gradient(180deg, rgba(245,0,87,1) 0%, rgba(171,0,60,1) 100%);',
        pb: 8,
      }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <QueryStatsIcon color="disabled" sx={{ fontSize: 80 }} />
          </Box>
          <Typography mb={8} align="center" color="white" variant="h4" component="h2">Méthodologie &amp; Critères</Typography>
          <Grid
            container
            item
            spacing={4}
          >

            {/* PAPER 1 */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2 }}>
                <Stack mb={2} direction="row" alignItems="center">
                  <AutoAwesomeIcon color="secondary" />
                  <Typography ml={2} variant="h5" component="h3" color="secondary.main" fontWeight="bold">Inspiré de l&apos;EURA</Typography>
                </Stack>
                <Divider color="primary.dark" />
                <Stack spacing={2} mt={4}>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

            {/* PAPER 2 */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2 }}>
                <Stack mb={2} direction="row" alignItems="center">
                  <AutorenewRoundedIcon color="secondary" />
                  <Typography ml={1} variant="h5" component="h3" color="secondary.main" fontWeight="bold">
                    Nourri de vos tournois
                  </Typography>
                </Stack>
                <Divider color="primary.dark" />
                <Stack spacing={2} mt={4}>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

            {/* PAPER 3 */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2 }}>
                <Stack mb={2} direction="row" alignItems="center">
                  <EqualizerRoundedIcon color="secondary" />
                  <Typography ml={2} variant="h5" component="h3" color="secondary.main" fontWeight="bold">Référent pour la compétition</Typography>
                </Stack>
                <Divider color="primary.dark" />
                <Stack spacing={2} mt={4}>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

            {/* PAPER 4 */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2 }}>
                <Stack mb={2} direction="row" alignItems="center">
                  <AllInclusiveRoundedIcon color="secondary" />
                  <Typography ml={2} variant="h5" component="h3" color="secondary.main" fontWeight="bold">Pensé pour tou.te.s</Typography>
                </Stack>
                <Divider color="primary.dark" />
                <Stack spacing={2} mt={4}>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                  <Typography variant="body1" component="div">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quibusdam ipsam eaque asperiores.
                    Repudiandae, id aliquam placeat sed quo assumenda similique?
                    Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>

      </Box>
    </div>
  );
}

export default FourSquareInfo;