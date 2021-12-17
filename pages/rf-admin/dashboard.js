import { getSession } from 'next-auth/react'

// MUI IMPORTS
import Container from '@mui/material/Container';

// COMPONENT IMPORTS
import DashboardWrapper from '../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../components/ui/page-title';

function DashboardPage() {
  return (
    <DashboardWrapper>
      <PageTitle title="Dashboard"></PageTitle>
    </DashboardWrapper>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
      return {
          redirect: {
              destination: '/rf-admin',
              permanent: false,
          },
      };
  }
  return {
      props: { 
        session,
        adminLayout: true, 
      },
  };
}

export default DashboardPage
