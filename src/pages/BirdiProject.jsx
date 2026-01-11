// Importar componentes desde la carpeta components
import { Footer } from '../components/Footer'

import SocialLinks from '../components/SocialLinks'
import Curve from '../components/Curve'

export const BirdiProject = () => {
    return (
        <>

            <Curve>

                <div>
                    <h1>BirdiProject</h1>
                </div>


                <SocialLinks />
                <Footer />
            </Curve>
        </>
    )
}

export default BirdiProject

