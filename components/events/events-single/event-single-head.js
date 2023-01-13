import Image from "next/image";
import { useState } from "react";
import propTypes from "prop-types";
import { useSession } from "next-auth/react";

// MUI IMPORTS
import {
  Stack,
  Box,
  Typography,
  Link as MUILink,
  Dialog,
  Paper,
  Icon,
} from "@mui/material";

// MUI ICONS
import PinDropIcon from "@mui/icons-material/PinDrop";
import EventIcon from "@mui/icons-material/Event";
import MyLocationIcon from "@mui/icons-material/MyLocation";

// COMPONENTS IMPORT
import Link from "../../ui/link";
import RowCenteredStack from "../../ui/row-centered-stack";

export default function EventSingleHead({
  id,
  title,
  city,
  date,
  image,
  address,
  dateEnd,
}) {
  // Handle session for edit link
  const { data: session } = useSession();

  // Handle image modal state
  const [imageModalOpen, setImageModalOpen] = useState(false);
  function handleModalOpen() {
    setImageModalOpen(true);
  }
  function handleModalClose() {
    setImageModalOpen(false);
  }

  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: { xs: 2, md: 4 } }}
      gap={2}
    >
      <Box width={{ xs: "100%", md: "60%" }}>
        {/* Edit link if session */}
        {session && (
          <RowCenteredStack sx={{ mb: 1 }}>
            <Icon fontSize="small" color="primary">
              edit
            </Icon>
            <Typography variant="body1">
              <Link href={`/rf-admin/edit/events/${id}`}>Modifier</Link>
            </Typography>
          </RowCenteredStack>
        )}

        {/* Title */}
        <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        {/* City */}
        <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 0.5 }}>
          <PinDropIcon color="disabled" fontSize="mdall" />
          <Typography
            variant="body1"
            color="text.disabled"
            sx={{ fontWeight: "bold" }}
          >
            {city}
          </Typography>
        </Stack>
        {/* Address (optional) */}
        {address && (
          <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 0.5 }}>
            <MyLocationIcon color="disabled" fontSize="mdall" />
            <Typography
              variant="body1"
              color="text.disabled"
              sx={{ fontWeight: "bold" }}
            >
              <MUILink
                href={`https://www.google.com/maps/search/${address} ${city}`}
                color="text.disabled"
                target="_blank"
              >
                {address}
              </MUILink>
            </Typography>
          </Stack>
        )}
        {/* Date */}
        <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 2 }}>
          <EventIcon color="disabled" fontSize="mdall" />
          <Typography
            variant="body1"
            color="text.disabled"
            sx={{ fontWeight: "bold" }}
          >
            {dateEnd ? "Du" : "Le"}{" "}
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }) || "TBD"}
            {dateEnd &&
              " au " +
                new Date(dateEnd).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
          </Typography>
        </Stack>
      </Box>
      <Paper
        sx={{
          cursor: "pointer",
          position: "relative",
          height: { xs: "300px", sm: "200px" },
          minWidth: { xs: "100%", sm: "200px" },
          maxWidth: { xs: "100%", sm: "200px" },
        }}
        onClick={handleModalOpen}
      >
        <Image
          src={image}
          alt={title}
          title={title}
          style={{ objectFit: "cover" }}
          fill
        />
      </Paper>

      {/* Image Modal */}
      <Dialog
        open={imageModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-image-title"
        aria-describedby="modal-image-description"
      >
        <Paper>
          <Image
            src={image || "/images/pages/event-single/placeholder.jpg"}
            alt={title}
            title={title}
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
          />
        </Paper>
      </Dialog>
    </Stack>
  );
}

EventSingleHead.propTypes = {
  title: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  image: propTypes.string,
  address: propTypes.string,
  dateEnd: propTypes.string,
};

EventSingleHead.defaultProps = {
  image: "/images/pages/event-single/placeholder.jpg",
  address: null,
  dateEnd: null,
};
