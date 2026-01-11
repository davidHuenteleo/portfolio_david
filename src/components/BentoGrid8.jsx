import { BENTO_IMG } from "../styles/utils/data"

import { Link } from 'react-router-dom'

export const BentoGrid8 = () => {
  return (
    <nav className="wrapper has-padding">


      <div className="title">
        <h1>Mi trabajo</h1>
        <p>Desde el 2018 hasta hoy</p>
      </div>

      <div className="BentoGrid8">


        {/* grid 01 */}
        <Link to="/ProjectPage">
          <div>
            <h1>Birdi</h1>
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
            <h1>BCH</h1>
            <img
              src={BENTO_IMG.images[1]}
              alt={BENTO_IMG.title || "bento-img"}
              className="bento-img"
            />
            <p>over 4000</p>
          </div>
        </Link>

        {/* grid 03 */}
        <div>
          <h1>3 - soy el texto</h1>
          <img
            src={BENTO_IMG.images[2]}
            alt={BENTO_IMG.title || "bento-img"}
            className="bento-img"
          />
          <p>over 4000</p>
        </div>

        {/* grid 04 */}
        <div>
          <h1>4- Social media</h1>
          <img
            src={BENTO_IMG.images[3]}
            alt={BENTO_IMG.title || "bento-img"}
            className="bento-img"
          />
          <p>over 4000</p>
        </div>

        {/* grid 05 */}
        <div>
          <h1>5 - Social media</h1>
          <img
            src={BENTO_IMG.images[4]}
            alt={BENTO_IMG.title || "bento-img"}
            className="bento-img"
          />
          <p>over 4000</p>
        </div>

        {/* grid 06 */}
        <div>
          <h1>6 - Social media</h1>
          <img
            src={BENTO_IMG.images[5]}
            alt={BENTO_IMG.title || "bento-img"}
            className="bento-img"
          />
          <p>over 4000</p>
        </div>

        {/* grid 07 */}
        <div>
          <h1>7 - Social media</h1>
          <img
            src={BENTO_IMG.images[6]}
            alt={BENTO_IMG.title || "bento-img"}
            className="bento-img"
          />
          <p>over 4000</p>
        </div>

        {/* grid 08 */}
        <div>
          <h1>8 - Social media</h1>
          <img
            src={BENTO_IMG.images[7]}
            alt={BENTO_IMG.title || "bento-img"}
            className="bento-img"
          />
          <p>over 4000</p>
        </div>

      </div>
    </nav>
  )
}

export default BentoGrid8;