// Importar componentes desde la carpeta components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import BentoGrid6 from '../components/BentoGrid6'
import Curve from '../components/Curve'
import Herotext from '../components/Herotext'

export const HomePage = () => {
  return (
    <>

      <Curve>
        <Header />

        <Herotext />

        <BentoGrid6 />

        <Herotext />

        <SocialLinks />

        <Footer />
      </Curve>
    </>
  )
}

export default HomePage

