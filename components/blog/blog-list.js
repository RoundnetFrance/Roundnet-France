import PropTypes from "prop-types";

// MUI IMPORTS
import { Box, Stack } from "@mui/material";

// COMPONENT IMPORTS
import BlogListSingle from "./blog-list-single";

export default function Blog({ posts }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={4}
    >
      {posts.map((post) => (
        <BlogListSingle key={post._id} post={post} />
      ))}
    </Stack>
  );
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
