import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

import eventConfig from "../../../../contents/admin/configs/event";
import type { Event } from "../../../../models/collections/Events";
import type { GetStaticPaths, GetStaticProps } from "next/types";
import type { FCWithAuth } from "../../../../models/Utils";

const EditSingleEventPage: FCWithAuth = () => {
	// Get endpoint and ID from URL
	const router = useRouter();
	const { eventId } = router.query;

	// Get event data
	const { data, error, mutate } = useSWR<Event>(`/api/events/${eventId}`, fetcher);
	const isLoading = !error && !data;

	return (
		<AdminContentSingle
			config={eventConfig}
			data={data}
			mutate={mutate}
			documentId={eventId.toString()}
			isLoading={isLoading}
		/>
	);
};

EditSingleEventPage.auth = {
	role: "superadmin",
};

export default EditSingleEventPage;

export const getStaticPaths = (async () => {
	const data = await getDocuments<Event>({ collection: "events" });
	const paths = data.map((event) => ({
		params: {
			eventId: event._id,
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
