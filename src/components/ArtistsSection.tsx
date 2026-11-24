import { styled, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import { artistsData } from "@/utils/data";
import ArtistCard from "@/components/ArtistCard";
import CardAnimation from "@/animations/CardAnimation";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { colors } from "@/styles/theme";

const Section = styled("section")(({ theme }) => ({
  padding: "0 0 112px",
  [theme.breakpoints.down("md")]: {
    padding: "0 0 80px",
  },
}));

const Grid = styled("div")(() => ({
  marginTop: "48px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "40px 24px",
}));

const InviteCard = styled("a")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",
  padding: "32px",
  minHeight: "100%",
  border: `1px solid ${colors.lineStrong}`,
  borderRadius: "4px",
  color: colors.bone,
  textDecoration: "none",
  transition: "border-color 150ms ease",
  "&:hover": { borderColor: colors.muted },
  "&:focus-visible": {
    outline: `2px solid ${colors.bone}`,
    outlineOffset: "3px",
  },
}));

const ArtistsSection = () => {
  return (
    <Section id="artists" aria-labelledby="artistas-titulo">
      <Container>
        <SectionHeader
          id="artistas-titulo"
          title="Nuestros artistas"
          aside="Comprometidos con traerte propuestas nuevas en el mundo del tatuaje: arte, dedicación y las nuevas tendencias."
        />
        <Grid>
          {artistsData.map((artist) => {
            return (
              <CardAnimation key={artist.id}>
                <ArtistCard
                  id={artist.id}
                  name={artist.name}
                  instaUrl={artist.instaUrl}
                  bio={artist.bio}
                  skills={artist.skills}
                  avatar={artist.avatar}
                  featuredPhoto={artist.featuredPhoto}
                  artPhotos={artist.artPhotos}
                />
              </CardAnimation>
            );
          })}
          <InviteCard
            href="https://wa.me/50231366446"
            target="_blank"
            rel="noreferrer"
          >
            <Typography variant="h5" component="span" sx={{ fontSize: "34px" }}>
              ¿No sabes con quién tatuarte?
            </Typography>
            <Typography color="text.secondary">
              Cuéntanos tu idea y te recomendamos al artista ideal.
            </Typography>
            <Typography
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              Escríbenos <FiArrowRight aria-hidden="true" />
            </Typography>
          </InviteCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default ArtistsSection;
