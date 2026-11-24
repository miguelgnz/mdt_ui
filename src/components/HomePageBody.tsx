import { styled } from "@mui/material";
import HeroSection from "@/components/HeroSection";
import StylesStrip from "@/components/StylesStrip";
import HighlightsSection from "@/components/HighlightsSection";
import ArtistsSection from "@/components/ArtistsSection";
import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import StickyButton from "@/components/StickyButton";

const Main = styled("main")(() => ({
  width: "100%",
}));

const HomePageBody = () => {
  return (
    <Main id="body-main-container">
      <HeroSection />
      <StylesStrip />
      <HighlightsSection />
      <ArtistsSection />
      <AboutSection />
      <FeaturedSection />
      <ContactSection />
      <CtaSection />
      <StickyButton />
    </Main>
  );
};

export default HomePageBody;
