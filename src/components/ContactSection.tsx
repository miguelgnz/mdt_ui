import { Box, Button, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { IoTimeOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { contactInfoData } from "@/utils/data";
import ContactInfoIcon from "@/components/ContactInfoIcon";
import BusinessLocationMap from "@/components/BusinessLocationMap";
import Container from "@/components/ui/Container";
import { colors } from "@/styles/theme";

const Section = styled("section")(({ theme }) => ({
  padding: "0 0 112px",
  [theme.breakpoints.down("md")]: {
    padding: "0 0 80px",
  },
}));

const Layout = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "48px",
}));

const Info = styled("div")(() => ({
  flex: "1 1 360px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

const MapFrame = styled("div")(() => ({
  position: "relative",
  flex: "999 1 520px",
  minWidth: 0,
  minHeight: "380px",
  borderRadius: "4px",
  border: `1px solid ${colors.lineStrong}`,
  overflow: "hidden",
  backgroundColor: "#111111",
  backgroundImage:
    "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  display: "flex",
  "& > div": { flex: 1 },
}));

const MapFallback = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  color: colors.muted,
}));

const wazeUrl =
  "https://www.waze.com/live-map/directions?to=ll.14.619648%2C-90.514104";

const descriptions = ["Dirección", "Teléfono", "Instagram"];

const ContactSection = () => {
  const [mapFailed, setMapFailed] = useState(false);

  // Google calls window.gm_authFailure when the API key is rejected; show the
  // styled fallback instead of Google's grey error panel.
  useEffect(() => {
    const win = window as Window & { gm_authFailure?: () => void };
    win.gm_authFailure = () => setMapFailed(true);
    return () => {
      delete win.gm_authFailure;
    };
  }, []);

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "DEFAULT_API_KEY",
  });

  return (
    <Section id="contact" aria-labelledby="ubicacion-titulo">
      <Container>
        <Layout>
          <Info>
            <Typography id="ubicacion-titulo" variant="h2" component="h2">
              Visítanos
            </Typography>
            <Box
              component="dl"
              sx={{
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >
              {contactInfoData.map((e, index) => (
                <ContactInfoIcon
                  key={e.id}
                  icon={e.icon}
                  label={e.label}
                  description={descriptions[index]}
                />
              ))}
              <ContactInfoIcon
                icon={IoTimeOutline}
                label="Lunes a domingo · Únicamente bajo cita"
                description="Horario"
              />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button
                variant="contained"
                href={wazeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar
              </Button>
              <Button
                variant="outlined"
                href="https://wa.me/50231366446"
                target="_blank"
                rel="noreferrer"
              >
                Escríbenos por WhatsApp
              </Button>
            </Box>
          </Info>
          <MapFrame>
            {isLoaded && !mapFailed ? (
              <BusinessLocationMap />
            ) : (
              <MapFallback>
                <FiMapPin size={32} color={colors.bone} aria-hidden="true" />
                <Typography variant="body2">
                  Zona 4, Ciudad de Guatemala
                </Typography>
              </MapFallback>
            )}
          </MapFrame>
        </Layout>
      </Container>
    </Section>
  );
};

export default ContactSection;
