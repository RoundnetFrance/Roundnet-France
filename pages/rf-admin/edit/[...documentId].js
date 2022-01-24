import { useRouter } from "next/router";

export default function EditAdminPage() {
  const router = useRouter();
  console.log(router.query);
  const endpoint = router.query[0];
  const id = router.query[1];
  console.log(endpoint, id);
  return <div></div>;
}
