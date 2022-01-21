import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

// MUI IMPORTS
import { Paper, Typography, Box, Stack, Divider, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

// MUI ICONS
import ModeEditIcon from '@mui/icons-material/ModeEdit';

// COMPONENT IMPORTS
import DashboardWrapper from '../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../components/ui/page-title';
import Loader from '../../components/ui/loader';
import IconWithBackground from '../../components/ui/icon-with-background';
import Link from '../../components/ui/link';

// CONTENTS
import { dashboardElements } from '../../contents/admin';

export default function DashboardPage() {
  // Hooks calls
  const router = useRouter();

  // Handle redirect if no session
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push('/rf-admin');
    }
  })

  // If loading, display loading screen
  if (status === "loading") return <Loader />

  return (
    <DashboardWrapper>
      <PageTitle title="Dashboard"></PageTitle>

      <Box my={8}>

        {/* Intro Paper */}
        <Paper sx={{ backgroundColor: 'primary.light', py: { xs: 2, sm: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={1}>
            <Typography variant="h2" color="#fff" sx={{ flexGrow: 0.5 }}>
              <strong>Bonjour,</strong>
              <br />
              {session.user.name}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Box textAlign={{ xs: 'initial', md: 'right' }}>
              <Typography variant="h6" color="#fff">
                <strong>Administrateur</strong>
              </Typography>
              <Typography variant="h6" color="#fff">
                {session.user.email}
              </Typography>
            </Box>
          </Stack>
        </Paper>


        <Grid container spacing={4} my={0}>
          {dashboardElements.map(element => (
            <Grid item xs={12} sm={6} md={4} key={element._id}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" justifyContent="space-around" alignItems="flex-start" spacing={2}>
                    <Box>
                      <Typography gutterBottom variant="h5" component="div">
                        {element.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {element.description}
                      </Typography>
                    </Box>
                    <IconWithBackground color="primary" icon={element.icon} size={40} />
                  </Stack>

                </CardContent>

                <Divider />

                <CardActions sx={{ backgroundColor: 'primary.light' }}>
                  <Button color="neutral" startIcon={<ModeEditIcon />} size="small" fullWidth><strong>
                    <Link color="#fff" underline="none" href={element.url}>Administrer</Link>
                  </strong></Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>
    </DashboardWrapper >
  )
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    }
  }
}

