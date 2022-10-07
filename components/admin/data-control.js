import { PropTypes } from "prop-types";
import { useSWRConfig } from "swr";
import { Fragment, useState } from "react";

// MUI IMPORTS
import { Button, Stack } from "@mui/material";

// MUI ICONS
import { Add as AddIcon, Cached as CachedIcon } from "@mui/icons-material";

// COMPONENT IMPORTS
import Dialog from "../ui/dialog";

export default function DataControl({ endpoint, createForm }) {
  // Handle refresh button
  const { mutate } = useSWRConfig();
  const handleRefresh = async () => {
    await mutate(`/api/${endpoint}`);
  };

  // Handle dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    handleRefresh();
    setOpen(false);
  };

  return (
    <Fragment>
      {/* Button Stack */}
      <Stack spacing={2} direction="row" mb={4}>
        {createForm && (
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddIcon />}
            aria-label="create rule"
            onClick={handleClickOpen}
          >
            Ajouter
          </Button>
        )}
        <Button
          color="primary"
          variant="outlined"
          startIcon={<CachedIcon />}
          aria-label="create rule"
          onClick={handleRefresh}
        >
          Actualiser les données
        </Button>
      </Stack>

      {/* Dialog */}
      {createForm && (
        <Dialog open={open} handleClose={handleClose}>
          {createForm}
        </Dialog>
      )}
    </Fragment>
  );
}

DataControl.propTypes = {
  endpoint: PropTypes.string.isRequired,
  createForm: PropTypes.element,
};

DataControl.defaultProps = {
  createForm: null,
};
