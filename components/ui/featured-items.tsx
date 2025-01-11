import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import IconWithBackground from "./icon-with-background";
import type { IconOwnProps } from "@mui/material";
import type { FC } from "react";

interface FeaturedItem {
  _id: string;
  icon: string;
  title: string;
  description: string;
}

interface FeaturedItemsProps {
  items: FeaturedItem[];
  color?: IconOwnProps["color"];
}

const FeaturedItems: FC<FeaturedItemsProps> = ({
  items,
  color = "primary",
}) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="baseline"
      spacing={{ xs: 2, md: 4 }}
      my={4}
    >
      {items.map((item) => (
        <Stack
          width={{ xs: "100%", md: "30%" }}
          alignItems="center"
          key={item._id}
        >
          <IconWithBackground icon={item.icon} color={color} />
          <Typography
            align="center"
            variant="h6"
            component="h3"
            my={2}
            color={color}
          >
            <strong>{item.title}</strong>
          </Typography>
          <Typography variant="body1" align="center">
            {item.description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default FeaturedItems;
