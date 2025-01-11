import { useRouter } from "next/router";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Divider from "@mui/material/Divider";

import { BoxWrapper, Link } from "../../components/ui";

export default function AdminErrorPage() {
	const router = useRouter();
	const { error } = router.query;

	return (
		<Container maxWidth="xs" sx={{ my: 8 }}>
			<BoxWrapper title="Connexion">
				<Alert severity="error">
					<AlertTitle>
						<strong>Erreur</strong>
					</AlertTitle>
					{error}
				</Alert>
				<Divider />
				<Typography variant="body2">
					<Link href="/rf-admin">Retour</Link>
				</Typography>
			</BoxWrapper>
		</Container>
	);
}
