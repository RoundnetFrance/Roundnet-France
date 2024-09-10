import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";

export default function usePartners<T>() {
	const { data, error } = useSWR<T>("/api/partners", fetcher);

	return {
		partners: data,
		isLoading: !error && !data,
		isError: error,
	};
}
