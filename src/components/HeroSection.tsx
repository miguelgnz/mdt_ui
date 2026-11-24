import { Box, Button, Typography, keyframes, styled } from "@mui/material";
import Image from "next/image";
import heroImg from "@/images/hero3.jpg";
import detailImg from "@/images/artist2/art2.jpg";
import { heroSectionData } from "@/utils/data";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import AppointmentModal from "@/components/AppointmentModal";
import Container from "@/components/ui/Container";
import { navigateHomePage } from "@/utils/navigateHomePage";
import { colors } from "@/styles/theme";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Section = styled("section")(({ theme }) => ({
  paddingTop: "144px",
  paddingBottom: "96px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "112px",
    paddingBottom: "72px",
  },
}));

const Layout = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "56px",
}));

const Copy = styled("div")(() => ({
  flex: "999 1 520px",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "28px",
}));

// Layered composition: arch-shaped main photo, offset outline, overlapping
// detail shot and a slowly rotating seal with the logo.
const Composition = styled("figure")(({ theme }) => ({
  position: "relative",
  flex: "1 1 400px",
  maxWidth: "520px",
  margin: "0 auto",
  padding: "0 0 56px 56px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 0 40px 32px",
  },
}));

const ArchOutline = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "28px",
  right: "-18px",
  bottom: "84px",
  left: "84px",
  border: `1px solid ${colors.lineStrong}`,
  borderRadius: "999px 999px 6px 6px",
  [theme.breakpoints.down("md")]: {
    top: "16px",
    right: "0",
    left: "52px",
  },
}));

const ArchPhoto = styled("div")(() => ({
  position: "relative",
  aspectRatio: "4 / 5.2",
  borderRadius: "999px 999px 6px 6px",
  overflow: "hidden",
}));

const DetailPhoto = styled("div")(() => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "42%",
  aspectRatio: "1 / 1",
  borderRadius: "6px",
  border: `8px solid ${colors.ink}`,
  overflow: "hidden",
  boxShadow: "0 24px 48px rgba(0, 0, 0, 0.55)",
}));

const Seal = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "12px",
  left: "8px",
  width: "128px",
  height: "128px",
  borderRadius: "50%",
  background: colors.ink,
  border: `1px solid ${colors.lineStrong}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    position: "absolute",
    inset: 0,
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `${spin} 28s linear infinite`,
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "104px",
    height: "104px",
    "& svg": { width: "104px", height: "104px" },
  },
}));

const Tag = styled("figcaption")(() => ({
  position: "absolute",
  right: "16px",
  bottom: "76px",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "rgba(10, 10, 10, 0.8)",
  fontSize: "13px",
  color: colors.bone,
}));

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Section id="home" aria-label="Presentación">
      <Container>
        <Layout>
          <Copy>
            <Typography variant="overline" color="text.secondary">
              Estudio de tatuaje · Zona 4, Ciudad de Guatemala
            </Typography>
            <Typography variant="h1" component="h1">
              Mar
              <br />
              <Box component="span" sx={{ fontStyle: "italic" }}>
                de
              </Box>{" "}
              Tinta
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              {heroSectionData.subtitle}
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: "44ch" }}>
              Llevamos el arte del tatuaje a quienes aprecian una pieza bonita
              en la piel, más allá del tatuaje convencional.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button variant="contained" size="large" onClick={handleOpen}>
                Agenda tu cita
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<FiArrowRight />}
                onClick={() => navigateHomePage("artists")}
              >
                Conoce a los artistas
              </Button>
            </Box>
            <Typography variant="body2" sx={{ color: colors.subtle }}>
              Únicamente bajo cita · Lunes a domingo
            </Typography>
          </Copy>

          <Composition>
            <ArchOutline aria-hidden="true" />
            <ArchPhoto>
              <Image
                src={heroImg}
                alt="Artista tatuando un brazo en el estudio"
                fill
                priority
                sizes="(min-width: 900px) 460px, 90vw"
                style={{ objectFit: "cover", objectPosition: "40% 30%" }}
              />
            </ArchPhoto>
            <DetailPhoto>
              <Image
                src={detailImg}
                alt="Tatuaje de peonías fine line en el antebrazo"
                fill
                sizes="200px"
                style={{ objectFit: "cover" }}
              />
            </DetailPhoto>
            <Seal aria-hidden="true">
              <svg width="128" height="128" viewBox="0 0 128 128">
                <defs>
                  <path
                    id="mdt-seal-path"
                    d="M64,64 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                  />
                </defs>
                <text
                  fill={colors.muted}
                  fontSize="8.5"
                  letterSpacing="2.6"
                  fontFamily="inherit"
                >
                  <textPath href="#mdt-seal-path">
                    MAR DE TINTA · TATTOO &amp; BODY PIERCING ·
                  </textPath>
                </text>
              </svg>
              <Image alt="" src="/mdt-logo.png" width={52} height={52} />
            </Seal>
            <Tag>Black &amp; Grey · Realismo</Tag>
          </Composition>
        </Layout>
      </Container>
      <AppointmentModal modalOpen={modalOpen} handleClose={handleClose} />
    </Section>
  );
};

export default HeroSection;
