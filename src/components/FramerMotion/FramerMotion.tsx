import { motion } from "framer-motion";
import { MotionFramerProps } from "./FramerMotionProps";
import { ComponentWithChildrenType } from "@/types";

const FramerMotion = ({ children, className, delay, ...props }: MotionFramerProps & ComponentWithChildrenType) => {
  return (
    <motion.section
      {...props}
      className={`${className} border rounded-2xl px-6 py-2 relative`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  )
}

export default FramerMotion;
