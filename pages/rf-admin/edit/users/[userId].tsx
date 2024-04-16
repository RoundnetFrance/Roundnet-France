import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

import adminConfig from "../../../../contents/forms/admins";
import type { GetStaticPaths, GetStaticProps } from "next/types";
import type { User } from "../../../../models/collections/Users";

const EditSingleUser = () => {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { userId } = router.query;

  // Get club data
  const { data, error, mutate } = useSWR<User>(`/api/users/${userId}`, fetcher);
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={adminConfig}
      data={data}
      mutate={mutate}
      documentId={userId?.toString() ?? ""}
      isLoading={isLoading}
    />
  );
};

EditSingleUser.auth = {
  role: "superadmin",
};

export default EditSingleUser;

export const getStaticPaths = (async () => {
  const data = await getDocuments<User>({ collection: "users" });
  const paths = data.map((user) => ({
    params: {
      userId: user._id,
    },
  }));
  return { paths, fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps = (() => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
