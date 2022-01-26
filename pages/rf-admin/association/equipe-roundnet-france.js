import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useFederationMembers from "../../../hooks/useFederationMembers";

// COMPONENT IMPORTS
import AdminContent from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateFederationMemberForm from "../../../components/admin/forms/create-federation-member-form";

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
      return router.push("/rf-admin");
    },
  });

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

export async function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}

export default ClubsAdminPage;
