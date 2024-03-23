import useOfficialDocs from "../../../hooks/use-official-docs";

import { AdminContent } from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import { PageTitle } from "../../../components/ui";
import CreateOfficialDocForm from "../../../components/admin/forms/create-official-doc";
import type { FCWithAuth } from "../../../models/Utils";
import type { GetStaticProps } from "next";

const ObserversAdminPage: FCWithAuth = () => {
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
      <PageTitle title='Administration du fichier de directives des observeurs' />
      <AdminContent
        config={config}
        form={<CreateOfficialDocForm doctype='observers' />}
      />
    </DashboardWrapper>
  );
};

ObserversAdminPage.auth = {
  role: "superadmin",
};

export default ObserversAdminPage;

export const getStaticProps = (async () => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
