// MUI IMPORTS
import { Tabs, Tab } from "@mui/material";

export default function DataTabs({ currentTab, handleTabChange, tabs }) {
  return (
    <Tabs
      value={currentTab}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="Club Admin data tabs"
      sx={{ mb: 4 }}
    >
      {tabs.map((tab) => (
        <Tab key={tab} label={tab} />
      ))}
    </Tabs>
  );
}
