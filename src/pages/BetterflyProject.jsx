// Importar componentes desde la carpeta components
import HeroWork from '../components/HeroWorks'
import { Footer } from '../components/Footer'
import { HERO_WORK } from '../styles/utils/data'
import Herocover from '../components/Herocover'
import SocialLinks from '../components/SocialLinks'
import Curve from '../components/Curve'

export const BetterflyProject = () => {

    return (
        <>

            <Curve>

                <HeroWork
                    title="Betterfly"
                    subtitle="Descripción del proyecto Betterfly"
                />

                <Herocover
                    image={HERO_WORK.image}
                />

                <SocialLinks />
                <Footer />
            </Curve>
        </>
    )
}

export default BetterflyProject

