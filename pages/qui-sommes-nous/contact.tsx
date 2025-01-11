import { FC, Fragment, useState } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { BoxWrapper, Hero } from "../../components/ui";
import Head from "../../components/head";
import { ContactForm } from "../../components/forms/contact-form";
import { ContactPageAdvice } from "../../components/contact/contact-page-advice";

const ContactPage: FC = () => {
  // Handle state for displaying page info or contact form
  const [selectedValue, setSelectedValue] = useState("regles");
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
          <InputLabel id="demo-simple-select-label">
            Que souhaitez-vous savoir ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedValue}
            label="Que souhaitez-vous faire ?"
            onChange={handleChange}
          >
            <MenuItem value="regles">
              Quelles sont les règles du roundnet (de services, sur un carry...)
              ?
            </MenuItem>
            <MenuItem value="calendrier">
              Quand seront les prochains tournois ? Y a t-il des tournois
              européens/français ?
            </MenuItem>
            <MenuItem value="cdf">
              Comment fonctionnera les championnats de France / la coupe de
              France ? Y’a t’il des tournois ?{" "}
            </MenuItem>
            <MenuItem value="ric">
              Comment fonctionnera les inter-clubs ? Y’a t’il des tournois ?{" "}
            </MenuItem>
            <MenuItem value="clubs">
              Comment savoir s’il y a un club vers chez moi ?{" "}
            </MenuItem>
            <MenuItem value="adhesion">
              Comment adhérer à RF ? Je souhaiterais construire une association
              en région{" "}
            </MenuItem>
            <MenuItem value="acheter">
              Je souhaiterais/je cherche à acheter… Combien coûte un Spikeball
              Pro ?
            </MenuItem>
            <MenuItem value="equipe">
              Qui est dans l&apos;équipe Roundnet France ?
            </MenuItem>
            <MenuItem value="statuts">
              Comment fonctionne Roundnet France ?
            </MenuItem>
            <MenuItem value="autre-demande">Autre demande</MenuItem>
          </Select>
        </FormControl>
      </BoxWrapper>

      {selectedValue === "autre-demande" ? (
        <ContactForm />
      ) : (
        <ContactPageAdvice value={selectedValue} />
      )}
    </Fragment>
  );
};

export default ContactPage;
