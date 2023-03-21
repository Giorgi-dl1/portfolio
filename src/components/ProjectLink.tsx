import { IconType } from 'react-icons'

interface ProjectLinkProps {
  title: string
  to: string
  Icon: IconType
  index: number
}
const ProjectLink = ({ title, to, Icon, index }: ProjectLinkProps) => {
  return (
    <a rel="noreferrer" href={to} target="_blank">
      <div className="icon group/icon relative !p-1 md:!p-2 hover:!bg-[#202020] !bg-black">
        <Icon />
        <div className="icon-label-wrapper">
          <div
            className={`${
              (index + 1) % 2 ? 'text-red-700' : 'text-blue-900'
            } icon-label`}
          >
            {title}
          </div>
          <div className="label-arrow" />
        </div>
      </div>
    </a>
  )
}

export default ProjectLink
