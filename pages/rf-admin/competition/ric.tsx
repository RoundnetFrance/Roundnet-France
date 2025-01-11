import useOfficialDocs from "../../../hooks/use-official-docs";

import { AdminContent } from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateOfficialDocForm from "../../../components/admin/forms/create-official-doc";
import type { FCWithAuth } from "../../../models/Utils";
import type { GetStaticProps } from "next";

const RulesAdminPage: FCWithAuth = () => {
  // Hooks calls
  const { officialDocs, isLoading, isError } = useOfficialDocs("ric");

  const config = {
    name: "administrators",
    listProps: {
      title: "version",
      subtitle: "description",
    },
    data: officialDocs ?? [],
    endpoint: "official-docs",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title='Administration du fichier des rencontres inter-clubs' />
      <AdminContent
        config={config}
        form={<CreateOfficialDocForm doctype='ric' />}
      />
    </DashboardWrapper>
  );
};

RulesAdminPage.auth = {
  role: "superadmin",
};

export default RulesAdminPage;

export const getStaticProps = (() => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
