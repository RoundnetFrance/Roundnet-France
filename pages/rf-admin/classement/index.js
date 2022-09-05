// COMPONENT IMPORTS
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import FormBuilder from "../../../components/form-builder";

export default function RakingAdminPage() {
  // Hooks calls
  // const { officialDocs, isLoading, isError } = useOfficialDocs("cdf");

  return (
    <DashboardWrapper>
      <PageTitle title="Administration du classement national" />
      <FormBuilder
        formConfig={{
          name: "Date de dernière mise à jour",
          fields: [
            {
              _id: "date",
              name: "Date",
              type: "date",
              editable: true,
              value: "05/06/2022",
            },
          ],
          endpoint: "ranking/date",
          submitText: "Mettre  jour la date",
        }}
      />
    </DashboardWrapper>
  );
}

RakingAdminPage.auth = {
  role: "superadmin",
};

export async function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
