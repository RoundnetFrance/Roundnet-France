import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// Data Config
const config = [
  {
    _id: "title",
    name: "Club",
    editable: true,
  },
  {
    _id: "chip",
    name: "Ville",
    editable: true,
  },
  {
    _id: "description",
    name: "Description",
    editable: true,
  },
  {
    _id: "referer",
    name: "Référent",
    editable: true,
  },
  {
    _id: "email",
    name: "Email",
  },
  {
    _id: "phone",
    name: "Téléphone",
  },
  {
    _id: "players",
    name: "Joueurs",
  },
  {
    _id: "links",
    name: "Liens",
    editable: true,
    array: {
      key: "source",
      value: "url",
    },
  },
  {
    _id: "discord",
    name: "Discord",
  },
  {
    _id: "validated",
    name: "Validé",
    align: "right",
    editable: true,
  },
];

export default function EditAdminPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { clubId } = router.query;

  // Get club data
  const { data, error } = useSWR(`/api/clubs/${clubId}`, fetcher);
  const isLoading = !error && !data;

  //! If club data is loading
  if (isLoading) return <p>Loading...</p>;

  return <AdminContentSingle config={config} />;
}

// NextJS functions
export async function getStaticPaths() {
  const data = await getDocuments("clubs");
  const paths = data.map((club) => ({
    params: {
      clubId: club._id,
    },
  }));
  return { paths, fallback: false };
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
