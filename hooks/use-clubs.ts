import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";
import type { Club } from "../models/collections/Clubs";

export default function useClubs() {
	const { data, error } = useSWR<Club[], Error>("/api/clubs", fetcher);

	return {
		clubs: data,
		isLoading: !error && !data,
		isError: error,
	};
}
