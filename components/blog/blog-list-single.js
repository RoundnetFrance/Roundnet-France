import PropTypes from "prop-types";
import Image from "next/image";
import NextLink from "next/link";

// MUI IMPORTS
import { Stack, Paper, Typography, Box } from "@mui/material";

// COMPONENTS IMPORTS
import { Link } from "../../components/ui";

export default function BlogListSingle({ post }) {
  return (
    <Stack>
      <NextLink href={`/blog/${post.slug}`} passHref>
        <Paper
          sx={{
            borderRadius: 1,
            overflow: "hidden",
            position: "relative",
            mb: 2,
            cursor: "pointer",
          }}
        >
          <Box sx={{ position: "relative", width: "320px", height: "200px" }}>
            <Image
              src={post.image || "/images/misc/placeholder.jpg"}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Paper>
      </NextLink>
      <Typography variant="body2">
        {new Date(post.createdAt).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0 }}>
        <Link href={`/blog/${post.slug}`} underline="none">
          {post.title}
        </Link>
      </Typography>
      <Typography variant="body1">{post.summary}</Typography>
    </Stack>
  );
}

BlogListSingle.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};
