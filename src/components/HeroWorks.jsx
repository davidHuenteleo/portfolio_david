
/*importaciones*/
import { HERO_WORK } from "../styles/utils/data";
import { PROFILE_IMG } from "../styles/utils/data";

import '../styles/components/_hero-works.scss';

export const HeroWorks = () => {
    return (
    <nav className="wrapper has-padding">

        <div className="heroWork">

            <div className="hero__content">

                    <div className="hero__title">
                        <h1>
                            Marketplace con <br />Delivery de última <br /> milla
                            </h1>

                            <p>doy un titulo</p>
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
                                    className="hero__profile-img"/>
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visita nuestra página de Facebook">
                                <img
                                    src={PROFILE_IMG.images[0]}
                                    alt="Profile image"
                                    className="hero__profile-img"/>
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visita nuestra página de Facebook">
                                <img
                                    src={PROFILE_IMG.images[0]}
                                    alt="Profile image"
                                    className="hero__profile-img"/>
                        </a>
                    </div>



                <img
                    src={HERO_WORK.image}
                    alt=""
                    className="hero_img"/>
            </div>

        </div>
    </nav>
    )
    }


export default HeroWorks;