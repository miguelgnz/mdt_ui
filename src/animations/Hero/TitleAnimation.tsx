import { motion } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
}

const TitleAnimation = ({ children }: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TitleAnimation;
