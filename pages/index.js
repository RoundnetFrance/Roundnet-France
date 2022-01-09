import { Fragment } from 'react';



// COMPONENT IMPORTS
import Hero from '../components/ui/hero';
import HomeInfoBlock from '../components/home/home-info-block';
import LogoCarousel from '../components/home/logo-carousel';
import FourSquareInfo from '../components/home/four-square-info';
import CTAFooter from '../components/ui/cta-footer';
import RulesDemo from '../components/home/rules-demo';

export default function Home() {
  return (
    <Fragment>
      <Hero
        title="Roundnet France"
        subtitle="Le site officiel de la fédération française de roundnet"
        image="/images/home-slide.jpg"
        mainButtonText="Découvrir"
        mainButtonLink="/competition/regles"
        altButtonText="Participer à un tournoi"
        altButtonLink="/competition/calendrier"
      />

      <HomeInfoBlock />
      <FourSquareInfo />

      <RulesDemo />

      <CTAFooter
        title="Motivé.e ? Envie de jouer ou de participer ?"
        subtitle="Nous sommes là pour vous accompagner !"
        mainLink={{
          url: '/competition/calendrier',
          text: 'Je veux jouer'
        }}
        altLink={{
          url: '/clubs-et-communautes/adherer-a-roundnet-france',
          text: 'Je veux adhérer'
        }}
      />

      <LogoCarousel />

    </Fragment>
  )
}
