import Image from "next/image";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import type { FC, ReactNode } from "react";

interface HalfImageProps {
  image: string;
  children: ReactNode;
}

const HalfImage: FC<HalfImageProps> = ({ image, children }) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={0}
      minHeight="300px"
      maxHeight={{ lg: "700px" }}
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Box
        width={{ xs: "100%", md: "50%" }}
        height={{ xs: "300px", md: "500px" }}
        position="relative"
      >
        <Image
          src={image}
          alt="Placeholder"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </Box>

      <Box
        width={{ xs: "inherit", md: "50%" }}
        sx={{
          p: {
            xs: 4,
            lg: 6,
          },
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default HalfImage;
