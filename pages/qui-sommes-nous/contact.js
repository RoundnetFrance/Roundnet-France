import { Fragment, useState } from 'react';

// MUI IMPORTS
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero'
import BoxWrapper from '../../components/ui/box-wrapper';
import Head from '../../components/head';
import ContactForm from '../../components/forms/contact-form';
import ContactPageAdvice from '../../components/contact/contact-page-advice';

function ContactPage() {
  // Handle state for displaying page info or contact form
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);
  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

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

      <BoxWrapper title="Contactez Roundnet France">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Que souhaitez-vous faire ?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedValue}
            label="Que souhaitez-vous faire ?"
            onChange={handleChange}
          >
            <MenuItem value="competition">Organiser une compétition</MenuItem>
            <MenuItem value="adhesion">Adhérer à la fédération</MenuItem>
            <MenuItem value="acheter">Acheter des équipements Spikeball</MenuItem>
            <MenuItem value="partenariat">Réaliser un partenariat avec Roundnet France</MenuItem>
            <MenuItem value="autre-demande">Autre demande</MenuItem>
          </Select>
        </FormControl>
      </BoxWrapper>

      {
        (selectedValue === "autre-demande" || selectedValue === "partenariat") ? <ContactForm subject={selectedValue} /> : <ContactPageAdvice value={selectedValue} />
      }


    </Fragment>
  )
}

export default ContactPage
