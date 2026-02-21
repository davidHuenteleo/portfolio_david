// Importar componentes desde la carpeta components
import HeroWork from '../components/HeroWorks'
import SocialLinks from '../components/SocialLinks'
import Curve from '../components/Curve'
import Herocover from '../components/Herocover'

// Importar componentes desde la carpeta components
import { Footer } from '../components/Footer'

import { HERO_WORK } from '../styles/utils/data'

export const BCHProject = () => {

    return (
        <>
            <Curve>

                <HeroWork
                    title="Banco de Chile"
                    subtitle="Marketplace con Delivery de última milla"
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


export default BCHProject

