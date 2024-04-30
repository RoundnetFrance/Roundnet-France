import { Chip, Icon, Stack, type SxProps } from "@mui/material";

interface ChipItem {
  label: string;
  icon?: string;
  value?: string;
}

interface ChipListProps {
  chips: ChipItem[];
  sx?: SxProps;
}

export default function ChipList({ chips, sx }: Readonly<ChipListProps>) {
  return (
    <Stack
      direction='row'
      gap={1}
      alignItems='center'
      sx={{ ...sx, flexWrap: "wrap", width: { xs: "100%", md: "60%" } }}
    >
      {chips.map((chip) => (
        <Chip
          key={chip.value ?? chip.label}
          label={chip.label}
          icon={chip.icon ? <Icon>{chip.icon}</Icon> : undefined}
          color='primary'
          variant='filled'
          sx={{ px: 1 }}
        />
      ))}
    </Stack>
  );
}
