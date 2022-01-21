import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useOfficialDocs from '../../../hooks/use-official-docs';

// COMPONENT IMPORTS
import AdminTable from '../../../components/admin/table/admin-table';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';
import DataControl from '../../../components/admin/data-control';
import CreateOfficialDocForm from '../../../components/admin/forms/create-rule-form';
import Loader from '../../../components/ui/loader';

export default function RulesAdminPage() {
  // Hooks calls
  const router = useRouter();
  const { officialDocs, isLoading, isError } = useOfficialDocs("cdf");

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

  // Define the table config object
  const tableConfig = {
    name: 'French cup pdf table',
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
      <PageTitle title="Administration du fichier de la Coupe de France" />

      <DataControl endpoint="official-docs" createForm={<CreateOfficialDocForm doctype="cdf" />} />

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
