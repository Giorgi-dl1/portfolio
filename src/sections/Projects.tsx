import Project from "../components/Project";
import data from "../data.json";
import { AiOutlineArrowRight } from "react-icons/ai";
import { project } from "../interfaces";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const { projects }: { projects: any[] } = data;
  const getProjects = () => {
    return showMore ? [...projects] : projects.slice(0, 4);
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      <div
        id="work"
        className="relative grid min-h-screen padding-x place-content-center"
      >
        <img
          src="https://i.pinimg.com/originals/98/33/5f/98335fcd764b32cae3780b1e1d5d39b4.gif"
          className="absolute z-[0] top-0 left-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative z-[1] py-8 space-y-8">
          <h2 className="text-4xl font-bold text-center text-white name ">
            Recent <span className="text-orange-500">Projects</span>
          </h2>
          <div
            className={`flex max-w-[1200px]  transition-all duration-500 md:mx-auto flex-wrap justify-center gap-y-7 gap-x-4 lg:justify-between`}
          >
            {getProjects().map((project, index) => (
              <Project index={index} project={project} key={project.name} />
            ))}
          </div>
        </div>
        <div
          onClick={() => setShowMore(!showMore)}
          className="relative flex items-center gap-1 px-6 py-2 mx-auto mb-4 font-bold text-white border border-white rounded shadow-sm cursor-pointer shadow-white hover:bg-opacity-90 max-w-max"
        >
          <span>{!showMore ? "Show More" : "Show Less"}</span>{" "}
          <AiOutlineArrowRight className={`${showMore ? "-rotate-90" : ""}`} />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Projects;
