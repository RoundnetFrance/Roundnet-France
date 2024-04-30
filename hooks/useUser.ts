import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";

export default function useUser(id: string | undefined = undefined) {
	// If id, getUser ; else getUsers
	let url = "/api/users";
	if (id) {
		url = `/api/user/${id}`;
	}

	const { data, error } = useSWR(url, fetcher);

	return {
		user: data,
		isLoading: !error && !data,
		isError: error,
	};
}
