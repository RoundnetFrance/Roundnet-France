import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import { PageTitle } from "../../../components/ui";
import { FormBuilder } from "../../../components/form-builder";
import type { FCWithAuth } from "../../../models/Utils";
import type { GetStaticProps } from "next";

const RakingAdminPage: FCWithAuth = () => {
  return (
    <DashboardWrapper>
      <PageTitle title='Administration du classement national' />
      <FormBuilder
        formConfig={{
          name: "Date de dernière mise à jour",
          fields: [
            {
              id: "date",
              label: "Date",
              type: "date",
              // editable: true,
              value: "05/06/2022",
            },
          ],
          endpoint: "ranking/date",
          submitText: "Mettre  jour la date",
        }}
      />
    </DashboardWrapper>
  );
};

RakingAdminPage.auth = {
  role: "superadmin",
};

export default RakingAdminPage;

export const getStaticProps = (() => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
