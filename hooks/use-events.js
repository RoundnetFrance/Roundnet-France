import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";

export default function useEvents() {
  const { data, error, ...rest } = useSWR("/api/events", fetcher, {
    revalidateOnFocus: false,
  });

  return {
    events: data,
    isLoading: !error && !data,
    isError: error,
  };
}
