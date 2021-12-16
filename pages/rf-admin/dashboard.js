import { getSession } from 'next-auth/react'

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
      return {
          redirect: {
              destination: '/rf-admin',
              permanent: false,
          },
      };
  }
  return {
      props: { 
        session,
        adminLayout: true, 
      },
  };
}

export default DashboardPage
