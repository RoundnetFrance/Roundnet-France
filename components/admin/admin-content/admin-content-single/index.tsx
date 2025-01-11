import { useState, useEffect, type FC } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import patchAdmin from "../../../../helpers/form/patch-admin";
import { deleteAdmin } from "../../../../helpers/form/delete-admin";

import {
	Container,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Box,
	Stack,
	Typography,
	Snackbar,
	Alert,
	Slide,
	Button,
	Skeleton,
	useMediaQuery,
	type AlertColor,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { DataTabs } from "./data-tabs";
import DataFields from "./data-fields";
import { Dialog, Error as ErrorUI, Link, PageTitle } from "../../../ui";
import { DataFieldsLoader } from "./data-fields-loader";
import type { KeyedMutator } from "swr/dist/types";
import type { AdminSingleConfig } from "../../../../models/Admin";

interface AdminContentSingleProps<T = any> {
	config: AdminSingleConfig;
	data: T;
	mutate: KeyedMutator<T>;
	documentId: string;
	isLoading: boolean;
}

const AdminContentSingle: FC<AdminContentSingleProps> = ({
	config: {
		title,
		tabs,
		endpoint,
		adminEndpoint,
		frontEndpoint,
		contentToSlug,
	},
	data,
	mutate,
	documentId,
	isLoading,
}) => {
	const router = useRouter();
	const theme = useTheme();
	const higherThanSm = useMediaQuery(theme.breakpoints.up("sm"));

	// Handle tab state
	const [currentTab, setCurrentTab] = useState(0);
	function handleTabChange(event, newValue) {
		setCurrentTab(newValue);
	}

	// Handle values state
	const [values, setValues] = useState(data);
	useEffect(() => {
		setValues(data);
	}, [data]);
	function handleValuesChange(id, value) {
		setValues((prev) => ({ ...prev, [id]: value }));
	}

	// Handle loading state on submit/delete button
	const [loading, setLoading] = useState(false);

	// Handle snackbar state
	const [snackbarState, setSnackbarState] = useState<{
		open: boolean;
		message: string;
		severity: AlertColor;
	}>({
		open: false,
		message: "",
		severity: "info",
	});
	function handleSnackbarClose() {
		setSnackbarState((prev) => ({
			...prev,
			open: false,
		}));
	}

	// Handle modal state and open/close functions
	const [dialogOpen, setDialogOpen] = useState(false);
	function handleDialogOpen() {
		setDialogOpen(true);
	}
	function handleDialogClose() {
		setDialogOpen(false);
	}

	// Check if data is empty
	if (data && Object.keys(data).length === 0)
		return <ErrorUI message="Aucun document ne possède cet identifiant." />;

	// Extract tab names from config data
	const tabNames = tabs.map((tab) => tab.name);

	// *** PATCH click button function
	async function handleUpdate(event) {
		event.preventDefault();

		// Patch (SWR, fetch, revalidate)
		try {
			await patchAdmin({
				setLoading,
				setSnackbarState,
				tabs,
				mutate,
				contentToSlug,
				values,
				endpoint,
				documentId,
			});
		} catch (err) {
			setSnackbarState({
				open: true,
				message: err.message || "Une erreur est survenue",
				severity: "error",
			});
		} finally {
			setLoading(false);
		}
	}

	// Delete click button function
	async function handleDelete(event) {
		event.preventDefault();
		try {
			await deleteAdmin({
				setLoading,
				setSnackbarState,
				endpoint,
				documentId,
				adminEndpoint,
				router,
			});
		} catch (err) {
			setSnackbarState({
				open: true,
				message: err.message || "Une erreur est survenue",
				severity: "error",
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<Container maxWidth="md" sx={{ mt: 5, mb: 2 }}>
			<PageTitle title={title} />

			{/* Back buttons */}
			<Stack direction="row" gap={2}>
				<Link href={adminEndpoint} color="secondary" isButton>
					Retour
				</Link>
				<Link href="/rf-admin/dashboard" color="secondary" isButton>
					Dashboard
				</Link>
			</Stack>

			{/* Revalidate info */}
			<Alert severity="info" variant="filled" sx={{ my: 2 }}>
				<Typography variant="body1">
					Les modifications peuvent mettre jusqu&apos;à 10 minutes pour
					s&apos;appliquer complètement. Lorsque ce délai est passé, rechargez
					le cache de la page pour voir les modifications.
				</Typography>
			</Alert>

			<Divider sx={{ mb: 2 }} />

			{/* Main data */}
			<Stack
				direction={{ xs: "column-reverse", md: "row" }}
				justifyContent="space-between"
				alignItems={{ xs: "flex-start", sm: "center" }}
				sx={{ mb: { xs: 2, sm: 4 } }}
				spacing={1}
			>
				<Box sx={{ flexGrow: 1 }}>
					<DataTabs
						currentTab={currentTab}
						handleTabChange={handleTabChange}
						tabs={tabNames}
						isLoading={isLoading}
					/>
				</Box>
				<Stack direction="row" gap={1}>
					{/* Display "View" link of document if frontEndpoint is given */}
					{frontEndpoint && (
						<Link
							href={`/${frontEndpoint}/${values?.slug}`}
							sx={{ mr: 1, px: { xs: 4, sm: 2 } }}
							buttonIcon="visibility"
							buttonVariant="outlined"
							target="_blank"
							disabled={isLoading}
							isButton
						>
							{isLoading ? <Skeleton width={40} /> : "Voir"}
						</Link>
					)}
					<LoadingButton
						variant="contained"
						onClick={handleUpdate}
						loading={loading}
						disabled={isLoading}
						sx={{ minWidth: "150px" }}
						fullWidth={!higherThanSm}
					>
						{isLoading ? <Skeleton sx={{ width: "100%" }} /> : "Enregistrer"}
					</LoadingButton>
				</Stack>
			</Stack>

			<Card>
				{isLoading ? (
					<Box px={2} py={2}>
						<Skeleton variant="rectangular" width={140} height={30} />
						<Skeleton
							variant="rectangular"
							width={340}
							height={20}
							sx={{ mt: 1 }}
						/>
					</Box>
				) : (
					<CardHeader
						title={tabs[currentTab].name}
						titleTypographyProps={{ mb: 0 }}
						subheader={tabs[currentTab].description}
					/>
				)}
				<Divider />
				<CardContent sx={{ p: { xs: 2, md: 2, lg: 4 } }}>
					<Box my={2}>
						{isLoading ? (
							<DataFieldsLoader />
						) : (
							<DataFields
								layout={tabs[currentTab].layout}
								values={values}
								handleValuesChange={handleValuesChange}
							/>
						)}
					</Box>
				</CardContent>
			</Card>

			<Divider sx={{ my: 4 }} />

			<Button
				variant="contained"
				color="error"
				fullWidth
				onClick={handleDialogOpen}
			>
				Supprimer l&apos;élément
			</Button>

			{/* Snackbar for error display */}
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={snackbarState.open}
				autoHideDuration={5000}
				onClose={handleSnackbarClose}
				TransitionComponent={Slide}
			>
				<Alert
					onClose={handleSnackbarClose}
					severity={snackbarState.severity || "info"}
					sx={{ width: "100%" }}
				>
					{snackbarState.message}
				</Alert>
			</Snackbar>

			{/* Dialog */}
			<Dialog
				title="Supprimer"
				open={dialogOpen}
				handleClose={handleDialogClose}
				cancelText="Annuler"
				confirmButton={
					<LoadingButton
						loading={loading}
						variant="contained"
						color="error"
						onClick={handleDelete}
					>
						Supprimer
					</LoadingButton>
				}
				color="error"
			>
				<Typography mb={2}>
					Êtes-vous sûr de vouloir supprimer cet élément ?
				</Typography>
				<Alert severity="error">
					Toute suppression est définitive. Si des fichiers sont liés à la
					suppression (images, documents), ils seront également supprimés.
				</Alert>
			</Dialog>
		</Container>
	);
};

export default AdminContentSingle;
