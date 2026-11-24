import { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import AppointmentModal from "@/components/AppointmentModal";
import Container from "@/components/ui/Container";
import { colors } from "@/styles/theme";

const Section = styled("section")(({ theme }) => ({
  borderTop: `1px solid ${colors.line}`,
  padding: "112px 0",
  [theme.breakpoints.down("md")]: {
    padding: "80px 0",
  },
}));

const Inner = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "28px",
  textAlign: "center",
}));

// Closing call to action that opens the same appointment modal as the hero.
const CtaSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Section aria-labelledby="cita-titulo">
      <Container>
        <Inner>
          <Image src="/mdt-logo.png" alt="" width={72} height={72} />
          <Typography
            id="cita-titulo"
            variant="h2"
            component="h2"
            sx={{
              maxWidth: "16ch",
              fontWeight: 300,
              fontSize: "clamp(44px, 6vw, 84px)",
            }}
          >
            ¿Tienes una idea?{" "}
            <Box component="span" sx={{ fontStyle: "italic" }}>
              Hagámosla tinta.
            </Box>
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: "46ch" }}>
            Cotiza, agenda y conoce los métodos de pago. Aceptamos tarjeta de
            crédito y débito, y Visa Cuotas.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setModalOpen(true)}
          >
            Agenda tu cita
          </Button>
        </Inner>
      </Container>
      <AppointmentModal
        modalOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
      />
    </Section>
  );
};

export default CtaSection;
