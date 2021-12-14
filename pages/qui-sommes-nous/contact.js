import ContactForm from '../../components/contact/contact-form'
import Hero from '../../components/ui/hero'

function ContactPage() {
  return (
    <div>
      <Hero 
        title="Contact"
        image="/images/hero/contact.jpg"
        imagePosition="center top"
        mini
      />
      <ContactForm />
    </div>
  )
}

export default ContactPage
