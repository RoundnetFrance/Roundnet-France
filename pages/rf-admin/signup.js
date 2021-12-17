import {Fragment} from 'react';
import Link from "next/link";

// MUI IMPORTS
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// COMPONENTS IMPORTS
import FormWrapper from "../../components/ui/form-wrapper";
import SignUpForm from "../../components/admin/signup-form";

function SignUpPage() {
  return (
    <Container maxWidth="xs" sx={{ minHeight: '75vh', mt: 8 }}>
      <FormWrapper title="Créer un compte">
        <SignUpForm />
      </FormWrapper>
    </Container>
  )
}

export default SignUpPage
