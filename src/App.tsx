import particlesOptions from './particles.json'
import { ISourceOptions } from 'tsparticles-engine'
import Particles from 'react-particles'
import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import Home from './sections/Home'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="App">
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <Home />
      <div className="bg-white">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
