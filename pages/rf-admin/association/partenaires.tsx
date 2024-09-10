import usePartners from "../../../hooks/use-partners";

import { AdminContent } from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import { PageTitle } from "../../../components/ui";
import CreatePartnerForm from "../../../components/admin/forms/create-partner-form";
import type { FCWithAuth } from "../../../models/Utils";
import type { GetStaticProps } from "next/types";
import type { Partner } from "../../../models/collections/Partners";

const PartnersAdminPage: FCWithAuth = () => {
  // Data from API (get members info)
  const { partners, isLoading, isError } = usePartners<Partner[]>();

  const config = {
    name: "federation members administrators",
    listProps: {
      title: "title",
      subtitle: "description",
      image: "image",
    },
    data: partners ?? [],
    endpoint: "partners",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title='Liste des partenaires de la fédération' />

      <AdminContent<Partner> config={config} form={<CreatePartnerForm />} />
    </DashboardWrapper>
  );
};

PartnersAdminPage.auth = {
  role: "superadmin",
};

export default PartnersAdminPage;

export const getStaticProps = (async () => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
