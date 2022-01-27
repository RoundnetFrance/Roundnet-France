import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import usePartners from "../../../hooks/use-partners";

// COMPONENT IMPORTS
import AdminContent from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreatePartnerForm from "../../../components/admin/forms/create-partner-form";

export default function PartnersAdminPage() {
  // Data from API (get members info)
  const { partners, isLoading, isError } = usePartners();

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

  const config = {
    name: "federation members administrators",
    listProps: {
      title: "title",
      subtitle: "description",
      image: "image",
    },
    data: partners,
    endpoint: "partners",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Liste des partenaires de la fédération"></PageTitle>

      <AdminContent config={config} form={<CreatePartnerForm />} />
    </DashboardWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
