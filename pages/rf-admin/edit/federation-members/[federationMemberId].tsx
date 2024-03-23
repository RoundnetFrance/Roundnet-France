import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

import federationMemberConfig from "../../../../contents/forms/federation-members";
import type { FCWithAuth } from "../../../../models/Utils";
import type { GetStaticPaths, GetStaticProps } from "next/types";
import type { FederationMember } from "../../../../models/collections/FederationMembers";

const EditSingleFederationMemberPage: FCWithAuth = () => {
	// Get endpoint and ID from URL
	const router = useRouter();
	const { federationMemberId } = router.query;

	// Get federationMember data
	const { data, error, mutate } = useSWR<FederationMember>(
		`/api/federation-members/${federationMemberId}`,
		fetcher,
	);
	const isLoading = !error && !data;

	return (
		<AdminContentSingle
			config={federationMemberConfig}
			data={data}
			mutate={mutate}
			documentId={federationMemberId.toString()}
			isLoading={isLoading}
		/>
	);
};

EditSingleFederationMemberPage.auth = {
	role: "superadmin",
};

export default EditSingleFederationMemberPage;

export const getStaticPaths = (async () => {
		const data = await getDocuments<FederationMember>({ collection: "federation-members" });
		const paths = data.map((federationMember) => ({
			params: {
				federationMemberId: federationMember._id,
			},
		}));
		return { paths, fallback: "blocking" };
	}) satisfies GetStaticPaths;

export const getStaticProps = (() => {
		return {
			props: {
				adminLayout: true,
			},
		};
	}) satisfies GetStaticProps;
