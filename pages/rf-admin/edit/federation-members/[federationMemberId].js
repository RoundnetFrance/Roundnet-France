import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// CONTENTS
import federationMemberConfig from "../../../../contents/forms/federation-members";

export default function EditSingleFederationMemberPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { federationMemberId } = router.query;

  // Get federationMember data
  const { data, error, mutate } = useSWR(
    `/api/federation-members/${federationMemberId}`,
    fetcher
  );
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={federationMemberConfig}
      data={data}
      mutate={mutate}
      documentId={federationMemberId}
      isLoading={isLoading}
    />
  );
}

EditSingleFederationMemberPage.auth = {
  role: "superadmin",
};

// NextJS functions
export async function getStaticPaths() {
  const data = await getDocuments("federation-members");
  const paths = data.map((federationMember) => ({
    params: {
      federationMemberId: federationMember._id,
    },
  }));
  return { paths, fallback: "blocking" };
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
