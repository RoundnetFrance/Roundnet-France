import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";
import type { FederationMember } from "../models/collections/FederationMembers";

export default function useFederationMembers() {
	const { data, error } = useSWR<FederationMember[]>(
		"/api/federation-members",
		fetcher,
	);

	return {
		members: data,
		isLoading: !error && !data,
		isError: error,
	};
}
