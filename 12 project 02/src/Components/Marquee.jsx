import { motion } from "motion/react";
import React from "react";

motion;

const Marquee = ({ imagesurl, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "-0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-10 pr-20"
      >
        {imagesurl.map((url, index) => (
          <img
            src={url}
            key={index}
            className="m-auto w-30 flex-shrink-0 object-contain h-12"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "-0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-10 pr-20"
      >
        {imagesurl.map((url, index) => (
          <img
            src={url}
            key={index}
            className="m-auto w-30 flex-shrink-0 object-contain h-12"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
