import fetcher from "../lib/swr-fetcher";
import useSWR from "swr";

export default function useClubs() {
  const { data, error } = useSWR("/api/posts", fetcher);

  return {
    blogPosts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
