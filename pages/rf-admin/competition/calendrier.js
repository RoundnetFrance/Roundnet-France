import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useUpcomingEvents from '../../../hooks/useUpcomingEvents';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';
import Loader from '../../../components/ui/loader';

export default function ClubsAdminPage() {
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

  // Get events info
  const { events, isLoading, isError } = useUpcomingEvents();

  // If loading, display loading screen
  if (status === "loading") return <Loader />

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
        _id: 'organization',
        name: 'Club',
      },
      {
        _id: 'place',
        name: 'Lieu',
        editable: true,
      },
      {
        _id: 'date',
        name: 'Date',
        date: true,
        editable: true,
      },
      {
        _id: 'players',
        name: 'Joueurs',
        editable: true,
      },
      {
        _id: 'price',
        name: 'Prix',
        editable: true,
      },
      {
        _id: 'url',
        name: 'Lien',
        editable: true,
      },
    ],
    // * Content of rows. Must be an array of objects
    tableData: events,
    // * API endpoint to fetch data from (without 'api/' nor trailing slash) and to record as SWR mutate key. 
    // Example : http://localhost:3000/api/users becomes 'users'
    endpoint: 'calendar',
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
      <PageTitle title="Planning des tournois officiels"></PageTitle>
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
