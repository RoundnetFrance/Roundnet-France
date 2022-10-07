import useUser from "../../../hooks/useUser";

// COMPONENT IMPORTS
import AdminContent from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";

export default function AdministratorAdminPage() {
  // Get user info
  const { user: users, isLoading, isError } = useUser();

  const config = {
    name: "administrators",
    listProps: {
      title: "name",
      subtitle: "email",
    },
    data: users,
    endpoint: "users",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Administrateurs"></PageTitle>
      <AdminContent config={config} />
    </DashboardWrapper>
  );
}

AdministratorAdminPage.auth = {
  role: "superadmin",
};

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
