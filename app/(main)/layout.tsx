import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import Layout from "../../layout";
import type { Metadata } from "next";
import rfMuiTheme from "../../styles/rf-mui-theme";
import { Urbanist } from "next/font/google";

import "../../styles/globals.css";
import "material-icons/iconfont/material-icons.css";

export const metadata: Metadata = {
  title: "Roundnet France - Fédération française de roundnet",
  description: "Site officiel de la fédération française de roundnet",
  icons: [
    {
      url: "/images/logos/roundnet-france-tp.png",
      sizes: "224x224",
      type: "image/png",
    },
  ],
};

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr-FR' className={urbanist.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={rfMuiTheme}>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
