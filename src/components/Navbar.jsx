/*importaciones*/
import { useRef, useState } from 'react';
import '../styles/components/_navbar.scss';

/*Framer Motion*/
import { motion } from 'framer-motion';

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

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <ul onMouseLeave={() => {
      setPosition((pv) => ({
        ...pv,
        opacity: 0,
      }))
    }} className="SlideTabs">
      <Tab setPosition={setPosition}>Inicio</Tab>
      <Tab setPosition={setPosition}>Trabajos</Tab>
      <Tab setPosition={setPosition}>Sobre mì</Tab>
      <Tab setPosition={setPosition}>Projectos</Tab>

      <Cursor position={position} />
    </ul>
  )
}

const Tab = ({ children, setPosition}) => {

  const ref = useRef(null);

  return(
    <li
      ref={ref}
      onMouseEnter={() => {

        if(!ref.current) return;

        const {width} = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="child">
      {children}
    </li>
  )
}


const Cursor = ({ position }) => {
  return(
    <motion.li
        animate={position}
        className="Cursor"
    />
    );
}

export default Navbar;