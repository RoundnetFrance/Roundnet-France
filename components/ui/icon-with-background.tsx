import Box from "@mui/material/Box";
import Icon, { type IconOwnProps } from "@mui/material/Icon";

interface IconWithBackgroundProps {
  color: IconOwnProps["color"] | "neutralDark";
  icon: string;
  size?: number;
}

export default function IconWithBackground({
  color,
  icon = "primary",
  size = 40,
}: Readonly<IconWithBackgroundProps>) {
  return (
    <Box
      p={size / 10}
      sx={{
        background: `url(/images/misc/blob-lighter-${color}.svg) no-repeat`,
      }}
    >
      {/* @ts-ignore  */}
      <Icon style={{ fontSize: size }} color={color}>
        {icon}
      </Icon>
    </Box>
  );
}
