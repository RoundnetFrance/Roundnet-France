import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useOfficialDocs from "../../../hooks/use-official-docs";

// COMPONENT IMPORTS
import AdminContent from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateOfficialDocForm from "../../../components/admin/forms/create-official-doc";

export default function RulesAdminPage() {
  // Hooks calls
  const router = useRouter();
  const { officialDocs, isLoading, isError } = useOfficialDocs("ric");

  // Handle redirect if no session
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push("/rf-admin");
    },
  });

  const config = {
    name: "administrators",
    listProps: {
      title: "version",
      subtitle: "description",
      // image: "image",
    },
    data: officialDocs,
    endpoint: "official-docs",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Administration du fichier des rencontres inter-clubs" />
      <AdminContent
        config={config}
        form={<CreateOfficialDocForm doctype="ric" />}
      />
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
