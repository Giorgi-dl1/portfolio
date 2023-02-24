import { TypeAnimation } from 'react-type-animation'
import { FiDownload } from 'react-icons/fi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import particlesOptions from '../particles.json'
import { ISourceOptions } from 'tsparticles-engine'
import Particles from 'react-particles'
import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
const Home = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
    }
  }, [mounted])
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])
  return (
    <div id="home" className="relative flex items-center h-screen padding-x">
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
        className="absolute top-0 left-0"
      />
      <div className="space-y-3 name pt-[70px]">
        <h1
          className={`translate-y-[100px] opacity-0 transition duration-1000 ${
            mounted && '!translate-y-0 !opacity-100'
          } text-2xl font-bold text-blue-900 md:text-6xl`}
        >
          Hi There,
          <br />
          I'm <span className="text-orange-500">Giorgi Durglishvili</span>
        </h1>
        <p
          className={`-translate-x-[200px] opacity-0 transition delay-[800ms] duration-700 ${
            mounted && '!translate-x-0 !opacity-100'
          } flex gap-1 text-sm font-bold md:text-xl`}
        >
          <span>I Am Into</span>
          <TypeAnimation
            sequence={[' Frontend Development', 2000, '']}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-red-700 "
          />
        </p>
        <button className="flex items-center gap-1 px-3 py-1 font-bold text-white transition bg-blue-900 rounded-md hover:bg-blue-700 duratio-300 md:px-6 md:py-3">
          Download CV
          <FiDownload />
        </button>
        <div className="flex gap-2">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/giorgi-durglishvili-92ba2425a/"
            target="_blank"
          >
            <div className="icon hover:bg-[#0077b5]">
              <BsLinkedin />
            </div>
          </a>

          <a
            rel="noreferrer"
            href="https://github.com/Giorgi-dl1"
            target="_blank"
          >
            <div className="icon hover:bg-black">
              <BsGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
