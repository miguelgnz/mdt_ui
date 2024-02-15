import { Button, Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import heroImg from "@/images/hero.jpeg";
import { heroSectionData } from "@/utils/data";

const MainContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "600px",
  [theme.breakpoints.down("md")]: {
    height: "480px",
  },
}));

const HeroContent = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "38px",
  [theme.breakpoints.down("md")]: {},
}));

const HeroSection = () => {
  return (
    <MainContainer>
      <Image
        src={heroImg}
        alt="heroImg"
        fill
        style={{
          objectFit: "cover",
          borderRadius: "18px",
          filter: "opacity(0.5)",
          zIndex: "-1",
          padding: '0 16px'
        }}
      />
      <HeroContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" color={"primary"}>
            {heroSectionData.title}
          </Typography>
          <Typography variant="h2" color={"primary"}>
            {heroSectionData.subtitle}
          </Typography>
        </Box>
        <Button variant="outlined">{heroSectionData.actionButton}</Button>
      </HeroContent>
    </MainContainer>
  );
};

export default HeroSection;
