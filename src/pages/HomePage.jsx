// Importar componentes desde la carpeta components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


import SocialLinks from '../components/SocialLinks'
import BentoGrid6 from '../components/BentoGrid6'

export const HomePage = () => {
  return (
    <>
      <Header />
      <BentoGrid6 />
      <SocialLinks />
      <Footer />
    </>
  )
}

export default HomePage

