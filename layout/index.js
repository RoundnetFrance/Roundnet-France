import { Stack, Box } from "@mui/material";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function Layout({ children, session, adminLayout }) {
  return (
    <Stack direction="column" sx={{ minHeight: "100vh" }}>
      <Header adminLayout={adminLayout} session={session} />
      <Box
        flexGrow={1}
        sx={{
          backgroundColor: adminLayout ? "primary.lightest" : "initial",
          minHeight: "80vh",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}

export default Layout;
