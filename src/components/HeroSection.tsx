import { Button, Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import heroImg from "@/images/hero.jpeg";

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
  gap: '38px',
  [theme.breakpoints.down("md")]: {},
}));

const HeroSection = () => {
  return (
    <MainContainer>
      <Image
        src={heroImg}
        alt="heroImg"
        fill
        // height={300}
        // width={500}
        style={{ objectFit: "cover", filter: "opacity(0.5)", zIndex: "-1" }}
      />
      <HeroContent>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h1" color={"primary"}>
            MAR DE TINTA
          </Typography>
          <Typography variant="h2" color={"primary"}>
            Tattoo / Body Piercings
          </Typography>
        </Box>
        <Button variant="outlined">AGENDA TU CITA</Button>
      </HeroContent>
    </MainContainer>
  );
};

export default HeroSection;
