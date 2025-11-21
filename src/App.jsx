//import styles SASS
import "./styles/styles.scss"

//import pages
import { HomePage } from './pages/HomePage'

//import components
import { Navbar } from '../src/components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export default App;
