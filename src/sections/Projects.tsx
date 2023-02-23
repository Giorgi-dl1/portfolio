import Project from '../components/Project'
import data from '../data.json'
import { project } from '../interfaces'

const Projects = () => {
  const { projects }: { projects: project[] } = data
  return (
    <div className="relative min-h-screen padding-x">
      <img
        src="https://i.pinimg.com/originals/98/33/5f/98335fcd764b32cae3780b1e1d5d39b4.gif"
        className="absolute z-[0] top-0 left-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative z-[1] py-8 space-y-8">
        <h2 className="text-4xl font-bold text-center text-white name ">
          Recent <span className="text-orange-500">Projects</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-y-7 gap-x-4 lg:justify-between">
          {projects.map((project, index) => (
            <Project index={index} project={project} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
