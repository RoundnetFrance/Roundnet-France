import { useRouter } from "next/router";
import { getDocuments } from "../../../../helpers/db";
import useSWR from "swr";
import fetcher from "../../../../lib/swr-fetcher";

// COMPONENT IMPORTS
import AdminContentSingle from "../../../../components/admin/admin-content/admin-content-single";

// Data Config
const config = {
  title: "Modification de club",
  tabs: [
    // GENERAL INFO
    {
      _id: "main",
      name: "Général",
      description: "Informations générales du club",
      layout: [
        {
          _id: "title",
          name: "Club",
          type: "text",
          editable: true,
        },
        {
          _id: "chip",
          name: "Ville",
          type: "text",
          editable: true,
        },
        {
          _id: "description",
          name: "Description du club",
          type: "longtext",
          editable: true,
        },
        {
          _id: "validated",
          name: "Validé",
          align: "right",
          type: "boolean",
          editable: true,
        },
      ],
    },
    // Contact
    {
      _id: "contact",
      name: "Contact",
      description:
        "Contact et personnes référentes de l'association ou du club",
      layout: [
        {
          _id: "referer",
          name: "Référent",
          type: "text",
          editable: true,
        },
        {
          _id: "email",
          name: "Email",
          type: "text",
        },
        {
          _id: "phone",
          name: "Téléphone",
          type: "text",
        },
      ],
    },
    // Extras
    {
      _id: "extras",
      name: "Extras",
      description: "Informations additionnelles",
      layout: [
        {
          _id: "players",
          name: "Joueurs",
          type: "text",
          editable: true,
        },
        {
          _id: "links",
          name: "Liens",
          editable: true,
          type: "array",
          array: {
            key: "source",
            value: "url",
          },
        },
        {
          _id: "discord",
          name: "Discord",
          editable: true,
        },
      ],
    },
  ],
};

export default function EditAdminPage() {
  // Get endpoint and ID from URL
  const router = useRouter();
  const { clubId } = router.query;

  // Get club data
  const { data, error } = useSWR(`/api/clubs/${clubId}`, fetcher);
  const isLoading = !error && !data;

  //! If club data is loading
  if (isLoading) return <p>Loading...</p>;

  return <AdminContentSingle config={config} data={data} />;
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
