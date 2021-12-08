import ContactForm from '../../components/contact/contact-form'
import Hero from '../../components/ui/hero'

function ContactPage() {
  return (
    <div>
      <Hero 
        title="Contact"
        mini
      />
      <ContactForm />
    </div>
  )
}

export default ContactPage
