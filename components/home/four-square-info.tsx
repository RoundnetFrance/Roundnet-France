import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { fourSquareContent } from "../../contents/home/index";

import type { FC } from "react";
import { HeaderWithIcon, Link } from "../../components/ui";

export const FourSquareInfo: FC = () => {
  return (
    <Container id="methods" maxWidth="lg">
      <Box my={8}>
        <HeaderWithIcon icon="info" title="Les démarches de la fédération" />
      </Box>

      <Grid container item spacing={4}>
        {fourSquareContent.map((content) => (
          <Grid item xs={12} md={6} key={content._id}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 4,
                backgroundColor: "primary.main",
                height: "95%",
              }}
            >
              <Stack
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                {/* Content */}
                <div>
                  <Box mb={2}>
                    <Stack mb={2} direction="row" alignItems="center">
                      <Icon sx={{ color: "neutral.main" }}>{content.icon}</Icon>
                      <Typography
                        ml={2}
                        variant="h5"
                        component="h3"
                        color="neutral.main"
                        fontWeight="bold"
                      >
                        {content.title}
                      </Typography>
                    </Stack>
                    <Divider color="neutral.main" flexItem />
                  </Box>
                  {content.content.map((paragraph) => (
                    <Typography
                      variant="body1"
                      component="div"
                      color="neutral.main"
                      key={paragraph}
                      mb={2}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </div>

                {/* Buttons */}
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 1, md: 2 }}
                >
                  {content.links.map((link) => (
                    <Button
                      key={link.href}
                      variant="contained"
                      color="secondary"
                      sx={{ width: "fit-content" }}
                      startIcon={<ArrowCircleRightIcon />}
                    >
                      <Link
                        href={link.href}
                        color="neutral.main"
                        underline="none"
                      >
                        {link.text || "En savoir plus"}
                      </Link>
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
