import { getSession } from 'next-auth/react';
import useUser from '../../../hooks/useUser';

// MUI IMPORTS
import Container from '@mui/material/Container';
import AdminTable from '../../../components/admin/table/admin-table';
import Alert from '@mui/material/Alert';

// COMPONENT IMPORTS
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';

function AdministratorAdminPage() {
  // Get user info
  const { user, isLoading, isError } = useUser();

  // Define table head
  const tableHead = [
    {
      _id: '_id',
      name: 'ID',
    },
    {
      _id: 'name',
      name: 'Nom',
    },
    {
      _id: 'email',
      name: 'Email',
    },
    {
      _id: 'role',
      name: 'Administrateur',
      align: 'right',
    },
  ];

  return (
    <DashboardWrapper>
      <PageTitle title="Administrateurs"></PageTitle>
      <Container maxWidth="lg" sx={{ py: 4 }}>

          <AdminTable
            name="Administrateurs"
            tableHead={tableHead}
            tableData={user}
            loading={isLoading}
            error={isError}
          />

      </Container>
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

export default AdministratorAdminPage
