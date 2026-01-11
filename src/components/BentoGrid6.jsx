import { BENTO_IMG } from "../styles/utils/data"
import { Link } from "react-router-dom"

export const BentoGrid6 = () => {

  return (
    <nav id="ContactMe" className="wrapper has-padding">


      <div className="title">
        <h1>Mi trabajo</h1>
        <p>Desde el 2018 hasta hoy</p>
      </div>

      <div className="BentoGrid6">

        {/* grid 01 */}
        <Link to="/BirdiProject">
          <div>
            <h1>1 - Social media</h1>
            <img
              src={BENTO_IMG.images[0]}
              alt={BENTO_IMG.title || "bento-img"}
              className="bento-img"
            />
            <p>over 4000</p>
          </div>
        </Link>

        {/* grid 02 */}
        <Link to="/BCHProject">
          <div>
            <h1>2 - Social media</h1>
            <img
              src={BENTO_IMG.images[1]}
              alt={BENTO_IMG.title || "bento-img"}
              className="bento-img"
            />
            <p>over 4000</p>
          </div>
        </Link>

        {/* grid 03 */}
        <Link to="/">
          <div>
            <h1>3 - soy el texto</h1>
            <img
              src={BENTO_IMG.images[2]}
              alt={BENTO_IMG.title || "bento-img"}
              className="bento-img"
            />
            <p>over 4000</p>
          </div>
        </Link>

        {/* grid 04 */}
        <Link to="/">
          <div>
            <h1>4- Social media</h1>
            <img
              src={BENTO_IMG.images[3]}
              alt={BENTO_IMG.title || "bento-img"}
              className="bento-img"
            />
            <p>over 4000</p>
          </div>
        </Link>

        {/* grid 05 */}
        <Link to="/">
          <div>
            <h1>5 - Social media</h1>
            <img
              src={BENTO_IMG.images[4]}
              alt={BENTO_IMG.title || "bento-img"}
              className="bento-img"
            />
            <p>over 4000</p>
          </div>
        </Link>

        {/* grid 06 */}
        <Link to="/">
          <div>
            <h1>6 - Social media</h1>
            <img
              src={BENTO_IMG.images[5]}
              alt={BENTO_IMG.title || "bento-img"}
              className="bento-img"
            />
            <p>over 4000</p>
          </div>
        </Link>

      </div>
    </nav>
  )
}

export default BentoGrid6;