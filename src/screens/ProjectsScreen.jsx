import { motion as m } from "framer-motion";
import data from "../data.json";
import { AiOutlineArrowDown as Arrow } from "react-icons/ai";
import { useEffect, useState } from "react";
import Projects from "../components/Projects";
import { useLocation } from "react-router-dom";

export default function ProjectsScreen({ setLocation }) {
  const location = useLocation();
  const [show, setShow] = useState({});
  const projects = data;
  const headers = Object.keys(projects);

  useEffect(() => {
    setLocation(location.pathname);
  }, [location, setLocation]);

  const clickhandler = (header) => {
    let obj = { ...show };
    obj[header] = !obj[header];
    setShow(obj);
  };
  console.log(show);
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, eas: "easeOut" }}
      className="text-gray-900 pb-5 absolute top-0 left-0 w-full min-h-screen px-[2rem] lg:px-[5rem] md:px-[4rem]"
    >
      <div className=" mt-40 mb-20 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl font-[aboreto]  font-bold text-center lg:text-left lg:text-5xl"
        >
          Recent Projects
        </m.h1>
      </div>
      <div className="flex-col flex gap-6 mt-[3rem]">
        {headers.map((header) => (
          <div key={header}>
            <div
              onClick={() => clickhandler(header)}
              className="bg-[#5ece7b] flex mx-auto max-w-[80vw] lg:mx-0 justify-between align-center text-white text-2xl w-[27rem] p-[.75rem] cursor-pointer hover:opacity-80 rounded"
            >
              {header}
              <Arrow
                className={
                  show[header]
                    ? "rotate-180 ease duration-500"
                    : "ease duration-500"
                }
              />
            </div>
            {show[header] && <Projects data={projects[header]} />}
          </div>
        ))}
      </div>
    </m.div>
  );
}
