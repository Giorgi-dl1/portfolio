/* eslint-disable react/style-prop-object */
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./components/Router";
import { GiPineapple } from "react-icons/gi";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="z-20 relative flex justify-between px-[2rem] lg:px-[5rem] md:px-[4rem] py-5 align-center bg-[#080808] text-white">
          <ul className="text-2xl font-medium flex gap-7 ">
            <li className="grid content-center ">
              <Link
                to="/"
                className="hover:text-[#ebb22f] transition ease-in-out delay-50"
              >
                Home
              </Link>
            </li>
            <li className="grid content-center">
              <Link
                className="hover:text-[#ebb22f] transition ease-in-out delay-50"
                to="/details"
              >
                details
              </Link>
            </li>
            <li className="grid content-center">
              <Link
                className="hover:text-[#ebb22f] transition ease-in-out delay-50"
                to="/contact"
              >
                contact
              </Link>
            </li>
          </ul>
          <GiPineapple className="fill-[#ebb22f] w-20 h-20" />
        </nav>
        <Router />
      </div>
    </BrowserRouter>
  );
}
