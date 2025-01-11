import Image from "next/image";
import { Box, Stack, Container, Typography } from "@mui/material";
import { Link } from "../../components/ui";
import { rawLogos } from "../../contents/footer";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <Box bgcolor='primary.dark' py={4}>
      <Container maxWidth='lg'>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent='space-between'
        >
          {/* Footer left */}
          <Box>
            {/* Footer title */}
            <Typography variant='h6' color='white'>
              Roundnet France
            </Typography>
            <Typography variant='body2' color='white' mb={2}>
              Fédération française officielle de roundnet
            </Typography>

            {/* Footer links */}
            <Typography variant='body2' color='white'>
              <Link href='/qui-sommes-nous/contact' color='#fff'>
                Contact
              </Link>
              {" | "}
              <Link href='/mentions-legales' color='#fff'>
                Mentions légales
              </Link>
              {" | "}
              <Link href='/liens' color='#fff'>
                Liens
              </Link>
              {" | "}
              <Link href='/partenaires' color='#fff'>
                Partenaires
              </Link>
            </Typography>
          </Box>

          {/* Footer right - Logos */}
          <Box>
            {rawLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width={logo.width}
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
