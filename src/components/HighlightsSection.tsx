import { Box, Typography, styled, Icon } from "@mui/material";
import { highlightsData } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "64px",
  justifyContent: "center",
  padding: "64px 16px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "32px",
  },
}));

const HighlightWrapper = styled(motion.div)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25%",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const HighlightsSection = () => {
  // *Animation
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  // *Animation
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {highlightsData.map((e, index) => {
        return (
          <HighlightWrapper key={index} variants={item}>
            <Box>
              <Image src={e.iconSrc} alt="logo" width={100} height={100} />
            </Box>
            <Typography color="primary" variant="h5" textAlign="center">
              {e.title}
            </Typography>
            <Typography color="primary" variant="body1" textAlign="center">
              {e.description}
            </Typography>
          </HighlightWrapper>
        );
      })}
    </MainContainer>
  );
};

export default HighlightsSection;
