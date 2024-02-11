import { styled } from "@mui/material";
import HeroSection from "./HeroSection";
import HighlightsSection from "@/components/HighlightsSection";

const BodyMainContainer = styled("div")(({ theme }) => ({
  // display: "flex",
  margin: "64px 0 0 0",
  width: "100%",
  // maxWidth: theme.breakpoints.values.lg,
  padding: "0 16px",
  [theme.breakpoints.down("md")]: {},
}));

const HomePageBody = () => {
  return (
    <BodyMainContainer id="body-main-container">
      <HeroSection />
      <HighlightsSection />
    </BodyMainContainer>
  );
};

export default HomePageBody;
