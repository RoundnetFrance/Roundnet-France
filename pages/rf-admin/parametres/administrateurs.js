import { getSession } from 'next-auth/react';
import useUser from '../../../hooks/useUser';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';

function AdministratorAdminPage() {
  // Get user info
  const { user: users, isLoading, isError } = useUser();

  // Define a table config object. Comments with * are required.
  const tableConfig = {
    // * Name of the table (for reference and aria labels)
    name: 'administrators table',
    // Content of columns. Must have :
    // '_id' key, which is the unique id of the column 
    // 'name' key, which is the name displayed on the column
    // 'align' key, for alignement of name ('right', defaults to 'left' if undefined)
    tableHead: [
      {
        _id: 'name',
        name: 'Nom',
      },
      {
        _id: 'email',
        name: 'Email',
      },
      {
        _id: 'authorized',
        name: 'Administrateur',
        align: 'right',
        editable: true,
      },
    ],
    // * Content of rows. Must be an array of objects
    tableData: users,
    // * API endpoint to fetch data from
    endpoint: 'users',
    // * Loading state
    loading: isLoading,
    // * Error state
    error: isError,
    // The following keys are optional
    // Dynamically add a '$deletable' key to each row, with a boolean value, to delete the row
    deletable: true,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Administrateurs"></PageTitle>
      <Container maxWidth="lg" sx={{ py: 4 }}>

        {isLoading ? <Stack sx={{ height: '200px' }} justifyContent="center" alignItems="center">
          <CircularProgress />
        </Stack> : <AdminTable tableConfig={tableConfig} />}

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
