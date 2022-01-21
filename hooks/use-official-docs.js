import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

export default function useOfficialDocs(doctype) {

  const { data, error } = useSWR(`/api/official-docs?doctype=${doctype}`, fetcher)

  return {
    officialDocs: data,
    isLoading: !error && !data,
    isError: error
  }
}