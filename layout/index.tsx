import { Stack, Box } from "@mui/material";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

interface LayoutProps {
  children: React.ReactNode;
  adminLayout?: boolean;
}

function Layout({ children, adminLayout }: Readonly<LayoutProps>) {
  return (
    <Stack direction='column' sx={{ minHeight: "100vh" }}>
      <Header adminLayout={adminLayout ?? false} />
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
