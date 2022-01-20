import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

// COMPONENT IMPORTS
import DashboardWrapper from '../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../components/ui/page-title';
import Loader from '../../components/ui/loader';

export default function DashboardPage() {
  // Hooks calls
  const router = useRouter();

  // Handle redirect if no session
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push('/rf-admin');
    }
  })

  // If loading, display loading screen
  if (status === "loading") return <Loader />

  return (
    <DashboardWrapper>
      <PageTitle title="Dashboard"></PageTitle>
    </DashboardWrapper>
  )
}

export function getStaticProps() {
  return {
    props: {
      adminLayout: true,
    }
  }
}

