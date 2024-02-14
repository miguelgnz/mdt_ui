import { Typography, styled } from "@mui/material";
import { artistsData } from "@/utils/data";
import ArtistCard from "@/components/ArtistCard";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "54px",
  margin: "64px 0",
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

const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "64px",
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: theme.breakpoints.values.md,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "48px",
  },
}));

const ArtistsSection = () => {
  return (
    <MainContainer>
      <SectionTitleWrapper>
        <Typography variant="h2" color="primary" textAlign="center">
          Conoce a Nuestros Artistas
        </Typography>
        <Typography variant="body1" color="primary" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Typography>
      </SectionTitleWrapper>
      <CardsContainer>
        {artistsData.map((artist) => {
          return (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              instaUrl={artist.instaUrl}
              bio={artist.bio}
              skills={artist.skills}
              avatar={artist.avatar}
              featuredPhoto={artist.featuredPhoto}
              artPhotos={artist.artPhotos}
            />
          );
        })}
      </CardsContainer>
    </MainContainer>
  );
};

export default ArtistsSection;
