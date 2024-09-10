import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";
import type { User } from "../models/collections/Users";

export default function useMe() {
	const url = "/api/users/me";
	const { data, error } = useSWR<User>(url, fetcher);

	return {
		user: data,
		isLoading: !error && !data,
		isError: error,
	};
}
