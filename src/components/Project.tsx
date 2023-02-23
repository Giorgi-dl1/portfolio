import { BsFillPlayFill, BsGithub } from 'react-icons/bs'
import { project } from '../interfaces'
interface ProjectComponent {
  project: project
  index: number
}

const Project = ({ project, index }: ProjectComponent) => {
  return (
    <div className="max-w-[300px] md:max-w-[520px] relative group/card overflow-hidden w-full h-[150px] md:h-[270px] rounded-xl p-[8px] md:p-[12px] border border-[#fafafa62]">
      <div className="relative  rounded-xl overflow-hidden transition-all duration-500 w-[85%] group-hover/card:w-full h-[130px] md:h-[246px]">
        <div className="absolute z-[2] top-0 left-0 w-full h-full bg-[#33333334]" />
        <img
          className="object-cover w-full h-full z-[1]"
          src={project.image}
          alt={project.name}
        />
        <h2 className="absolute group-hover/card:bottom-20 md:group-hover/card:bottom-36 transition-all duration-500 text-2xl font-bold z-[3] text-white left-[4.5rem] md:left-[14.5rem] bottom-6">
          {project.name}
        </h2>
        <div className="group-hover/card:left-[4.5rem] md:group-hover/card:left-[14.5rem] absolute left-[600px] top-[50px] md:top-[105px] transition-all duration-500 opacity-0 group-hover/card:opacity-100 z-[3] w-[190px] md:w-[250px]">
          <p className="text-[10px] md:text-sm text-white h-[45px] md:h-[65px]">
            {project.preview}
          </p>
          <div className="flex gap-2 mt-2 md:mt-3">
            <a rel="noreferrer" href={project.source} target="_blank">
              <div className="icon group/icon relative !p-1 md:!p-2 hover:!bg-[#202020] !bg-black">
                <BsGithub />
                <div className="icon-label-wrapper">
                  <div
                    className={`${
                      (index + 1) % 2 ? 'text-red-700' : 'text-blue-900'
                    } icon-label`}
                  >
                    Source Code
                  </div>
                  <div className="label-arrow" />
                </div>
              </div>
            </a>
            <a rel="noreferrer" href={project.live} target="_blank">
              <div className="icon group/icon relative !p-1 md:!p-2 hover:!bg-[#202020] !bg-black">
                <BsFillPlayFill />
                <div className="icon-label-wrapper">
                  <div
                    className={`${
                      (index + 1) % 2 ? 'text-red-700' : 'text-blue-900'
                    } icon-label`}
                  >
                    Live
                  </div>
                  <div className="label-arrow" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`absolute w-6 h-6 md:w-8 md:h-8 ${
          (index + 1) % 2 ? 'bg-blue-900' : 'bg-red-700'
        }  rounded-full group-hover/card:opacity-50 right-3 md:right-6 bottom-4 md:bottom-8 group-hover/card:scale-[19] md:group-hover/card:scale-[18] transition-all duration-500`}
      />
    </div>
  )
}

export default Project
