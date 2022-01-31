import Image from "next/image";
import NextLink from "next/link";
import { Fragment } from "react";

// MUI IMPORTS
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Stack,
  IconButton,
  Tooltip,
  Avatar,
  Box,
} from "@mui/material";

// MUI ICONS
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FindInPageIcon from "@mui/icons-material/FindInPage";

// COMPONENT IMPORTS
import AdminCardsLoader from "./admin-cards-loader";
import Error from "../../../components/ui/error";
import DataControl from "../../../components/admin/data-control";

export default function AdminContent({ config, form }) {
  const { data, listProps, endpoint, isLoading, isError } = config;

  if (isLoading) return <AdminCardsLoader />;
  if (isError) return <Error />;

  // If data needs validation, to avoid unnecessary "waiting for validation" where no validation has to be done
  const hasValidation = listProps.toCheck !== undefined;

  return (
    <Fragment>
      <DataControl endpoint={endpoint} createForm={form} />

      {/* Grid items */}
      <Grid spacing={2} container>
        {data.map((item) => {
          // Get the card title, subtitle and description from data and listProps
          const cardTitle = item[listProps.title];
          const cardSubtitle =
            item[listProps.subtitle]?.length > 60
              ? item[listProps.subtitle].substring(0, 120) + "..."
              : item[listProps.subtitle];
          const cardImage = item[listProps.image];
          const cardLink = `/rf-admin/edit/${endpoint}/${item._id}`;
          const cardValidated = item[listProps.toCheck];

          return (
            <Grid key={item._id} item xs={12} sm={6} lg={4}>
              <Card sx={{ height: "100%" }}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  sx={{ height: "100%" }}
                >
                  {/* Header */}
                  <CardHeader
                    title={cardTitle}
                    subheader={
                      !hasValidation
                        ? ""
                        : cardValidated
                        ? "Validé"
                        : "En attente de validation"
                    }
                    subheaderTypographyProps={{
                      color: !hasValidation
                        ? "initial"
                        : cardValidated
                        ? "primary"
                        : "error",
                    }}
                    avatar={
                      cardImage ? (
                        <Avatar>
                          <Image
                            src={cardImage || "/images/misc/placeholder.jpg"}
                            alt={cardTitle}
                            title={cardTitle}
                            height="60px"
                            width="60px"
                            objectFit="cover"
                          />
                        </Avatar>
                      ) : (
                        <FindInPageIcon color="secondary" />
                      )
                    }
                    titleTypographyProps={{
                      variant: "h5",
                      color: !hasValidation
                        ? "initial"
                        : cardValidated
                        ? "initial"
                        : "error",
                    }}
                  />
                  <Divider />
                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1, display: "flex" }}>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ flexGrow: 1 }}
                    >
                      <Typography color="text.secondary">
                        {cardSubtitle}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ height: "100%" }}
                        alignItems="center"
                      >
                        <Divider orientation="vertical" flexItem />
                        <Box>
                          <NextLink href={cardLink} passHref>
                            <Tooltip title="Modifier">
                              <IconButton color="secondary">
                                <ArrowForwardIcon />
                              </IconButton>
                            </Tooltip>
                          </NextLink>
                        </Box>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
}
