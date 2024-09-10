import { getDocuments } from "../../../helpers/db";

import { Container, Typography } from "@mui/material";

import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import { PageTitle } from "../../../components/ui";
import { AccountDashboard } from "../../../components/admin/my-account/account-dashboard";
import type { Club } from "../../../models/collections/Clubs";
import type { GetStaticProps } from "next/types";
import type { FCWithAuth } from "../../../models/Utils";

interface AccountAdminPageProps {
  clubs: Club[];
}

const AccountAdminPage: FCWithAuth = ({
  clubs,
}: Readonly<AccountAdminPageProps>) => {
  return (
    <DashboardWrapper>
      <Container maxWidth='lg'>
        <PageTitle title='Paramètres de compte' />
        <Typography variant='body1' color='initial'>
          Changer les paramètres de votre compte
        </Typography>

        <AccountDashboard clubs={clubs} />
      </Container>
    </DashboardWrapper>
  );
};

AccountAdminPage.auth = {
  role: "superadmin",
};

export default AccountAdminPage;

export const getStaticProps = (async () => {
  const clubs = await getDocuments<Club>({ collection: "clubs" });
  return {
    props: {
      clubs,
      adminLayout: true,
    },
    revalidate: 600,
  };
}) satisfies GetStaticProps;
