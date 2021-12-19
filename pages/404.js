import Container from '@mui/material/Container';

// COMPONENT IMPORTS
import CTAFooter from '../components/ui/cta-footer';


export default function Custom404() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <CTAFooter 
        title="Page introuvable"
        subtitle="La page que vous recherchez n'existe pas."
        mainLink={{
          text: 'Retour à l\'accueil',
          url: '/',
        }}
      />
    </Container>
  )
}