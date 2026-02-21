
/*importaciones*/
import { PROFILE_IMG } from "../styles/utils/data";

import '../styles/components/_hero-works.scss';

export const HeroWorks = ({ title, subtitle }) => {
    return (
        <nav id="HeroWorks" className="wrapper has-padding">

            <div className="heroWork">

                <div className="hero__content">

                    <div className="hero__title">
                        <h1>
                            {title}
                        </h1>

                        <p>{subtitle}</p>
                    </div>


                    <div className="hero__profile">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visita nuestra página de Facebook">
                            <img
                                src={PROFILE_IMG.images[0]}
                                alt="Profile image"
                                className="hero__profile-img" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visita nuestra página de Facebook">
                            <img
                                src={PROFILE_IMG.images[0]}
                                alt="Profile image"
                                className="hero__profile-img" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visita nuestra página de Facebook">
                            <img
                                src={PROFILE_IMG.images[0]}
                                alt="Profile image"
                                className="hero__profile-img" />
                        </a>
                    </div>

                </div>

            </div>
        </nav>
    )
}


export default HeroWorks;