import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

export default function useFederationMembers() {

  const { data, error } = useSWR('/api/federation-members', fetcher)

  return {
    members: data,
    isLoading: !error && !data,
    isError: error
  }
}