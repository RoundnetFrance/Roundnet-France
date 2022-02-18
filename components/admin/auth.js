import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// MUI IMPORT
import { Box } from "@mui/material";

// COMPONENT IMPORT
import Loader from "../../components/ui/loader";

export default function Auth({ children }) {
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/rf-admin");
    },
  });
  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <Box mt={8}>
      <Loader />
    </Box>
  );
}
