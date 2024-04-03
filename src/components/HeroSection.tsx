import {
  Button,
  Typography,
  styled,
  Modal,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import heroImg from "@/images/hero-img.jpg";
import { heroSectionData } from "@/utils/data";
import { useState } from "react";
import AppointmentModal from "@/components/AppointmentModal";
import { IoMdClose } from "react-icons/io";

const MainContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "600px",
  [theme.breakpoints.down("md")]: {
    height: "480px",
  },
}));

const HeroContent = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "38px",
  [theme.breakpoints.down("md")]: {},
}));

const TitlesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
}));

const ModalInnerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "16px",
  padding: "16px 64px",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.primary.main,
  minWidth: "600px",
  maxWidth: "800px",
  maxHeight: "calc(100% - 64px)",
  height: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    minWidth: "320px",
    padding: "16px 48px",
    overflow: "auto",
  },
}));

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const mobileView = useMediaQuery("(max-width: 840px)");

  return (
    <MainContainer>
      <Image
        src={heroImg}
        alt="heroImg"
        fill
        style={{
          objectFit: "cover",
          borderRadius: "18px",
          filter: "opacity(0.9)",
          zIndex: "-1",
          padding: "0 16px",
        }}
      />
      <HeroContent>
        <Image
          alt="logo"
          src={"/mdt-logo.png"}
          width={mobileView ? 80 : 120}
          height={mobileView ? 80 : 120}
          style={{
            display: "block",
            filter: "drop-shadow(2px 4px 4px black)",
          }}
        />
        <TitlesWrapper>
          <Typography variant="h1" color={"primary"}>
            {heroSectionData.title}
          </Typography>
          <Typography variant="h4" color={"primary"}>
            {heroSectionData.subtitle}
          </Typography>
        </TitlesWrapper>
        <Button variant="outlined" onClick={handleOpen}>
          {heroSectionData.actionButton}
        </Button>
      </HeroContent>
      <Modal open={modalOpen} onClose={handleClose}>
        <ModalInnerContainer>
          <IconButton
            sx={{
              position: "absolute",
              display: "block",
              right: "4px",
              top: "4px",
              zIndex: "1",
              "& > svg": { fontSize: "1.8rem" },
            }}
            onClick={handleClose}
          >
            <IoMdClose />
          </IconButton>
          <AppointmentModal />
          <Image
            alt="logo"
            src={"/mdt-logo.svg"}
            width={mobileView ? 50 : 70}
            height={mobileView ? 50 : 70}
            style={{
              position: "absolute",
              display: "block",
              left: "16px",
              bottom: "16px",
              zIndex: "-1",
              filter: "drop-shadow(2px 4px 4px grey)",
            }}
          />
        </ModalInnerContainer>
      </Modal>
    </MainContainer>
  );
};

export default HeroSection;
