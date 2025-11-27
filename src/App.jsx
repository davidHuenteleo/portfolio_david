//import styles SASS
import "./styles/styles.scss"

//import React Router
import { HashRouter, Routes, Route } from 'react-router-dom'

//import pages
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { AboutMePage } from './pages/AboutMePage'

//import components
import { Navbar } from './components/Navbar'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trabajos" element={<ProjectPage />} />
        <Route path="/sobre-mi" element={<AboutMePage />} />
        <Route path="/projectos" element={<ProjectPage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App;