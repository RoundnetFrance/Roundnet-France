import useOfficialDocs from "../../../hooks/use-official-docs";

import { AdminContent } from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateOfficialDocForm from "../../../components/admin/forms/create-official-doc";
import type { FCWithAuth } from "../../../models/Utils";
import type { GetStaticProps } from "next";

const FrenchCupAdminPage: FCWithAuth = () => {
  // Hooks calls
  const { officialDocs, isLoading, isError } = useOfficialDocs("cdf");

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
      <PageTitle title='Administration du fichier de la Coupe de France' />
      <AdminContent
        config={config}
        form={<CreateOfficialDocForm doctype='cdf' />}
      />
    </DashboardWrapper>
  );
};

FrenchCupAdminPage.auth = {
  role: "superadmin",
};

export default FrenchCupAdminPage;

export const getStaticProps = (() => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
