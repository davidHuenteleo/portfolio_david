// Importar componentes desde la carpeta components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


import SocialLinks from '../components/SocialLinks'
import BentoGrid6 from '../components/BentoGrid6'
import Curve from '../components/Curve'

export const HomePage = () => {
  return (
    <>

      <Curve>
        <Header />
        <BentoGrid6 />
        <SocialLinks />
        <Footer />
      </Curve>
    </>
  )
}

export default HomePage

