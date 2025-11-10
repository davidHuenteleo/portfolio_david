/*importaciones*/
import { useRef, useState } from 'react';
import '../styles/components/_navbar.scss';

/*Framer Motion*/
import { motion } from 'framer-motion';

export const Navbar = () => {

  return (
  <nav className="wrapper has-padding">
      <div className="navbar">

        {/*componentes*/}
        <SlideTabs />

      </div>
    </nav>
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
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Home</Tab>

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