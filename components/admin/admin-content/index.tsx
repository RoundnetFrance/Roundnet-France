import Image from "next/image";
import NextLink from "next/link";
import { Fragment, useState, useEffect } from "react";

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

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FindInPageIcon from "@mui/icons-material/FindInPage";

import { AdminCardsLoader } from "./admin-cards-loader";
import { AdminFilters } from "./admin-filters";
import { Error as ErrorUI } from "../../../components/ui";
import DataControl from "../../../components/admin/data-control";

interface AdminContentProps<T> {
  config: {
    data: T[];
    listProps: {
      title: string;
      subtitle: string;
      image?: string;
      toCheck?: string;
    };
    endpoint: string;
    isLoading: boolean;
    isError?: Error;
  };
  form?: JSX.Element;
}

export const AdminContent = <T extends { _id: string; title?: string }>({
  config,
  form,
}: AdminContentProps<T>) => {
  const { data, listProps, endpoint, isLoading, isError } = config;

  // Handle filtered data + side effect from SWR
  const [completeData, setCompleteData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    setCompleteData(data);
    setFilteredData(data);
  }, [data]);

  if (isError) return <ErrorUI />;

  // If data needs validation, to avoid unnecessary "waiting for validation" where no validation has to be done
  const hasValidation = listProps.toCheck !== undefined;

  return (
    <Fragment>
      <DataControl endpoint={endpoint} createForm={form} />

      <Stack direction={{ xs: "column", md: "row" }} gap={2}>
        <Box width={{ xs: "100%", md: "35%" }}>
          <AdminFilters data={completeData} setData={setFilteredData} />
        </Box>
        <Divider orientation='vertical' flexItem />

        {/* Grid items */}
        {isLoading ? (
          <AdminCardsLoader />
        ) : (
          <Grid spacing={2} container>
            {filteredData?.map((item, index) => {
              // Get the card title, subtitle and description from data and listProps
              const cardTitle = item[listProps.title];
              const cardSubtitle =
                item[listProps.subtitle]?.length > 60
                  ? `${item[listProps.subtitle].substring(0, 120)}...`
                  : item[listProps.subtitle];
              const cardImage = listProps.image && item[listProps.image];
              const cardLink = `/rf-admin/edit/${endpoint}/${item._id}`;
              const cardValidated =
                listProps.toCheck && item[listProps.toCheck];
              return (
                <Grid key={item._id} item xs={12} sm={6} lg={6}>
                  <Card sx={{ height: "100%" }}>
                    <Stack
                      direction='column'
                      justifyContent='space-between'
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
                                src={
                                  cardImage || "/images/misc/placeholder.jpg"
                                }
                                alt={cardTitle}
                                title={cardTitle}
                                height={60}
                                width={60}
                                style={{ objectFit: "cover" }}
                              />
                            </Avatar>
                          ) : (
                            <FindInPageIcon color='secondary' />
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
                          direction='row'
                          spacing={2}
                          alignItems='center'
                          justifyContent='space-between'
                          sx={{ flexGrow: 1 }}
                        >
                          <Typography color='text.secondary'>
                            {cardSubtitle}
                          </Typography>
                          <Stack
                            direction='row'
                            spacing={1}
                            sx={{ height: "100%" }}
                            alignItems='center'
                          >
                            <Divider orientation='vertical' flexItem />
                            <Box>
                              <NextLink href={cardLink} passHref legacyBehavior>
                                <Tooltip title='Modifier'>
                                  <IconButton color='secondary'>
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
        )}
      </Stack>
    </Fragment>
  );
};
