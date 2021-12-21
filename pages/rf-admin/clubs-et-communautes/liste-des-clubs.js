import { getSession } from 'next-auth/react';
import useClubs from '../../../hooks/useClubs';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';

function ClubsAdminPage() {
  // Get user info
  const { clubs, isLoading, isError } = useClubs();

  // Define a table config object. Comments with * are required.
  const tableConfig = {
    // * Name of the table (for reference and aria labels)
    name: 'administrators table',
    // Content of columns. Must have :
    // '_id' key, which is the unique id of the column. It has to match the keys of the data object. 
    // 'name' key, which is the name displayed on the column
    // 'align' key, for alignement of name ('right', defaults to 'left' if undefined)
    tableHead: [
      {
        _id: 'title',
        name: 'Club',
        editable: true,
      },
      {
        _id: 'chip',
        name: 'Ville',
        editable: true,
      },
      {
        _id: 'description',
        name: 'Description',
        editable: true,
      },
      {
        _id: 'validated',
        name: 'Public',
        align: 'right',
        editable: true,
      },
    ],
    // * Content of rows. Must be an array of objects
    tableData: clubs,
    // * API endpoint to fetch data from (without 'api/' nor trailing slash) and to record as SWR mutate key. 
    // Example : http://localhost:3000/api/users becomes 'users'
    endpoint: 'clubs/admin',
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
      <PageTitle title="Liste des clubs"></PageTitle>
      <AdminTable tableConfig={tableConfig} />
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

export default ClubsAdminPage
