import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// CONTENTS
import eventConfig from "../../../../contents/admin/configs/event";

export default function EditSingleEventPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { eventId } = router.query;

  // Get event data
  const { data, error, mutate } = useSWR(`/api/events/${eventId}`, fetcher);
  const isLoading = !error && !data;

  return (
    <AdminContentSingle
      config={eventConfig}
      data={data}
      mutate={mutate}
      documentId={eventId}
      isLoading={isLoading}
    />
  );
}

EditSingleEventPage.auth = {
  role: "superadmin",
};

// NextJS functions
export async function getStaticPaths() {
  const data = await getDocuments("events");
  const paths = data.map((event) => ({
    params: {
      eventId: event._id,
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
