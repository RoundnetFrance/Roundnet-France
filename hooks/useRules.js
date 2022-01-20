import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

export default function useClubs() {

  const { data, error } = useSWR('/api/rules', fetcher)

  return {
    rules: data,
    isLoading: !error && !data,
    isError: error
  }
}