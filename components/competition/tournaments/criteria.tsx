import Image from "next/image";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { FC } from "react";

const Criteria: FC = () => {
	return (
		<Stack
			direction={{ xs: "column", md: "row" }}
			justifyContent="space-evenly"
			alignItems="flex-start"
			spacing={2}
			sx={{
				background: `url(/images/misc/blob-lighter-secondary.svg) no-repeat center center`,
			}}
		>
			<Card raised sx={{ width: { xs: "100%", md: "30%" } }}>
				<CardMedia>
					<Box sx={{ position: "relative", width: "100%", height: "140px" }}>
						<Image
							src="/images/pages/competition/competitions-tournois/regles-generales.jpg"
							fill
							style={{ objectFit: "cover" }}
							alt="Règles générales"
						/>
					</Box>
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Règles générales
					</Typography>
					<Divider sx={{ mb: 2 }} />

					<Typography variant="h6">Règles</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						Le tournoi doit suivre la réglementation en vigueur
					</Typography>
					<Typography variant="h6">Communication</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						L&apos;organisateur doit communiquer auprès de la fédération sur les
						dates du tournoi au moins 6 semaines avant
					</Typography>
					<Typography variant="h6">Inscriptions</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						L&apos;ouverture des inscriptions au public doit se faire au minimum
						3 semaines avant la date du tournoi
					</Typography>
					<Typography variant="h6">Mixité régionale</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						Au moins 3 régions françaises différentes doivent être représentées
						dans les participants au tournoi
					</Typography>
				</CardContent>
			</Card>

			<Card raised sx={{ width: { xs: "100%", md: "30%" } }}>
				<CardMedia>
					<Box sx={{ position: "relative", width: "100%", height: "140px" }}>
						<Image
							src="/images/pages/competition/competitions-tournois/deroule-tournoi.jpg"
							fill
							style={{ objectFit: "cover" }}
							alt="Règles générales"
						/>
					</Box>
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Déroulé du tournoi
					</Typography>
					<Divider sx={{ mb: 2 }} />

					<Typography variant="h6">Classement</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						L&apos;organisateur doit communiquer à la fédération un classement
						intégral au plus deux semaines après le tournoi
					</Typography>
					<Typography variant="h6">Arbitrage</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						Un observateur au moins doit être présent pour la finale, et si
						possible pour tous les matchs avez NHZ
					</Typography>
					<Typography variant="h6">No-Hit-Zone</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						1-16 équipes : dès la finale ou avant
						<br />
						17-32 équipes : dès les 1/2 ou avant
						<br />
						33-64 équipes : dès les 1/4 ou avant
					</Typography>
					<Typography variant="h6">Seeding</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						Le déroulement du tournoi doit suivre le seeding donné par le
						classement national à J-5 avant le tournoi
					</Typography>
				</CardContent>
			</Card>

			<Card raised sx={{ width: { xs: "100%", md: "30%" } }}>
				<CardMedia>
					<Box sx={{ position: "relative", width: "100%", height: "140px" }}>
						<Image
							src="/images/pages/competition/competitions-tournois/validation.jpg"
							fill
							style={{ objectFit: "cover" }}
							alt="Règles générales"
						/>
					</Box>
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Validation
					</Typography>
					<Divider sx={{ mb: 2 }} />

					<Typography variant="h6">Poules et bracket</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						Le tournoi doit être réalisé en deux phases : une phase de poules
						suivie d&apos;une phase à élimination directe
					</Typography>
					<Typography variant="h6">Droit de rétractation</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						La fédération se réserve le droit de retirer un tournoi de la liste
						des tournois officiels, et ce jusqu&apos;à 2 semaines après la date
						du tournoi
						<br />
						<br />
						Ce retrait ne pourra être effectué que si le tournoi ne répond pas
						aux critères énoncés par la fédération
					</Typography>
					<Typography variant="h6">Confirmation</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						La fédération s&apos;engage à confirmer les demandes de tournois
						officiels dans les 2 semaines suivant la demande
					</Typography>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default Criteria;
