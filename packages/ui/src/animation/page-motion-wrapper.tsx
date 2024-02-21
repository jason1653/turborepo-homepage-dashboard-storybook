import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
}

const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default MotionWrapper;
