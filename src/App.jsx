//import styles SASS
import "./styles/styles.scss"

//import pages
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

//import components
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <ProjectPage />
    </>
  )
}

export default App;