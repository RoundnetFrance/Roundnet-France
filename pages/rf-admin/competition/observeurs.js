import useOfficialDocs from "../../../hooks/use-official-docs";

// COMPONENT IMPORTS
import AdminContent from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateOfficialDocForm from "../../../components/admin/forms/create-official-doc";

export default function RulesAdminPage() {
  // Hooks calls
  const { officialDocs, isLoading, isError } = useOfficialDocs("observers");

  const config = {
    name: "administrators",
    listProps: {
      title: "version",
      subtitle: "description",
    },
    data: officialDocs,
    endpoint: "official-docs",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Administration du fichier de directives des observeurs" />
      <AdminContent
        config={config}
        form={<CreateOfficialDocForm doctype="observers" />}
      />
    </DashboardWrapper>
  );
}

RulesAdminPage.auth = {
  role: "superadmin",
};

export async function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
