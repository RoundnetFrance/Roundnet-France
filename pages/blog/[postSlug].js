import { getDocuments, getDocument } from "../../helpers/db";
import { Fragment } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// MUI IMPORTS
import { Container, Box, Typography } from "@mui/material";

// COMPONENTS IMPORTS
import Head from "../../components/head";
import Hero from "../../components/ui/hero";
import Error from "../../components/ui/error";

export default function EventSingle({ post, error }) {
  return (
    <Fragment>
      {/* HEAD */}
      <Head
        title={`${post?.title || "Tournoi de Roundnet"} - Roundnet France`}
        description={post?.summary.substring(0, 130) + "..."}
      />

      {/* PAPER CONTENT */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box>
          {error ? (
            <Error message={error} />
          ) : (
            <Fragment>
              <Image
                src={post?.image || "/images/misc/placeholder.jpg"}
                width="1000"
                height="600"
                objectFit="cover"
                alt={post.title}
              />

              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", mb: 2, mt: 4 }}
              >
                {post.title}
              </Typography>

              <ReactMarkdown>{post.content}</ReactMarkdown>
            </Fragment>
          )}
        </Box>
      </Container>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const posts = await getDocuments("posts", { validated: true });
  const paths = posts.map((post) => ({
    params: {
      postSlug: post.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let post;
  let error;

  try {
    post = await getDocument("posts", { slug: params.postSlug });
    // If no post, return 404
    if (!post) {
      return {
        notFound: true,
      };
    }
  } catch (err) {
    error = err.message;
  }

  return {
    props: {
      post: post ? JSON.parse(JSON.stringify(post)) : null,
      error: error || null,
    },
    revalidate: 600,
  };
}
