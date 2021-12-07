import { Fragment } from 'react';

import Hero from '../components/ui/hero';
import HomeInfoBlock from '../components/home/home-info-block';
import LogoCarousel from '../components/home/logo-carousel';
import FourSquareInfo from '../components/home/four-square-info';


export default function Home() {
  return (
    <Fragment>
      <Hero
        title="Roundnet France"
        subtitle="Le site officiel de la fédération française de roundnet"
        image="/images/home-slide.jpg"
        mainButtonText="Découvrir"
        mainButtonLink="/about"
        altButtonText="Participer à un tournoi"
        altButtonLink="/tournaments"
      />
      <HomeInfoBlock />
      <LogoCarousel />
      <FourSquareInfo />
    </Fragment>
  )
}
