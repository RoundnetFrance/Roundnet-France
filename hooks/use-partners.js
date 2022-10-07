import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";

export default function usePartners() {
  const { data, error } = useSWR("/api/partners", fetcher);

  return {
    partners: data,
    isLoading: !error && !data,
    isError: error,
  };
}
