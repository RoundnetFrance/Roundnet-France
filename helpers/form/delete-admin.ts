interface DeleteAdminProps {
	setLoading: (value: boolean) => void;
	endpoint: string;
	documentId: string;
	setSnackbarState: (value: any) => void;
	adminEndpoint: string;
	router: any;
}

export const deleteAdmin = async ({
	setLoading,
	endpoint,
	documentId,
	setSnackbarState,
	adminEndpoint,
	router,
}: DeleteAdminProps) => {
	setLoading(true);

	try {
		const response = await fetch(`/api/${endpoint}/${documentId}`, {
			method: "DELETE",
		});

		// If response is not ok, manually throw an error
		if (!response.ok) {
			throw new Error(response.statusText);
		}
	} catch (error) {
		// If error, set error state and return original data for mutate function
		setSnackbarState({
			open: true,
			message:
				error.message || "Une erreur est survenue lors de la suppression",
			severity: "error",
		});
	} finally {
		setLoading(false);
	}

	setSnackbarState({
		open: true,
		message: "Suppression effectuée. Redirection...",
		severity: "success",
	});
	// Redirect to ${adminEndpoint} after 1.5 seconds
	setTimeout(() => {
		router.push(adminEndpoint);
	}, 1500);
};
