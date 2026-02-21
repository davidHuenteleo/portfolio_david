// Importar componentes desde la carpeta components
import Footer from '../components/Footer'

import HeaderAboutMe from '../components/HeaderAboutMe'
import Curve from '../components/Curve'

export const AboutMePage = () => {
    return (
        <>
            <Curve>
                <HeaderAboutMe />
                <Footer />
            </Curve>
        </>
    )
}

export default AboutMePage
