import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      {/* if we want to make component draggable we use attribute drag */}
      {/* dragConstraints - when we move draggable element and mouse out it will return to original position */}
      {/* dragElastic - we can drag much faster, higher number will be able to drag fast, lower low */}
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7}
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>
      {/* initial attribute is start point, animation start from */}
      {/* type: tween will not bounce elements, and spring will, spring is default value for type */}
      {/* stiffness controls how much element will bounce, higher value will bounce much faster, default is 100 */}
      {/* stiffness can be used when type is spring */}
      {/* transition attribute controls transition options */}
      <motion.div
        className="title"
        animate={{ y: -10 }}
        initial={{ y: -250 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
