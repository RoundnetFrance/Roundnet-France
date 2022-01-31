import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useClubs from "../../../../hooks/useClubs";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import DashboardWrapper from "../../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../../components/ui/page-title";
import AdminContent from "../../../../components/admin/admin-content";
import CreateClubForm from "../../../../components/forms/create-club-form";

export default function ClubsAdminPage() {
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

  // Get clubs info
  const { clubs, isLoading, isError } = useClubs();

  const config = {
    name: "administrators",
    listProps: {
      title: "title",
      subtitle: "description",
      image: "image",
      toCheck: "validated",
    },
    data: clubs,
    endpoint: "clubs",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <Container maxWidth="lg">
        <PageTitle title="Liste des clubs" />
      </Container>
      <AdminContent config={config} form={<CreateClubForm />} />
    </DashboardWrapper>
  );
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
