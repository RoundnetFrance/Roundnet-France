import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Dialog as MUIDialog,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";

interface DialogProps {
  children: React.ReactNode;
  title?: string;
  open: boolean;
  handleClose: () => void;
  cancelText?: string;
  confirmButton?: React.ReactNode;
  color?: "primary" | "secondary" | "error";
}

export default function Dialog({
  cancelText = "Fermer",
  color,
  confirmButton = undefined,
  children,
  handleClose,
  open,
  title = "Action",
}: Readonly<DialogProps>) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MUIDialog open={open} onClose={handleClose} fullScreen={fullScreen}>
      {/* Title */}
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <strong>{title}</strong>
          <IconButton aria-label="close dialog" onClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <Divider />

      {/* Content */}
      <DialogContent
        sx={{ minWidth: { xs: "70vw", sm: "400px", md: "500px" } }}
      >
        {children}
      </DialogContent>

      {/* Button Actions */}
      <DialogActions>
        <Button color={color} onClick={handleClose}>
          {cancelText}
        </Button>
        {confirmButton}
      </DialogActions>
    </MUIDialog>
  );
}

Dialog.defaultProps = {
  title: "Action",
  cancelText: "Fermer",
  confirmButton: null,
  color: "primary",
};
