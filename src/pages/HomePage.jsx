// Importar componentes desde la carpeta components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BentoGrid8 } from '../components/BentoGrid8'
import SocialLinks from '../components/SocialLinks'
import HeroWorks from '../components/HeroWorks'

export const HomePage = () => {
  return (
    <>
      <Header />
      <BentoGrid8 />

      <HeroWorks/>

      <SocialLinks />
      <Footer />
    </>
  )
}

export default HomePage

