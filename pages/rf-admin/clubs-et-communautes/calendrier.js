import useEvents from "../../../hooks/use-events";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import AdminContent from "../../../components/admin/admin-content";
import CreateEventForm from "../../../components/forms/create-event-form";

export default function EventsAdminPage() {
  // Get events info
  const { events, isLoading, isError } = useEvents();

  const config = {
    name: "administrators",
    listProps: {
      title: "title",
      subtitle: "description",
      image: "image",
      toCheck: "validated",
    },
    data: events,
    endpoint: "events",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <Container maxWidth="lg">
        <PageTitle title="Liste des tournois et événements" />
      </Container>
      <AdminContent config={config} form={<CreateEventForm isAdmin />} />
    </DashboardWrapper>
  );
}

EventsAdminPage.auth = {
  role: "superadmin",
};

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
