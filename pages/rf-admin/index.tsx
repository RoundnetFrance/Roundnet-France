import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, Fragment } from "react";

import { Box, Button, Container, Typography } from "@mui/material";

import { BoxWrapper, Loader } from "../../components/ui";

export default function AdminPage() {
	const router = useRouter();
	// Handle redirect if no session
	const { data: session, status } = useSession();

	useEffect(() => {
		if (session) router.push(`/rf-admin/dashboard`);
	}, [router, session]);

	// If loading, display loading screen
	if (status === "loading")
		return (
			<Box mt={24}>
				<Loader />
			</Box>
		);

	if (status === "unauthenticated")
		return (
			<Container maxWidth="xs" sx={{ mt: 8 }}>
				<BoxWrapper title="Se connecter">
					<Fragment>
						<Typography variant="h6" align="center">
							Veuillez vous identifier pour accéder à l&apos;administration.
						</Typography>
						<Button variant="outlined" onClick={() => signIn()}>
							Se connecter
						</Button>
						<Link href="/rf-admin/signup" passHref legacyBehavior>
							<Button color="secondary">Créer un compte</Button>
						</Link>
					</Fragment>
				</BoxWrapper>
			</Container>
		);

	return (
		<Box mt={24}>
			<Loader />
		</Box>
	);
}
