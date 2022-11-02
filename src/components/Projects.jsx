import { BsGithub } from "react-icons/bs";
import Project from "./Project";

export default function Projects({ data }) {
  return (
    <div className="flex justify-center lg:justify-between flex-wrap gap-x-3 gap-y-[4rem] py-[2rem]">
      {data.map((item) => (
        <Project item={item} />
      ))}
    </div>
  );
}
