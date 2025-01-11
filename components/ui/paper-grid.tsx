import React, { FC } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import IconWithBackground from "./icon-with-background";

interface PaperGridItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface PaperGridProps {
  items: PaperGridItem[];
}

const PaperGrid: FC<PaperGridProps> = ({ items }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              background: `url(/images/misc/blob-lighter-secondary.svg) no-repeat bottom right`,
            }}
          >
            <Stack
              component={Paper}
              p={4}
              elevation={4}
              sx={{
                borderRadius: 2,
              }}
            >
              <IconWithBackground icon={item.icon} size={30} color="primary" />
              <Typography variant="h5" component="h4" my={2}>
                <strong>{item.title}</strong>
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PaperGrid;
