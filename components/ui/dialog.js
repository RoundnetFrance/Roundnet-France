import propTypes from 'prop-types';

// MUI IMPORTS
import { Dialog as MUIDialog, DialogContent, DialogActions, DialogTitle, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function Dialog({ children, title, open, handleClose, cancelText, confirmButton, onClickCancel }) {
  // Handle fullwidth dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MUIDialog
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
    >

      {title && <DialogTitle>{title}</DialogTitle>}

      <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClickCancel ? onClickCancel : handleClose}>{cancelText}</Button>
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
  onClickCancel: propTypes.func,
};

Dialog.defaultProps = {
  title: null,
  cancelText: 'Fermer',
  confirmButton: null,
  onClickCancel: null,
};
