import { Typography, styled } from "@mui/material";
import { aboutSectionData } from "@/utils/data";
import Image from "next/image";
import AboutSectionBackground from "@/images/about-section.jpg";
import Container from "@/components/ui/Container";
import { colors } from "@/styles/theme";

const Section = styled("section")(({ theme }) => ({
  borderTop: `1px solid ${colors.line}`,
  borderBottom: `1px solid ${colors.line}`,
  background: colors.surface,
  padding: "112px 0",
  [theme.breakpoints.down("md")]: {
    padding: "80px 0",
  },
}));

const Layout = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "56px",
}));

const Photo = styled("div")(() => ({
  position: "relative",
  flex: "999 1 560px",
  minWidth: 0,
  aspectRatio: "16 / 10",
  borderRadius: "4px",
  overflow: "hidden",
}));

const Copy = styled("div")(() => ({
  flex: "1 1 340px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

// The original paragraph is split at its natural break for readability.
const [firstSentence, ...rest] =
  aboutSectionData.description.split(", nosotros ");

const AboutSection = () => {
  return (
    <Section id="about" aria-labelledby="estudio-titulo">
      <Container>
        <Layout>
          <Photo>
            <Image
              src={AboutSectionBackground}
              alt="Fachada del estudio Mar de Tinta"
              fill
              sizes="(min-width: 1200px) 760px, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Photo>
          <Copy>
            <Typography variant="overline" color="text.secondary">
              El estudio
            </Typography>
            <Typography id="estudio-titulo" variant="h3" component="h2">
              {aboutSectionData.title}
            </Typography>
            <Typography color="text.secondary">{firstSentence}.</Typography>
            {rest.length > 0 && (
              <Typography color="text.secondary">
                Nosotros {rest.join(", nosotros ")}
              </Typography>
            )}
          </Copy>
        </Layout>
      </Container>
    </Section>
  );
};

export default AboutSection;
