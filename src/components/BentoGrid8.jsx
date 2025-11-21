import { BENTO_IMG  } from "../styles/utils/data"

export const BentoGrid8 = () => {
  return (
  <nav className="wrapper has-padding">


        <div className="title">
            <h1>Mi trabajo</h1>
            <p>Desde el 2018 hasta hoy</p>
        </div>

      <div className="BentoGrid8">

          {/* grid 01 */}
          <div>
              <h1>1 - Social media</h1>
              <img
                src={BENTO_IMG.image}
                alt={BENTO_IMG.title || "bento-img"}
                className="bento-img"
            />
              <p>over 4000</p>
          </div>

          {/* grid 02 */}
          <div>
              <h1>2 - Social media</h1>
              <img
                src={BENTO_IMG.image}
                alt={BENTO_IMG.title || "bento-img"}
                className="bento-img"
            />
              <p>over 4000</p>
          </div>

          {/* grid 03 */}
          <div>
              <h1>3 - soy el texto</h1>
              <img
                src={BENTO_IMG.image}
                alt={BENTO_IMG.title || "bento-img"}
                className="bento-img"
            />
              <p>over 4000</p>
          </div>

          {/* grid 04 */}
          <div>
              <h1>4- Social media</h1>
              <img
                src={BENTO_IMG.image}
                alt={BENTO_IMG.title || "bento-img"}
                className="bento-img"
            />
              <p>over 4000</p>
          </div>

          {/* grid 05 */}
          <div>
              <h1>5 - Social media</h1>
              <img
                src={BENTO_IMG.image}
                alt={BENTO_IMG.title || "bento-img"}
                className="bento-img"
            />
              <p>over 4000</p>
          </div>

          {/* grid 06 */}
          <div>
              <h1>6 - Social media</h1>
              <img
                src={BENTO_IMG.image}
                alt={BENTO_IMG.title || "bento-img"}
                className="bento-img"
            />
              <p>over 4000</p>
          </div>

          {/* grid 07 */}
          <div>
              <h1>7 - Social media</h1>
              <img
                src={BENTO_IMG.image}
                alt={BENTO_IMG.title || "bento-img"}
                className="bento-img"
            />
              <p>over 4000</p>
          </div>

          {/* grid 08 */}
          <div>
              <h1>8 - Social media</h1>
              <img
                src={BENTO_IMG.image}
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