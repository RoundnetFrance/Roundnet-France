import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

export default function useClubs() {

  const { data, error } = useSWR('/api/clubs/admin', fetcher)

  return {
    clubs: data,
    isLoading: !error && !data,
    isError: error
  }
}