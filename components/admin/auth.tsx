import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";

import { Loader } from "../../components/ui";
import type { FC, PropsWithChildren } from "react";

export const Auth: FC<PropsWithChildren> = ({ children }) => {
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

  return (
    <Box mt={8}>
      <Loader />
    </Box>
  );
};
