import { useSession, signIn, signOut } from "next-auth/react";

// MUI IMPORTS
import Container from "@mui/material/Container";

// COMPONENTS IMPORTS
import FormWrapper from "../../components/ui/form-wrapper";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <FormWrapper>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </FormWrapper>
    )
  }
  return (
    <FormWrapper>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </FormWrapper>

  )
}