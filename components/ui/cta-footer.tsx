import {
  Button,
  Container,
  Link as MUILink,
  Stack,
  Typography,
} from "@mui/material";

import Link from "../ui/link";

interface LinkType {
  url: string;
  text: string;
}

interface CTAFooterProps {
  title: string;
  subtitle: string;
  mainLink: LinkType;
  altLink?: LinkType;
}

export default function CTAFooter({
  title,
  subtitle,
  mainLink,
  altLink = undefined,
}: Readonly<CTAFooterProps>) {
  const isExternalLink = mainLink?.url.startsWith("http");

  return (
    <Container
      maxWidth='sm'
      sx={{
        my: 4,
        p: 10,
        overflow: "visible",
        backgroundImage: "url(/images/misc/cta-footer.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        textAlign: "center",
      }}
    >
      <Typography variant='h4' my={2}>
        <strong>{title}</strong>
      </Typography>
      <Typography variant='h6'>{subtitle}</Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={{
          my: 4,
          mt: 8,
        }}
      >
        <Button variant='contained' color='primary' size='large'>
          {isExternalLink ? (
            <MUILink
              href={mainLink.url}
              target='_blank'
              color='#fff'
              underline='none'
            >
              {mainLink.text}
            </MUILink>
          ) : (
            <Link href={mainLink.url} color='#fff' underline='none'>
              {mainLink.text}
            </Link>
          )}
        </Button>
        {altLink && (
          <Button variant='contained' color='secondary' size='large'>
            <Link href={altLink.url} color='#fff' underline='none'>
              {altLink.text}
            </Link>
          </Button>
        )}
      </Stack>
    </Container>
  );
}
