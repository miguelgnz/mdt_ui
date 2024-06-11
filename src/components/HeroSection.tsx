import { Button, Typography, styled, useMediaQuery } from "@mui/material";
import Image from "next/image";
import heroImg from "@/images/hero3.jpg";
import { heroSectionData } from "@/utils/data";
import { useState } from "react";
import AppointmentModal from "@/components/AppointmentModal";
import OnEnterAnimation from "@/animations/Hero/OnEnterAnimation";
import TitleAnimation from "@/animations/Hero/TitleAnimation";
import SubtitleAnimation from "@/animations/Hero/SubtitleAnimation";

const MainContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "600px",
  [theme.breakpoints.down("md")]: {
    height: "320px",
  },
}));

const HeroContent = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "38px",
}));

const TitlesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const mobileView = useMediaQuery("(max-width: 840px)");

  return (
    <MainContainer id="home">
      <Image
        src={heroImg}
        alt="heroImg"
        fill
        style={{
          objectFit: "cover",
          borderRadius: "18px",
          filter: "opacity(0.7)",
          zIndex: "-1",
          padding: "0 16px",
        }}
      />
      <HeroContent>
        <OnEnterAnimation>
          <Image
            alt="logo"
            src={"/mdt-logo.png"}
            width={mobileView ? 80 : 120}
            height={mobileView ? 80 : 120}
            style={{
              display: "block",
              filter: "drop-shadow(2px 4px 4px black)",
            }}
          />
        </OnEnterAnimation>
        <TitlesWrapper>
          <Typography variant="h1" color={"primary"}>
            <TitleAnimation>{heroSectionData.title}</TitleAnimation>
          </Typography>
          <Typography variant="h4" color={"primary"}>
            <SubtitleAnimation>{heroSectionData.subtitle}</SubtitleAnimation>
          </Typography>
        </TitlesWrapper>
        <Button variant="outlined" onClick={handleOpen}>
          {heroSectionData.actionButton}
        </Button>
      </HeroContent>
      <AppointmentModal modalOpen={modalOpen} handleClose={handleClose} />
    </MainContainer>
  );
};

export default HeroSection;
