import { Typography, styled } from "@mui/material";
import FeaturedImageView from "./FeaturedImageView";
import { featuredSectionData } from "@/utils/data";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "42px",
  padding: "0 16px 64px 16px",
  [theme.breakpoints.down("md")]: {},
}));

const SectionTitleWrapper = styled("div")(({ theme }) => ({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ContentMainWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  maxWidth: theme.breakpoints.values.lg,
  height: "500px",
  gap: "18px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "840px",
  },
}));

const SecondaryFeaturedWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "50%",
  },
}));

const PrimaryFeaturedWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  padding: "10px",
  width: "50%",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "50%",
    padding: "8px",
  },
}));

const StyledRow = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "18px",
  height: "50%",
  [theme.breakpoints.down("md")]: {},
}));

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  padding: "10px",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("md")]: {},
}));

const FeaturedSection = () => {
  const { secondaryFeaturedImages, primaryFeaturedImage } = featuredSectionData;

  return (
    <MainContainer id="art">
      <SectionTitleWrapper>
        <Typography variant="h4" color="primary" textAlign="center">
          Arte Destacado
        </Typography>
      </SectionTitleWrapper>
      <ContentMainWrapper>
        <SecondaryFeaturedWrapper>
          <StyledRow id="row1">
            {secondaryFeaturedImages.row1.map((e, i) => {
              return (
                <ImageContainer key={i}>
                  <FeaturedImageView
                    imageSrc={e.imageSrc}
                    avatarSrc={e.avatarSrc}
                    avatarSize={e.avatarSize}
                    author={e.author}
                    typographyVariant={e.typographyVariant}
                  />
                </ImageContainer>
              );
            })}
          </StyledRow>
          <StyledRow id="row1">
            {secondaryFeaturedImages.row2.map((e, i) => {
              return (
                <ImageContainer key={i}>
                  <FeaturedImageView
                    imageSrc={e.imageSrc}
                    avatarSrc={e.avatarSrc}
                    avatarSize={e.avatarSize}
                    author={e.author}
                    typographyVariant={e.typographyVariant}
                  />
                </ImageContainer>
              );
            })}
          </StyledRow>
        </SecondaryFeaturedWrapper>
        <PrimaryFeaturedWrapper>
          <FeaturedImageView
            imageSrc={primaryFeaturedImage.imageSrc}
            avatarSrc={primaryFeaturedImage.avatarSrc}
            avatarSize={primaryFeaturedImage.avatarSize}
            author={primaryFeaturedImage.author}
            typographyVariant={primaryFeaturedImage.typographyVariant}
          />
        </PrimaryFeaturedWrapper>
      </ContentMainWrapper>
    </MainContainer>
  );
};

export default FeaturedSection;
