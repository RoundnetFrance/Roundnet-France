import { Button, IconButton, Stack } from "@mui/material";

import { Facebook, InsertLink, Instagram } from "@mui/icons-material";
import type { FC } from "react";

interface Link {
  source?: string;
  url: string;
  text?: string;
}

interface LinkButtonsProps {
  links: Link[] | string;
  imageToLeft?: boolean;
}

const LinkButtons: FC<LinkButtonsProps> = ({ links, imageToLeft }) => {
  if (typeof links === "string") {
    const isExternal = links.startsWith("http");

    return (
      <Button
        sx={{
          width: "fit-content",
        }}
        variant="contained"
        color="secondary"
        href={links}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        startIcon={isExternal ? <InsertLink /> : null}
      >
        Visiter le site
      </Button>
    );
  }

  // If links is an array of links, display them as buttons
  return (
    <Stack
      direction="row"
      spacing={0}
      justifyContent={{
        xs: "center",
        md: imageToLeft ? "flex-start" : "flex-end",
      }}
      sx={{ flexWrap: "wrap" }}
    >
      {links.map((link) => {
        // If no link is provided, skip the render
        if (!link.url) {
          return;
        }

        const isExternal = link.url.startsWith("http");
        switch (link.source) {
          case "website":
            return (
              <Button
                key={link.url}
                sx={{
                  width: "fit-content",
                  mr: 1,
                }}
                variant="contained"
                size="small"
                color="secondary"
                href={link.url}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
                startIcon={isExternal ? <InsertLink /> : null}
              >
                Site
              </Button>
            );

          case "facebook":
            return (
              <IconButton
                key={link.url}
                aria-label={link.source + " icon"}
                href={link.url}
                color="secondary"
                size="small"
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
              >
                <Facebook />
              </IconButton>
            );

          case "instagram":
            return (
              <IconButton
                key={link.url}
                aria-label={link.source + " icon"}
                href={link.url}
                color="secondary"
                size="small"
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
              >
                <Instagram />
              </IconButton>
            );

          default:
            return (
              <Button
                key={link.url}
                sx={{
                  width: "fit-content",
                  mr: imageToLeft ? 1 : 0,
                  ml: imageToLeft ? 0 : 1,
                  mb: 1,
                }}
                variant="contained"
                // size="small"
                color="secondary"
                href={link.url}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
                startIcon={isExternal ? <InsertLink /> : null}
              >
                {link.text}
              </Button>
            );
        }
      })}
    </Stack>
  );
};

export default LinkButtons;
