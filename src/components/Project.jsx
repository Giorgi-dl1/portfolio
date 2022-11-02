import { BsGithub } from "react-icons/bs";

export default function Project({ item }) {
  const toolsArr = item.languages.split(",");
  return (
    <div
      key={item.name}
      className="group/project relative p-[1rem] rounded hover:shadow-2xl ease duration-500"
    >
      {item.live ? (
        <div className="relative">
          <a href={item.live} target="_blanck" rel="noopener noreferrer">
            <img
              src={item.image}
              alt={item.name}
              className="w-[380px] rounded object-cover"
            />
          </a>
          <div className="absolute w-0 h-0 overflow-hidden group-hover/project:w-10 group-hover/project:h-10 ease duration-500 right-[0.5rem] bottom-[-1rem]">
            <a
              href={item.github}
              className="relative hover:opacity-80 rounded-full ease duration-500"
              target="_blanck"
            >
              <div className="z-10">
                <BsGithub className="w-10 h-10 fill-black" />
              </div>
              <div className="w-[2.4rem] h-[2.4rem] bg-[#5ece7b] rounded-full mt-[-2.4rem]"></div>
            </a>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-[380px] rounded object-cover"
          />
          <div className="absolute w-0 h-0 overflow-hidden group-hover/project:w-10 group-hover/project:h-10 ease duration-500 right-[0.5rem] bottom-[-1rem]">
            <a
              href={item.github}
              className="relative hover:opacity-80 rounded-full ease duration-500"
              target="_blanck"
            >
              <div className="z-10">
                <BsGithub className="w-10 h-10 fill-black" />
              </div>
              <div className="w-[2.4rem] h-[2.4rem] bg-[#5ece7b] rounded-full mt-[-2.4rem]"></div>
            </a>
          </div>
        </div>
      )}
      <div className="py-8">
        {item.live ? (
          <div className="text-xl font-[600] my-2">
            <a href={item.live} target="_blanck">
              {item.name}
            </a>
          </div>
        ) : (
          <div className="text-xl font-[600] my-2">{item.name}</div>
        )}

        <div className="flex gap-2 mt-[1rem]">
          {toolsArr.map((tool) => (
            <div className="py-[6px] px-[12px] rounded  border-[1px] border-black">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
