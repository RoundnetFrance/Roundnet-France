import { Container, Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

const DashboardWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "primary.lightest", minHeight: "80vh" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default DashboardWrapper;
