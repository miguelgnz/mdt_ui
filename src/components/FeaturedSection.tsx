import { styled } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import FeaturedImageView from "./FeaturedImageView";
import { featuredSectionData } from "@/utils/data";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { colors } from "@/styles/theme";

const Section = styled("section")(({ theme }) => ({
  padding: "112px 0",
  [theme.breakpoints.down("md")]: {
    padding: "80px 0",
  },
}));

// Bento grid: the primary piece spans two rows, the rest fill a 2×2 block.
const Grid = styled("div")(({ theme }) => ({
  marginTop: "48px",
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridTemplateRows: "repeat(2, minmax(260px, auto))",
  gap: "16px",
  "& > :first-of-type": { gridRow: "span 2" },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gridTemplateRows: "auto",
    "& > :first-of-type": { gridColumn: "span 2", gridRow: "auto" },
  },
}));

const InstagramLink = styled("a")(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: colors.muted,
  textDecoration: "none",
  "&:hover": { color: colors.bone },
}));

const FeaturedSection = () => {
  const { secondaryFeaturedImages, primaryFeaturedImage } = featuredSectionData;
  const secondary = [
    ...secondaryFeaturedImages.row1,
    ...secondaryFeaturedImages.row2,
  ];

  return (
    <Section id="art" aria-labelledby="arte-titulo">
      <Container>
        <SectionHeader
          id="arte-titulo"
          title="Arte destacado"
          aside={
            <InstagramLink
              href="https://www.instagram.com/estudio_mardetinta/"
              target="_blank"
              rel="noreferrer"
            >
              Ver más en Instagram <FiArrowUpRight aria-hidden="true" />
            </InstagramLink>
          }
        />
        <Grid>
          <FeaturedImageView {...primaryFeaturedImage} primary />
          {secondary.map((image, index) => (
            <FeaturedImageView key={`${image.author}-${index}`} {...image} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default FeaturedSection;
