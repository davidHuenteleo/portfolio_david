import { HERO_IMG } from "../styles/utils/data"

export const Header = () => {
    return (
        <div className="wrapper has-padding">

            <header className="header hero">

                {/* hero-content */}
                <div className="hero-content" data-reveal="left">
                    <h1 className="h1 hero-title">
                        Hola, me llamo david oli birdi
                    </h1>
                </div>

                <video
                    src={HERO_IMG.image}
                    className="hero-img"
                    data-reveal="right"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={HERO_IMG.title || "Hero video"}
                />

            </header >

        </div>
    )
}

export default Header;