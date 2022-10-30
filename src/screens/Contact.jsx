import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact({ setLocation }) {
  const location = useLocation();
  useEffect(() => {
    setLocation(location.pathname);
  }, [location, setLocation]);
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, eas: "easeOut" }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-blue-300"
    >
      <div className="my-40 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl font-bold text-center lg:text-left lg:text-7xl"
        >
          Contact
        </m.h1>
      </div>
    </m.div>
  );
}
