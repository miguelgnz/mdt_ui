import { motion } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
}

const CardAnimation = ({ children }: AnimatedWrapperProps) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    duration: 0.4
  };
  return (
    <motion.div
      initial={{ scale: 0.9, y: 10 }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.1, type: "spring" },
      }}
      whileInView={{
        scale: 1,
        y: 0,
        transition: {spring}
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
