import useBlog from "../../../hooks/use-blog";

// COMPONENT IMPORTS
import AdminContent from "../../../components/admin/admin-content";
import DashboardWrapper from "../../../components/layout/admin/dashboard-wrapper";
import PageTitle from "../../../components/ui/page-title";
import CreateBlogPostForm from "../../../components/admin/forms/create-blog-post";

export default function BlogAdminPage() {
  // Hooks calls
  const { blogPosts, isLoading, isError } = useBlog();

  const config = {
    name: "administrators",
    listProps: {
      title: "title",
      subtitle: "summary",
    },
    data: blogPosts,
    endpoint: "posts",
    isLoading: isLoading,
    isError: isError,
  };

  return (
    <DashboardWrapper>
      <PageTitle title="Gestion du blog" />
      <AdminContent config={config} form={<CreateBlogPostForm />} />
    </DashboardWrapper>
  );
}

BlogAdminPage.auth = {
  role: "superadmin",
};

export async function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    },
  };
}
