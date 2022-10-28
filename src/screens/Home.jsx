import { motion as m } from "framer-motion";
export default function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, eas: "easeOut" }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100"
    >
      <div className=" my-40 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl font-bold text-center lg:text-left lg:text-7xl"
        >
          Home
        </m.h1>
      </div>
    </m.div>
  );
}
