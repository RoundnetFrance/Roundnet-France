import { Fragment } from "react";
import { getDocuments } from "../../helpers/db";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../../components/ui/hero";
import Head from "../../components/head";
import Blog from "../../components/blog/blog-list";

export default function BlogPage({ posts, error }) {
  return (
    <Fragment>
      <Head
        title="Boutique - Roundnet France"
        description="Grâce à notre partenariat avec l'équipementier Spikeball, achetez vos sets et vos goodies en ligne via la fédération Roundnet France."
      />

      <Hero
        title="Blog"
        image="/images/hero/blog.jpg"
        imagePosition="center 20%"
        mini
      />

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Blog posts={posts} />
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  let posts;
  let error;
  try {
    posts = await getDocuments("posts");
  } catch (err) {
    error = err.message;
  }

  return {
    props: {
      posts: posts || null,
      error: error || null,
    },
    revalidate: 600,
  };
}
