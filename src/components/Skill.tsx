interface Skill {
  image: string
  title: string
}
const Skill = ({ image, title }: Skill) => {
  return (
    <div className="relative skill-wrapper group/skill flex text-center  w-[150px] h-[140px] ">
      <div className="z-10 group-hover/skill:-translate-y-[40px] cursor-default w-full transition-all duration-1000 flex flex-col items-center justify-center gap-2">
        <img src={image} alt={title} className="object-cover h-16 z-[2]" />
        <h4 className="text-xl font-bold text-white z-[2]">{title}</h4>
      </div>
      <div className="bg-[#030336] skill-bg border-[#ffffff2f] z-[1] transition-all duration-1000 border w-full h-full absolute top-0 left-0 rounded" />
    </div>
  )
}

export default Skill
