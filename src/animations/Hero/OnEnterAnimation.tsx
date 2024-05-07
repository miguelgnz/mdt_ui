import { motion } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
}

const OnEnterAnimation = ({ children }: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default OnEnterAnimation;
