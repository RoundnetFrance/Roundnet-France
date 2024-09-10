module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // experimental: {
    //   esmExternals: false,
    // },
  },
  compiler: {
    styledComponents: true,
  },
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/lab": {
      transform: "@mui/lab/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  async redirects() {
    return [
      {
        source: "/competition/regles",
        destination: "/regles",
        permanent: true,
      },
      {
        source: "/regles-roundnet-comment-jouer-spike",
        destination: "/regles",
        permanent: true,
      },
      {
        source: "/tournoi-roundnet-france-tournoi-spi",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/championnat-monde-roundnet-spikeball-2020",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/championnat-monde-roundnet-2021",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/inscription-roundnet-masters-germany-2020",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/championnat-monde-roundnet-2020-belgique",
        destination: "/",
        permanent: true,
      },
      {
        source: "/club-roundnet-france-club-spikeball",
        destination: "/clubs-et-communautes/liste-des-clubs",
        permanent: true,
      },
      {
        source: "/achat-spikeball-achat-kit-roundnet",
        destination: "/boutique",
        permanent: true,
      },
      {
        source: "/contact-roundnet-france",
        destination: "/qui-sommes-nous/contact",
        permanent: true,
      },
      {
        source:
          "/post/championnats-de-france-de-roundnet-tour-d-horizon-des-%C3%A9quipes",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/open-de-toulouse-du-10-11-juiillet-les-predictions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/photos-open-roundnet-paris-2021",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/tournoi-de-printemps-du-29-mai-les-pr%C3%A9dictions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/inscription-tournoi-roundnet-toulouse-2020",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/inscription-open-nantes-roundnet-2020",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/championnat-monde-roundnet-2021",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/post/annulation-des-tournois-de-nantes-et-toulouse-report-de-paris",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/qualification-france-championnat-monde-roundnet",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/championnat-monde-roundnet-spikeball-2020",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/championnat-roundnet-region-occitane-toulouse",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/entrainement-roundnet-spikeball-paris-gymnase",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/categories/tournoi-roundnet-europe",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/categories/tournoi-france-roundnet",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/categories/annonces-roundnet",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
