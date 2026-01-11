/*importaciones*/
import { useRef, useState } from 'react';
import '../styles/components/_navbar.scss';

/*Framer Motion*/
import { motion } from 'framer-motion';

/*React Router*/
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  // Armado de componentes
  return (
    <nav className="wrapper has-padding">

      <div className="navbar">

        {/* Icono izquierda */}
        <div className="navbar__icon navbar__icon--left">
          <IconLeft />
        </div>

        {/* Componente central */}
        <SlideTabs />

        {/* Icono derecha */}
        <div className="navbar__icon navbar__icon--right">
          <IconRight />
        </div>
      </div>

    </nav>
  )
}

// Componente para el icono izquierdo
const IconLeft = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="icon"
    >
      {/* Ejemplo: icono de menú hamburguesa */}
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )
}

// Componente para el icono derecho
const IconRight = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="icon"
    >
      {/* Ejemplo: icono de búsqueda */}
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  )
}

const routes = [
  { to: '/', label: 'Inicio' },
  { to: '/', label: 'Trabajos', scrollTo: 'ContactMe' }, // ← Agregué scrollTo
  { to: '/sobre-mi', label: 'Sobre mì' },
  { to: '/Entrepreneurs', label: 'Entrepreneurs' }
]


const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className="SlideTabs"
    >
      {routes.map((route) => (
        <Tab
          key={route.to}
          to={route.to}
          setPosition={setPosition}
          scrollTo={route.scrollTo}
        >
          {route.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  )
}

// eslint-disable-next-line react/prop-types
const Tab = ({ children, to, setPosition, scrollTo }) => {
  const ref = useRef(null)
  const navigate = useNavigate()

  const handleClick = (e) => {
    // Si tiene scrollTo, manejar el scroll
    if (scrollTo) {
      e.preventDefault()

      // Navegar a la ruta si no estamos ahí
      const currentHash = window.location.hash.replace('#', '')
      if (currentHash !== to) {
        navigate(to)
      }

      // Esperar un momento para que la página se cargue y luego hacer scroll
      setTimeout(() => {
        const element = document.getElementById(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
    // Si no tiene scrollTo, dejar que NavLink maneje la navegación normalmente
  }

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        })
      }}
      className="child"
    >
      <NavLink to={to} onClick={handleClick}>
        {children}
      </NavLink>
    </li>
  )
}

// eslint-disable-next-line react/prop-types
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="Cursor"
    />
  );
}


export default Navbar;