import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useUser from '../../../hooks/useUser';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';
import Loader from '../../../components/ui/loader';

export default function AdministratorAdminPage() {
  // Hooks calls
  const router = useRouter();

  // Handle redirect if no session
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push('/rf-admin');
    }
  })

  // Get user info
  const { user: users, isLoading, isError } = useUser();

  // If loading, display loading screen
  if (status === "loading") return <Loader />

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
      <AdminTable tableConfig={tableConfig} />
    </DashboardWrapper>
  )
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    }
  }
}
