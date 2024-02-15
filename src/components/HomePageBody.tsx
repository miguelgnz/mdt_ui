import { Box, styled } from "@mui/material";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ArtistsSection from "@/components/ArtistsSection";
import AboutSection from "@/components/AboutSection";

const BodyMainContainer = styled("div")(({ theme }) => ({
  margin: "64px 0 0 0",
  width: "100%",
  // display: "flex",
  // maxWidth: theme.breakpoints.values.lg,
  // padding: "0 16px",
  [theme.breakpoints.down("md")]: {},
}));

const HomePageBody = () => {
  return (
    <BodyMainContainer id="body-main-container">
      <HeroSection />
      <ArtistsSection />
      <Box sx={{ width: "100%", height: '460px' }}>
        <AboutSection />
      </Box>
      <HighlightsSection />
    </BodyMainContainer>
  );
};

export default HomePageBody;
