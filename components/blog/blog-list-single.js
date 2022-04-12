import PropTypes from "prop-types";
import Image from "next/image";

// MUI IMPORTS
import { Stack, Paper, Typography } from "@mui/material";

export default function BlogListSingle({ post }) {
  return (
    <Stack>
      <Paper sx={{ borderRadius: 1, overflow: 'hidden', position: 'relative', mb: 2 }}>
        <Image src={post.image || '/images/misc/placeholder.jpg'} alt={post.title} width="320" height="200" objectFit="cover" />
      </Paper>
      <Typography variant="body2">{new Date(post.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}</Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>{post.title}</Typography>
    </Stack>
  )
}

BlogListSingle.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })
}
