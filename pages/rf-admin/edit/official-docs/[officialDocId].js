import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// CONTENTS
import officialDocsConfig from "../../../../contents/forms/official-docs";

export default function EditSingleDocPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { officialDocId } = router.query;

  // Get officialDocs data
  const { data, error, mutate } = useSWR(
    `/api/official-docs/${officialDocId}`,
    fetcher
  );
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={officialDocsConfig}
      data={data}
      mutate={mutate}
      documentId={officialDocId}
      isLoading={isLoading}
    />
  );
}

EditSingleDocPage.auth = {
  role: "superadmin",
};

// NextJS functions
export async function getStaticPaths() {
  const data = await getDocuments("official-docs");
  const paths = data.map((officialDoc) => ({
    params: {
      officialDocId: officialDoc._id,
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
