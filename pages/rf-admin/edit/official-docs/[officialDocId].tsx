import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

import officialDocsConfig from "../../../../contents/forms/official-docs";
import type { OfficialDocument } from "../../../../models/collections/OfficialDocs";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { FCWithAuth } from "../../../../models/Utils";

const EditSingleDocPage: FCWithAuth = () => {
  const router = useRouter();
  const { officialDocId } = router.query;

  const { data, error, mutate } = useSWR<OfficialDocument>(
    `/api/official-docs/${officialDocId}`,
    fetcher,
  );
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={officialDocsConfig}
      data={data}
      mutate={mutate}
      documentId={officialDocId.toString()}
      isLoading={isLoading}
    />
  );
};

EditSingleDocPage.auth = {
  role: "superadmin",
};

export default EditSingleDocPage;

export const getStaticPaths = (async () => {
  const data = await getDocuments<OfficialDocument>({
    collection: "official-docs",
  });
  const paths = data.map((officialDoc) => ({
    params: {
      officialDocId: officialDoc._id,
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
