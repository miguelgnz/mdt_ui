import { Box, styled } from "@mui/material";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ArtistsSection from "@/components/ArtistsSection";
import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import ContactSection from "@/components/ContactSection";
import StickyButton from "@/components/StickyButton";

const BodyMainContainer = styled("div")(({ theme }) => ({
  margin: "64px 0 0 0",
  width: "100%",
}));

const AboutOutterContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "600px",
  [theme.breakpoints.down("md")]: {
    height: "320px",
  },
}));

const HomePageBody = () => {
  return (
    <BodyMainContainer id="body-main-container">
      <HeroSection />
      <ArtistsSection />
      <AboutOutterContainer>
        <AboutSection />
      </AboutOutterContainer>
      <HighlightsSection />
      <FeaturedSection />
      <ContactSection />
      <StickyButton />
    </BodyMainContainer>
  );
};

export default HomePageBody;
