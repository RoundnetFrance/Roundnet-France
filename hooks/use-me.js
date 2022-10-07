import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

export default function useMe() {
  const url = '/api/users/me';
  const { data, error } = useSWR(url, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}