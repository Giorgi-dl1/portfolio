import Skill from "../components/Skill";
import bg from "../images/background-stars.svg";
import data from "../data.json";
const Skills = () => {
  const { skills } = data;
  return (
    <div
      id="skills"
      className="min-h-screen grid place-content-center space-y-8 pb-10 padding-x overflow-hidden bg-[#070724] relative"
    >
      <img
        src={bg}
        alt="background"
        className="absolute top-0 bottom-0 object-cover w-full min-h-full pointer-events-none animate-spin-slow"
      />
      <h2 className="text-4xl font-bold text-center text-white name ">
        Skills & <span className="text-orange-500">Abilites</span>
      </h2>
      <div className="flex justify-center lg:justify-start max-w-[860px] lg:max-w-[1000px] mx-auto flex-wrap w-full gap-x-8 gap-y-6">
        {skills.map((skill) => (
          <Skill
            key={skill}
            image={`/assets/skills/${skill.toLocaleLowerCase()}.${
              skill == "GSAP" ? "svg" : "png"
            }`}
            title={skill}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
