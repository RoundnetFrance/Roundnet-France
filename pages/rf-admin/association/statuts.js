import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useOfficialDocs from '../../../hooks/use-official-docs';

// MUI IMPORTS
import { CircularProgress, Stack } from '@mui/material';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';
import DataControl from '../../../components/admin/data-control';
import CreateOfficialDocForm from '../../../components/admin/forms/create-official-doc-form';

export default function RulesAdminPage() {
  // Hooks calls
  const router = useRouter();
  const { officialDocs, isLoading, isError } = useOfficialDocs();

  // Handle redirect if no session
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push('/rf-admin');
    }
  })

  // If loading, display loading screen
  if (status === "loading") {
    return (
      <Stack sx={{ width: '100%' }} justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    )
  }

  // Define the table config object
  const tableConfig = {
    name: 'official docs table',
    tableHead: [
      {
        _id: 'url',
        name: 'Lien du fichier',
        file: true,
      },
      {
        _id: 'version',
        name: 'Version',
        editable: true,
      },
      {
        _id: 'description',
        name: 'Description',
        editable: true,
      }
    ],
    tableData: officialDocs,
    endpoint: 'official-docs',
    loading: isLoading,
    error: isError,
    deletable: true,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Administration des statuts de l'association"></PageTitle>

      <DataControl endpoint="rules" createForm={<CreateOfficialDocForm />} />

      <AdminTable tableConfig={tableConfig} />

    </DashboardWrapper>
  )
}

export async function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
