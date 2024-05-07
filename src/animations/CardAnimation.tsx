import { motion } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
}

const CardAnimation = ({ children }: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9, y: 10 }}
      whileInView={{
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
