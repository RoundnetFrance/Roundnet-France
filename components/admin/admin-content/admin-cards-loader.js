import {
  Grid,
  Card,
  CardContent,
  Skeleton,
  Stack,
  Divider,
  Box,
} from "@mui/material";

const cardsToCreate = 8;

export default function AdminCardsLoader() {
  const cards = [];
  for (let i = 0; i < cardsToCreate; i++) {
    cards.push(
      <Grid item xs={12} md={6} lg={4} key={i}>
        <Card>
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Skeleton variant="rect" width={60} height={60} />
              <Skeleton variant="text" width="60%" height={60} />
            </Stack>
          </CardContent>
          <Divider flexItem />
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box sx={{ width: "100%" }}>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="87%" />
                <Skeleton variant="text" width="91%" />
              </Box>
              <Divider flexItem orientation="vertical" />
              <Skeleton variant="circular" width={50} height={40} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid spacing={2} container sx={{ alignItems: "center" }}>
      {cards}
    </Grid>
  );
}
