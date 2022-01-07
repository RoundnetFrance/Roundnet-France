import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

export default function useOfficialDocs() {

  const { data, error } = useSWR('/api/official-docs', fetcher)

  return {
    officialDocs: data,
    isLoading: !error && !data,
    isError: error
  }
}