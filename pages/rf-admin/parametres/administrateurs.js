import { getSession } from 'next-auth/react'

// MUI IMPORTS
import Container from '@mui/material/Container';
import AdminTable from '../../../components/admin/table/admin-table';

// COMPONENT IMPORTS
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';

function AdministratorAdminPage() {
  const tableHead = [
    {
      _id: '_id',
      name: 'ID',
    },
    {
      _id: 'name',
      name: 'Nom',
    },
    {
      _id: 'email',
      name: 'Email',
    },
    {
      _id: 'role',
      name: 'Administrateur',
      align: 'right',
    },
  ];

  const tableData = [
    {
      _id: '1',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      authorized: true,
    },
    {
      _id: '2',
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      authorized: true,
    },
    {
      _id: '3',
      name: 'Fred Doe',
      email: 'fred.doe@gmail.com',
      authorized: false,
    },
  ];

  return (
    <DashboardWrapper>
      <PageTitle title="Administrateurs"></PageTitle>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <AdminTable 
          name="Administrateurs"
          tableHead={tableHead}
          tableData={tableData}
        />
      </Container>
    </DashboardWrapper>
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

export default AdministratorAdminPage
