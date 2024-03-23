import useClubs from "../../../../hooks/use-clubs";

import { Container } from "@mui/material";

import DashboardWrapper from "../../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../../components/ui/page-title";
import { AdminContent } from "../../../../components/admin/admin-content";
import { CreateClubForm } from "../../../../components/forms/create-club-form";
import type { GetStaticProps } from "next";

const ClubsAdminPage = () => {
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
      <Container maxWidth='lg'>
        <PageTitle title='Liste des clubs' />
      </Container>
      <AdminContent config={config} form={<CreateClubForm />} />
    </DashboardWrapper>
  );
};

ClubsAdminPage.auth = {
  role: "superadmin",
};

export default ClubsAdminPage;

export const getStaticProps = (() => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
