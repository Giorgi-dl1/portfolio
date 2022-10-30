/* eslint-disable react/style-prop-object */
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
export default function App() {
  const [location, setLocation] = useState("home");
  return (
    <BrowserRouter>
      <div>
        <Navbar location={location} />
        <Router setLocation={setLocation} />
      </div>
    </BrowserRouter>
  );
}
