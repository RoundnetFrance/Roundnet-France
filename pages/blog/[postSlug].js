import { getDocuments, getDocument } from "../../helpers/db";
import { Fragment } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// MUI IMPORTS
import { Container, Box, Typography } from "@mui/material";

// COMPONENTS IMPORTS
import Head from "../../components/head";
import Error from "../../components/ui/error";

export default function EventSingle({ post, error }) {
  const customParagraph = (props) => {
    return (
      <Typography variant="body1" color="initial">
        {props.children}
      </Typography>
    );
  };

  const customHeading = (props) => {
    return (
      <Typography
        component={`h${props.level}`}
        variant={`h${props.level + 1 >= 6 ? 6 : props.level + 3}`}
        color="initial"
        sx={{ my: 5 - props.level }}
      >
        {props.children}
      </Typography>
    );
  };

  return (
    <Fragment>
      {/* HEAD */}
      <Head
        title={`${post?.title || "Tournoi de Roundnet"} - Roundnet France`}
        description={post?.summary.substring(0, 130) + "..."}
      />

      {/* PAPER CONTENT */}
      <Container maxWidth="md" sx={{ my: 4 }} disableGutters>
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

              <Box px={{ xs: 2, sm: 4 }}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{ fontWeight: "bold", mb: 2, mt: 4 }}
                >
                  {post.title}
                </Typography>

                <ReactMarkdown
                  components={{
                    p: customParagraph,
                    hgroup: customHeading,
                    h1: customHeading,
                    h2: customHeading,
                    h3: customHeading,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </Box>
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
