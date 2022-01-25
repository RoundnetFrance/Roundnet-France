import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// CONTENTS
import clubConfig from "../../../../contents/forms/clubs";

export default function EditAdminPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { clubId } = router.query;

  // Get club data
  const { data, error, mutate } = useSWR(`/api/clubs/${clubId}`, fetcher);
  const isLoading = !error && !data;

  //! If club data is loading
  if (isLoading) return <p>Loading...</p>;

  return (
    <AdminContentSingle
      config={clubConfig}
      data={data}
      mutate={mutate}
      documentId={clubId}
    />
  );
}

// NextJS functions
export async function getStaticPaths() {
  const data = await getDocuments("clubs");
  const paths = data.map((club) => ({
    params: {
      clubId: club._id,
    },
  }));
  return { paths, fallback: false };
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
