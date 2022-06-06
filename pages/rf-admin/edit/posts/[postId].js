import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// CONTENTS
import postConfig from "../../../../contents/forms/posts";

export default function EditSinglePostPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { postId } = router.query;

  // Get club data
  const { data, error, mutate } = useSWR(`/api/posts/${postId}`, fetcher);
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={postConfig}
      data={data}
      mutate={mutate}
      documentId={postId}
      isLoading={isLoading}
    />
  );
}

EditSinglePostPage.auth = {
  role: "superadmin",
};

// NextJS functions
export async function getStaticPaths() {
  const data = await getDocuments("posts");
  const paths = data.map((post) => ({
    params: {
      postId: post._id,
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
