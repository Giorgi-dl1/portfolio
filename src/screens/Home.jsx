import { motion as m } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, eas: "easeOut" }}
      className="text-gray-900  absolute max-h-screen top-0 left-0 w-full min-h-max px-[2rem] lg:px-[5rem] md:px-[4rem]"
    >
      <div className="relative font-bold mt-40">
        <svg width="100%" height="200px">
          <clipPath id="text-overlay">
            <text x="0" y="35%" fill="red" className="text-4xl md:text-5xl">
              <tspan x="0">Hello! I am</tspan>
              <tspan x="0" dy="1.2em">
                Giorgi Durglishvili
              </tspan>
              <tspan x="0" dy="1.8em" className="text-2xl font-medium">
                frontend developer
              </tspan>
            </text>
          </clipPath>
        </svg>
        <video
          src="/video/Smoke.mov"
          className="absolute top-0"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="mt-[7rem]">
        <button className="py-[0.7rem] px-[1rem] bg-[#080808] text-white hover:opacity-80 rounded">
          Download CV
        </button>
        <div className="flex mt-[2rem]">
          <a
            href="https://github.com/Giorgi-dl1"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-[35px] h-[35px]  cursor-pointer hover:opacity-80 fill-black" />
          </a>
        </div>
      </div>
    </m.div>
  );
}
