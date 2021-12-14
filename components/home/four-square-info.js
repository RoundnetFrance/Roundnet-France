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

// COMPONENTS IMPORTS
import ColoredBackground from '../ui/colored-background';

function FourSquareInfo() {
  return (
    <div id="methods">
      <ColoredBackground>
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

      </ColoredBackground>
    </div>
  );
}

export default FourSquareInfo;