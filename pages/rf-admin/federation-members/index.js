import useEvents from "../../../hooks/use-federation-members";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import AdminContent from "../../../components/admin/admin-content";
import CreateRFMemberForm from "../../../components/forms/create-federation-member-form";

export default function RFMembersAdminPage() {
  // Get events info
  const { members, isLoading, isError } = useEvents();

  const config = {
    name: "administrators",
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
      <Container maxWidth="lg">
        <PageTitle title="Liste des membres de l'équipe roundnet France" />
      </Container>
      <AdminContent config={config} form={<CreateRFMemberForm isAdmin />} />
    </DashboardWrapper>
  );
}

RFMembersAdminPage.auth = {
  role: "superadmin",
};

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
