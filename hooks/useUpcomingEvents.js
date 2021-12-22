import fetcher from '../lib/swr-fetcher';
import useSWR from 'swr';

export default function useUpcomingEvents() {

  const { data, error } = useSWR('/api/calendar', fetcher)

  return {
    events: data,
    isLoading: !error && !data,
    isError: error
  }
}