// MUI IMPORTS
import Container from "@mui/material/Container";
import { getDocuments } from '../../helpers/db';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

// COMPONENTS IMPORTS
import SignUpOAuthForm from "../../components/admin/forms/signup-oauth-form";

function SignUpPage({ clubs }) {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  // 
  const { query } = router;
  const hiddenFields = {
    name: query.name,
    email: query.email,
  };
  // useEffect(() => {
  //   if (!router.query.email && !router.query.name) {
  //     // Redirect to /rf-admin
  //     router.replace('/rf-admin');
  //     return;
  //   }
  // }, [router]);

  return (
    isRedirecting ||
    (
      <Container maxWidth="sm">
        <SignUpOAuthForm clubs={clubs} hiddenFields={hiddenFields} />
      </Container>
    )
  )
}

export default SignUpPage;

export async function getStaticProps() {
  const clubs = await getDocuments('clubs', null, { title: 1 });
  const clubsSelectValues = clubs.map(club => ({
    value: club._id,
    label: club.title,
  }));
  return {
    props: {
      clubs: clubsSelectValues,
    },
  }
}