import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../screens/Contact";
import Details from "../screens/Details";
import Home from "../screens/Home";

export default function Router() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
