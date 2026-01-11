// Importar componentes desde la carpeta components
import HeroWork from '../components/HeroWorks'
import SocialLinks from '../components/SocialLinks'
import Curve from '../components/Curve'

// Importar componentes desde la carpeta components
import { Footer } from '../components/Footer'

export const BCHProject = () => {

    return (
        <>
            <Curve>

                <HeroWork />

                <div>
                    <h1>BCHProject</h1>
                </div>

                <SocialLinks />
                <Footer />
            </Curve>
        </>
    )
}


export default BCHProject

