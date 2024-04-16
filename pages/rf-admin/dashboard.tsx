import { useSession } from "next-auth/react";
import NextLink from "next/link";

import Masonry from "@mui/lab/Masonry";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DashboardWrapper from "../../components/layout/admin/dashboard-wrapper";
import { IconWithBackground } from "../../components/ui";
import { dashboardElements } from "../../contents/admin";
import type { GetStaticProps } from "next";
import type { FCWithAuth } from "../../models/Utils";

const DashboardPage: FCWithAuth = () => {
  const { data: session } = useSession();
  return (
    <DashboardWrapper>
      <Box my={4}>
        {/* Intro Paper */}
        <Paper
          sx={{
            backgroundColor: "primary.main",
            py: { xs: 2, sm: 4, md: 8 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent='space-between'
            spacing={1}
          >
            <Typography variant='h2' color='#fff' sx={{ flexGrow: 0.5 }}>
              <strong>Bonjour,</strong>
              <br />
              {session?.user?.name}
            </Typography>
            <Divider orientation='vertical' flexItem />
            <Box textAlign={{ xs: "initial", md: "right" }}>
              <Typography variant='h6' color='#fff'>
                <strong>Administrateur</strong>
              </Typography>
              <Typography variant='h6' color='#fff'>
                {session?.user?.email}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          spacing={2}
          sx={{ my: 4 }}
        >
          {dashboardElements.map((element) => (
            <Card key={element._id}>
              <CardActionArea>
                <NextLink href={element.url} passHref legacyBehavior>
                  <CardContent sx={{ p: 2 }}>
                    <Stack
                      direction={{ xs: "column-reverse", sm: "row" }}
                      justifyContent='space-around'
                      alignItems={{ xs: "center", sm: "flex-start" }}
                      spacing={2}
                    >
                      <Box>
                        <Typography gutterBottom variant='h5' component='div'>
                          {element.label}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {element.description}
                        </Typography>
                      </Box>
                      <IconWithBackground
                        icon={element.icon}
                        size={40}
                        color={element.color ?? "primary"}
                      />
                    </Stack>
                  </CardContent>
                </NextLink>
              </CardActionArea>
              <Divider />

              <CardActionArea>
                <NextLink href={element.url} passHref>
                  <CardActions
                    sx={{
                      backgroundColor: `${element.color || "primary"}.main`,
                      justifyContent: "center",
                    }}
                  >
                    <Stack direction='row' spacing={1}>
                      <ModeEditIcon />
                      <Typography color='#fff'>
                        <strong>Administrer</strong>
                      </Typography>
                    </Stack>
                  </CardActions>
                </NextLink>
              </CardActionArea>
            </Card>
          ))}
        </Masonry>
      </Box>
    </DashboardWrapper>
  );
};

DashboardPage.auth = {
  role: "superadmin",
};

export default DashboardPage;

export const getStaticProps = (async () => {
  return {
    props: {
      adminLayout: true,
    },
  };
}) satisfies GetStaticProps;
