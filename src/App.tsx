import Home from './sections/Home'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import { Contact } from './sections/Contact'
import QuickChat from './components/QuickChat'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <div className="bg-white">
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <QuickChat />
    </div>
  )
}

export default App
