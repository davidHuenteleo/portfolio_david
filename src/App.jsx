//import styles SASS
import "./styles/styles.scss"

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//import pages
import { HomePage } from './pages/HomePage'
import { Entrepreneurs } from './pages/Entrepreneurs'
import { AboutMePage } from './pages/AboutMePage'

import { BirdiProject } from './pages/BirdiProject'
import { BCHProject } from './pages/BCHProject'
import { PheroProject } from './pages/PheroProject'
import { BetterflyProject } from './pages/BetterflyProject'

//import components
import { Navbar } from './components/Navbar'

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<HomePage />} />
          <Route path="/Entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/sobre-mi" element={<AboutMePage />} />

          {/* BirdiProject */}
          <Route path="/BirdiProject" element={<BirdiProject />} />

          {/* BCHProject */}
          <Route path="/BCHProject" element={<BCHProject />} />

          {/* PheroProject */}
          <Route path="/PheroProject" element={<PheroProject />} />

          {/* BetterflyProject */}
          <Route path="/BetterflyProject" element={<BetterflyProject />} />

        </Routes>

      </AnimatePresence>
    </>
  )
}

export default App;