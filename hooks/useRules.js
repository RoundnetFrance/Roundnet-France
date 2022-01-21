import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

// Function is awaiting docType (string)
export default function useRules() {

  const { data, error } = useSWR(`/api/rules`, fetcher)

  return {
    rules: data,
    isLoading: !error && !data,
    isError: error
  }
}