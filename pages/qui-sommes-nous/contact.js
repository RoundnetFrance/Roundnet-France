import { Fragment } from 'react';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero'
import ContactForm from '../../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      
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
