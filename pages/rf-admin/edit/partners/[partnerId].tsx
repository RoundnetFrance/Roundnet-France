import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

import partnerConfig from "../../../../contents/admin/configs/partner";
import type { Partner } from "../../../../models/collections/Partners";

export default function EditSinglePartnerPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { partnerId } = router.query;

  // Get club data
  const { data, error, mutate } = useSWR<Partner>(
    `/api/partners/${partnerId}`,
    fetcher,
  );
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={partnerConfig}
      data={data}
      mutate={mutate}
      documentId={partnerId?.toString() ?? ""}
      isLoading={isLoading}
    />
  );
}

EditSinglePartnerPage.auth = {
  role: "superadmin",
};

export async function getStaticPaths() {
  const data = await getDocuments<Partner>({ collection: "partners" });
  const paths = data.map((user) => ({
    params: {
      partnerId: user._id,
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
