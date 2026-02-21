
/*importaciones*/
import '../styles/components/_hero-cover.scss';

export const Herocover = ({ image }) => {
    return (
        <nav id="HeroCover" className="wrapper has-padding">

            <div className="heroCover">

                <div className="hero__content">

                    <img
                        src={image}
                        alt=""
                        className="hero_img" />
                </div>

            </div>
        </nav>
    )
}


export default Herocover;