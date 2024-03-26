import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

// keyframes - if we want to animate one position to another and then another we use keyframes, to do that we use []
// in array each value means different keyframes
// instead of hard coding different keyframes in array, we use yoyo, value means keyframes, 10 = 10 different keyframes, if we want loop, we use Infinity

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      // animate={{
      //   marginTop: 200,
      //   opacity: 0.2,
      //   rotateZ: 180,
      // }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* animate attribute is end point, animation end to */}
      {/* x and y properties translates elements */}
      {/* whileHover works when we hovering an element */}
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
