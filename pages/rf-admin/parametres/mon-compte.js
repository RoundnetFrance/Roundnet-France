import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getDocuments } from '../../../helpers/db';

// MUI IMPORTS
import { Container } from '@mui/material';

// COMPONENT IMPORTS
import Loader from '../../../components/ui/loader';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';
import Typography from '@mui/material/Typography';
import AccountDashboard from '../../../components/admin/my-account/account-dashboard';

export default function AccountAdminPage({ clubs }) {
  const router = useRouter();
  // Handle redirect if no session
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push('/rf-admin');
    }
  });

  // If loading, display loading screen
  if (status === "loading") return <Loader />

  return (
    <DashboardWrapper>
      {/* INTRO */}
      <Container maxWidth="lg">

        <PageTitle title="Paramètres de compte" />
        <Typography variant="body1" color="initial">
          Changer les paramètres de votre compte
        </Typography>

        {/* ACCOUNT DASHBOARD */}
        <AccountDashboard clubs={clubs} />

      </Container>
    </DashboardWrapper>
  )
}

export async function getStaticProps() {
  const clubs = await getDocuments('clubs');
  console.log(clubs)

  return {
    props: {
      clubs,
      adminLayout: true,
    }
  }
}
