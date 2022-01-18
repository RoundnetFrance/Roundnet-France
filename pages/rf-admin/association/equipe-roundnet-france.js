import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useFederationMembers from '../../../hooks/useFederationMembers';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';
import DataControl from '../../../components/admin/data-control';
import CreateFederationMemberForm from '../../../components/admin/forms/create-federation-member-form';
import Loader from '../../../components/ui/loader';


function ClubsAdminPage() {
  // Data from API (get members info)
  const { members, isLoading, isError } = useFederationMembers();

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

  // If loading, display loading screen
  if (status === "loading") return <Loader />

  // Define a table config object. Comments with * are required.
  const tableConfig = {
    // * Name of the table (for reference and aria labels)
    name: 'administrators table',
    // Content of columns. Must have :
    // '_id' key, which is the unique id of the column. It has to match the keys of the data object. 
    // 'name' key, which is the name displayed on the column
    // Options :
    // 'align' key, for alignement of name ('right', defaults to 'left' if undefined)
    // 'file' key, for file upload (defaults to false if undefined)
    // 'image' key, for image upload (defaults to false if undefined)
    // 'date' key, for date picker (defaults to false if undefined)
    tableHead: [
      {
        _id: 'title',
        name: 'Nom',
        editable: true,
      },
      {
        _id: 'chip',
        name: 'Fonction',
        editable: true,
      },
      {
        _id: 'image',
        name: 'Image',
        editable: true,
        image: true,
      },
      {
        _id: 'description',
        name: 'Description',
        editable: true,
      },
    ],
    // * Content of rows. Must be an array of objects
    tableData: members,
    // * API endpoint to fetch data from (without 'api/' nor trailing slash) and to record as SWR mutate key. 
    // Example : http://localhost:3000/api/users becomes 'users'
    endpoint: 'federation-members',
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
      <PageTitle title="Liste des membres de la fédération"></PageTitle>
      <DataControl endpoint="federation-members" createForm={<CreateFederationMemberForm />} />
      <AdminTable tableConfig={tableConfig} />
    </DashboardWrapper>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}

export default ClubsAdminPage
