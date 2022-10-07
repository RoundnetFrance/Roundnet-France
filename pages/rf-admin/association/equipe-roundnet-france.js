import useFederationMembers from "../../../hooks/use-federation-members";

// COMPONENT IMPORTS
import AdminContent from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateFederationMemberForm from "../../../components/admin/forms/create-federation-member-form";

export default function FederationMembersAdminPage() {
  // Data from API (get members info)
  const { members, isLoading, isError } = useFederationMembers();

  const config = {
    name: "federation members administrators",
    listProps: {
      title: "title",
      subtitle: "description",
      image: "image",
    },
    data: members,
    endpoint: "federation-members",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Liste des membres de la fédération"></PageTitle>

      <AdminContent config={config} form={<CreateFederationMemberForm />} />
    </DashboardWrapper>
  );
}

FederationMembersAdminPage.auth = {
  role: "superadmin",
};

export async function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
