import Project from "./Project";

export default function Projects({ data }) {
  return (
    <div className="custom-grid lg:justify-between flex-wrap gap-x-3 gap-y-[4rem] py-[2rem]">
      {data.map((item) => (
        <div className="custom-grid-child">
          <Project item={item} />
        </div>
      ))}
    </div>
  );
}
