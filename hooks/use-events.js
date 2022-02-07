import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";

export default function useEvents() {
  const { data, error } = useSWR("/api/events", fetcher);

  return {
    events: data,
    isLoading: !error && !data,
    isError: error,
  };
}
