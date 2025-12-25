// Importar componentes desde la carpeta components
import { Footer } from '../components/Footer'
import { BentoGrid8 } from '../components/BentoGrid8'
import HeroWorks from '../components/HeroWorks'
import Curve from '../components/Curve'

export const ProjectPage = () => {
    return (
        <>
            <Curve>
                <HeroWorks />
                <BentoGrid8 />
                <Footer />
            </Curve>
        </>
    )
}

export default ProjectPage

