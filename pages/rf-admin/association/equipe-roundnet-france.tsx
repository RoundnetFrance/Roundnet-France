import useFederationMembers from "../../../hooks/use-federation-members";

import { AdminContent } from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateFederationMemberForm from "../../../components/admin/forms/create-federation-member-form";
import type { FCWithAuth } from "../../../models/Utils";
import type { GetStaticProps } from "next";

const FederationMembersAdminPage: FCWithAuth = () => {
  // Data from API (get members info)
  const { members, isLoading, isError } = useFederationMembers();

  const config = {
    name: "federation members administrators",
    listProps: {
      title: "title",
      subtitle: "description",
      image: "image",
    },
    data: members ?? [],
    endpoint: "federation-members",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title='Liste des membres de la fédération' />

      <AdminContent config={config} form={<CreateFederationMemberForm />} />
    </DashboardWrapper>
  );
};

FederationMembersAdminPage.auth = {
  role: "superadmin",
};

export default FederationMembersAdminPage;

export const getStaticProps = (async () => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
