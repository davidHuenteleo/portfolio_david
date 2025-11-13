import { HERO_IMG } from "../styles/utils/data"



export const Header = () => {
    return (
    <div className="wrapper has-padding">

        <header  className="header hero">

             {/* hero-content */}
            <div className="hero-content" data-reveal="left">
                <h1 className="h1 hero-title">
                    hola
                </h1>
            </div>


            <img
                src={HERO_IMG.image}
                alt={HERO_IMG.title || "Hero banner"}
                className="hero-img"
                data-reveal="right"
            />

        </header >

    </div>
    )
    }

export default Header;