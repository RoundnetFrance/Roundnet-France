import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// CONTENTS
import adminConfig from "../../../../contents/forms/admins";

export default function EditAdminPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { userId } = router.query;

  // Get club data
  const { data, error, mutate } = useSWR(`/api/users/${userId}`, fetcher);
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={adminConfig}
      data={data}
      mutate={mutate}
      documentId={userId}
      isLoading={isLoading}
    />
  );
}

// NextJS functions
export async function getStaticPaths() {
  const data = await getDocuments("users");
  const paths = data.map((user) => ({
    params: {
      userId: user._id,
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
