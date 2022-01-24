import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useClubs from "../../../../hooks/useClubs";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import AdminTable from "../../../../components/admin/table/admin-table";
import DashboardWrapper from "../../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../../components/ui/page-title";
// import Loader from '../../../../components/ui/loader';

import AdminContent from "../../../../components/admin/admin-content";

export default function ClubsAdminPage() {
  // Hooks calls
  const router = useRouter();

  // Handle redirect if no session
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push("/rf-admin");
    },
  });

  // Get clubs info
  const { clubs, isLoading, isError } = useClubs();

  // If loading, display loading screen
  // if (status === "loading") return <Loader />

  // Define a table config object. Comments with * are required.
  const tableConfig = {
    // * Name of the table (for reference and aria labels)
    name: "administrators table",
    // Content of columns. Must have :
    // '_id' key, which is the unique id of the column. It has to match the keys of the data object.
    // 'name' key, which is the name displayed on the column
    // 'align' key, for alignement of name ('right', defaults to 'left' if undefined)
    tableHead: [
      {
        _id: "title",
        name: "Club",
        editable: true,
      },
      {
        _id: "chip",
        name: "Ville",
        editable: true,
      },
      {
        _id: "description",
        name: "Description",
        editable: true,
      },
      {
        _id: "referer",
        name: "Référent",
        editable: true,
      },
      {
        _id: "email",
        name: "Email",
      },
      {
        _id: "phone",
        name: "Téléphone",
      },
      {
        _id: "players",
        name: "Joueurs",
      },
      {
        _id: "links",
        name: "Liens",
        editable: true,
        array: {
          key: "source",
          value: "url",
        },
      },
      {
        _id: "discord",
        name: "Discord",
      },
      {
        _id: "validated",
        name: "Validé",
        align: "right",
        editable: true,
      },
    ],
    // * Content of rows. Must be an array of objects
    tableData: clubs,
    // * API endpoint to fetch data from (without 'api/' nor trailing slash) and to record as SWR mutate key.
    // Example : http://localhost:3000/api/users becomes 'users'
    endpoint: "clubs",
    // * Loading state
    loading: isLoading,
    // * Error state
    error: isError,
    // The following keys are optional
    // Dynamically add a '$deletable' key to each row, with a boolean value, to delete the row
    deletable: true,
  };

  const adminConfig = {
    name: "administrators",
    folder: "clubs-et-communautes/liste-des-clubs",
    listProps: {
      title: "title",
      subtitle: "description",
      image: "image",
    },
    data: clubs,
    endpoint: "clubs",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <Container maxWidth="lg">
        <PageTitle title="Liste des clubs" />
      </Container>
      {/* <AdminContent config={adminConfig} /> */}
      <AdminTable tableConfig={tableConfig} />
    </DashboardWrapper>
  );
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
