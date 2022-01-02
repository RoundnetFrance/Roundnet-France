import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useRules from '../../../hooks/useRules';

// MUI IMPORTS
import { CircularProgress } from '@mui/material';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';

export default function RulesAdminPage() {
  // Hooks calls
  const router = useRouter();
  const { rules, isLoading, isError } = useRules();

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
    return <CircularProgress />
  }

  // Define the table config object
  const tableConfig = {
    name: 'rules table',
    tableHead: [
      {
        _id: 'url',
        name: 'Lien du fichier',
        editable: true,
        file: true,
      },
      {
        _id: 'version',
        name: 'Version',
        editable: true,
      },
    ],
    tableData: rules,
    endpoint: 'rules',
    loading: isLoading,
    error: isError,
    deletable: true,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Administration du fichier de règles"></PageTitle>
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
