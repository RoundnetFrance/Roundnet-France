import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";
import type { Event } from "../models/collections/Events";

export default function useEvents() {
	const { data, error } = useSWR<Event[]>("/api/events", fetcher, {});

	return {
		events: data,
		isLoading: !error && !data,
		isError: error,
	};
}
