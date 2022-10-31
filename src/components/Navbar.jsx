import { Link } from "react-router-dom";

export default function Navbar({ location }) {
  return (
    <nav className="z-20 relative flex justify-between px-[2rem] py-5 lg:px-[5rem] md:px-[4rem] align-center bg-white text-black">
      <ul className="text-xl flex gap-7 font-[roboto]">
        <li className="grid content-center ">
          <Link
            to="/"
            className="hover:opacity-60 py-[2rem] ease duration-[0.5s] border-solid border-b-[2px] border-transparent"
            style={
              location === "/"
                ? { borderColor: "#5ece7b", color: "#5ece7b" }
                : {}
            }
          >
            HOME
          </Link>
        </li>
        <li className="grid content-center">
          <Link
            className="hover:opacity-60 py-[2rem] ease duration-[0.5s] border-solid border-b-[2px] border-transparent"
            style={
              location === "/portfolio"
                ? { borderColor: "#5ece7b", color: "#5ece7b" }
                : {}
            }
            to="/portfolio"
          >
            PORTFOLIO
          </Link>
        </li>
      </ul>
      <img
        src="/images/logo.png"
        alt="logo pineapple"
        className="w-20 rotate-[15deg]"
      />
    </nav>
  );
}
