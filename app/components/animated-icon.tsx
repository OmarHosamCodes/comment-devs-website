"use client";
import { IconArrowBadgeDownFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

const AnimatedIcon = () => {
  const handelOnClick = () => {};
  return (
    <motion.div
      className="white" // Apply any Tailwind CSS classes here
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <IconArrowBadgeDownFilled
        size={20}
        onClick={handelOnClick}
        className="cursor-pointer"
      />
    </motion.div>
  );
};

export default AnimatedIcon;
