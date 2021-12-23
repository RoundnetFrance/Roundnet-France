import { Fragment } from 'react';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero'
import ContactForm from '../../components/contact/contact-form';
import Head from '../../components/head';

function ContactPage() {
  return (
    <Fragment>
      <Head
        title="Formulaire de contact - Fédération Française de Roundnet"
        description="Contactez la fédération de Roundnet France pour toutes vos questions."
      />
      
      <Hero 
        title="Contact"
        image="/images/hero/contact.jpg"
        imagePosition="center top"
        mini
      />

      <ContactForm />
    
    </Fragment>
  )
}

export default ContactPage
