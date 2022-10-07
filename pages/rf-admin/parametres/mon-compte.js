import { getDocuments } from "../../../helpers/db";

// MUI IMPORTS
import { Container, Typography } from "@mui/material";

// COMPONENT IMPORTS
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import AccountDashboard from "../../../components/admin/my-account/account-dashboard";

export default function AccountAdminPage({ clubs }) {
  return (
    <DashboardWrapper>
      {/* INTRO */}
      <Container maxWidth="lg">
        <PageTitle title="Paramètres de compte" />
        <Typography variant="body1" color="initial">
          Changer les paramètres de votre compte
        </Typography>

        {/* ACCOUNT DASHBOARD */}
        <AccountDashboard clubs={clubs} />
      </Container>
    </DashboardWrapper>
  );
}

AccountAdminPage.auth = {
  role: "superadmin",
};

export async function getStaticProps() {
  const clubs = await getDocuments("clubs");
  return {
    props: {
      clubs,
      adminLayout: true,
    },
    revalidate: 600,
  };
}
