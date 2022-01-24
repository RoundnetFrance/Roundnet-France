import { useState } from "react";
import propTypes from "prop-types";

// MUI IMPORTS
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

// COMPONENT IMPORTS
import PageTitle from "../../../ui/page-title";
import DataTabs from "./data-tabs";
import DataFields from "./data-fields";

export default function AdminContentSingle({ config: { title, tabs }, data }) {
  // Handle tab state
  const [currentTab, setCurrentTab] = useState(0);
  function handleChange(event, newValue) {
    setCurrentTab(newValue);
  }

  // Handle values state
  const [values, setValues] = useState(data);

  // Extract tab names from config data
  const tabNames = tabs.map((tab) => tab.name);

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 2 }}>
      <PageTitle title={title} />

      <DataTabs
        currentTab={currentTab}
        handleChange={handleChange}
        tabs={tabNames}
      />

      <Card>
        <CardHeader
          title={tabs[currentTab].name}
          titleTypographyProps={{ mb: 0 }}
          subheader={tabs[currentTab].description}
        />
        <Divider />
        <CardContent sx={{ p: { xs: 1, md: 2, lg: 4 } }}>
          <Box my={2}>
            <DataFields layout={tabs[currentTab].layout} values={values} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

AdminContentSingle.propTypes = {
  config: propTypes.shape({
    title: propTypes.string.isRequired,
    tabs: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        layout: propTypes.array.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
