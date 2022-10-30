export default function Projects({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}
