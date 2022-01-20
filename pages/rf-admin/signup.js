// MUI IMPORTS
import Container from "@mui/material/Container";
import { getDocuments } from '../../helpers/db';

// COMPONENTS IMPORTS
import SignUpForm from "../../components/admin/forms/signup-form";

function SignUpPage({ clubs }) {
  return (
    <Container maxWidth="sm">
      <SignUpForm clubs={clubs} />
    </Container>
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
