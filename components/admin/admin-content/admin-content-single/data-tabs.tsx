import { Tabs, Tab, Stack, Skeleton } from "@mui/material";

interface DataTabsProps {
  currentTab: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabs: string[];
  isLoading: boolean;
}

export const DataTabs = ({
  currentTab,
  handleTabChange,
  tabs,
  isLoading,
}: DataTabsProps) => {
  if (isLoading) {
    return (
      <Stack direction="row" spacing={2}>
        <Skeleton width={80} height={50} />
        <Skeleton width={80} height={50} />
        <Skeleton width={80} height={50} />
      </Stack>
    );
  }

  return (
    <Tabs
      value={currentTab}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="Club Admin data tabs"
    >
      {tabs.map((tab) => (
        <Tab key={tab} label={tab} />
      ))}
    </Tabs>
  );
}
