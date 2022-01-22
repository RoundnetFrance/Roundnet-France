import { useState } from 'react';

// MUI IMPORTS
import { Dialog as MUIDialog, DialogContent, DialogActions, DialogTitle, Button } from '@mui/material';

export default function Dialog({ children, title }) {  // Handle dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    handleRefresh();
    setOpen(false);
  };

  return (
    <MUIDialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fermer</Button>
        {/* <Button onClick={handleClose}>Créer</Button> */}
      </DialogActions>
    </MUIDialog>
  );
}
