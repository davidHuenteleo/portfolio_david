//import styles SASS
import "./styles/styles.scss"

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//import pages
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { AboutMePage } from './pages/AboutMePage'

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
          <Route path="/trabajos" element={<ProjectPage />} />
          <Route path="/sobre-mi" element={<AboutMePage />} />
          <Route path="/projectos" element={<ProjectPage />} />
          <Route path="/projectPage" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;