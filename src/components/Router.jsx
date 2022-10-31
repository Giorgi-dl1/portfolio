import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import ProjectsScreen from "../screens/ProjectsScreen";
import Home from "../screens/Home";

export default function Router({ setLocation }) {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home setLocation={setLocation} />} />
        <Route
          path="/portfolio"
          element={<ProjectsScreen setLocation={setLocation} />}
        />
      </Routes>
    </AnimatePresence>
  );
}
