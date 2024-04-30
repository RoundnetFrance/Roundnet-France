import useSWR from "swr";
import fetcher from "../lib/swr-fetcher";
import type {
	DocType,
	OfficialDocument,
} from "../models/collections/OfficialDocs";

export default function useOfficialDocs(doctype: DocType) {
	const { data, error } = useSWR<OfficialDocument[]>(
		`/api/official-docs?doctype=${doctype}`,
		fetcher,
	);

	return {
		officialDocs: data,
		isLoading: !error && !data,
		isError: error,
	};
}
