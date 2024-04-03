import { Typography, styled } from "@mui/material";
import { aboutSectionData } from "@/utils/data";
import Image from "next/image";
import AboutSectionBackground from "@/images/about-section.jpg";

const MainContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "460px",
  [theme.breakpoints.down("md")]: {},
}));

const SectionContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "45%",
  alignItems: "center",
  gap: "48px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const AboutSection = () => {
  return (
    <MainContainer>
      <Image
        src={AboutSectionBackground}
        alt={"about"}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "opacity(0.5)",
          zIndex: "-1",
        }}
      />
      <SectionContentWrapper>
        <Typography color="primary" variant="h4">
          {aboutSectionData.title}
        </Typography>
        <Typography
          color="primary"
          textAlign="center"
          variant="body1"
          fontWeight={400}
        >
          {aboutSectionData.description}
        </Typography>
      </SectionContentWrapper>
    </MainContainer>
  );
};

export default AboutSection;
