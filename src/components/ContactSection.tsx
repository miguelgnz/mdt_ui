import { Typography, styled } from "@mui/material";
import { useLoadScript } from "@react-google-maps/api";
import { contactInfoData } from "@/utils/data";
import ContactInfoIcon from "@/components/ContactInfoIcon";
import BusinessLocationMap from "@/components/BusinessLocationMap";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "54px",
  padding: "64px 16px",
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

const ContactContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "18px",
  flexDirection: "row-reverse",
  width: "100%",
  maxWidth: theme.breakpoints.values.lg,
  height: "500px",
  [theme.breakpoints.down("md")]: {
    height: "1000px",
    flexDirection: "column",
  },
}));

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  width: "50%",
  height: "100%",
  gap: "18px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const MapContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "50%",
  height: "100%",
  borderRadius: "16px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ContactSection = () => {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "DEFAULT_API_KEY",
  });

  return (
    <MainContainer id="contact">
      <SectionTitleWrapper>
        <Typography variant="h4" color="primary" textAlign="center">
          Ubicación / Contacto
        </Typography>
        {/* <Typography variant="body1" color="primary" textAlign="center">
          Ubicación y contacto
        </Typography> */}
      </SectionTitleWrapper>
      <ContactContentWrapper>
        <MapContainer>{isLoaded ? <BusinessLocationMap /> : null}</MapContainer>
        <InfoContainer>
          {contactInfoData.map((e) => {
            return <ContactInfoIcon key={e.id} icon={e.icon} label={e.label} />;
          })}
        </InfoContainer>
      </ContactContentWrapper>
    </MainContainer>
  );
};

export default ContactSection;
