import propTypes from 'prop-types';

// MUI IMPORTS
import { Dialog as MUIDialog, DialogContent, DialogActions, DialogTitle, Button, useMediaQuery, Stack, Divider, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// MUI ICONS
import CloseIcon from '@mui/icons-material/Close';


export default function Dialog({ children, title, open, handleClose, cancelText, confirmButton, color }) {
  // Handle fullwidth dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MUIDialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
    >

      {/* Title */}
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <strong>{title}</strong>
          <IconButton aria-label="close dialog" onClick={handleClose}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <Divider />

      {/* Content */}
      <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
        {children}
      </DialogContent>

      {/* Button Actions */}
      <DialogActions>
        <Button color={color} onClick={handleClose}>{cancelText}</Button>
        {confirmButton && confirmButton}
      </DialogActions>

    </MUIDialog>
  );
}

Dialog.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string,
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  cancelText: propTypes.string,
  confirmButton: propTypes.node,
  color: propTypes.string,
};

Dialog.defaultProps = {
  title: 'Action',
  cancelText: 'Fermer',
  confirmButton: null,
  color: 'primary',
};
