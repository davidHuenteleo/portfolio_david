import { BENTO_IMG } from "../styles/utils/data"
import '../styles/components/_social-links.scss';

export const SocialLinks = () => {
    return (
    <nav className="wrapper has-padding">

        <div className="title">
            <h1>De los Primeros <br /> Pasos
            Mi Vida como Creador <br /> Digital</h1>
        </div>

        <div className="BentoSocial">

            {/* grid 01 */}
            <div>
                <h1>Sobre mi</h1>
                <p>Revisa mi cv</p>
                <img
                    src={BENTO_IMG.image}
                    alt={BENTO_IMG.title || "bento-img"}
                    className="bento-img"
                />
            </div>


            {/* grid 02 */}
            <div>
                <h1>David Huenteleo</h1>
                <h6>@DavidHuenteleo</h6>

                <h5>Historias y aprendisaje que comparto cada dia</h5>



                <img
                    src={BENTO_IMG.image}
                    alt={BENTO_IMG.title || "bento-img"}
                    className="bento-img"
                />
            </div>

        </div>
    </nav>
    )
    }


export default SocialLinks;