import { Box, Button, styled, Typography } from "@mui/material";
import { menuData } from "@/utils/data";
import Link from "next/link";
import { SiInstagram, SiTiktok, SiWaze } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { useTheme } from "@mui/material";
import { navigateHomePage } from "@/utils/navigateHomePage";

const MainContainer = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "64px",
  height: "auto",
  margin: "2rem 3rem",
  [theme.breakpoints.down("sm")]: {
    gap: "48px",
  },
}));

const FooterColumn = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "33%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const TitleAndLinksWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
}));

const LinksWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "& > a": {
    textDecoration: "none",
    "& > svg": {
      width: "26px",
      height: "26px",
      color: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& > a": {
      "& > svg": {
        width: "22px",
        height: "22px",
      },
    },
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
  },
}));

const LocationInfoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
  "& > svg": {
    width: "22px",
    height: "22px",
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    "& > svg": {
      width: "16px",
      height: "16px",
    },
  },
}));

const StyledFooterLinkBtn = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  fontSize: "12px",
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <MainContainer>
      <Box
        id="mainContent"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          width: "100%",
          maxWidth: theme.breakpoints.values.lg,
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <FooterColumn>
          <TitleAndLinksWrapper>
            <Typography color="primary" variant="h6">
              ENLACES
            </Typography>
            <LinksWrapper>
              {menuData.menu.items.map((item, index) => {
                return (
                  <StyledFooterLinkBtn
                    size="small"
                    key={index}
                    onClick={() => {
                      navigateHomePage(item.url);
                    }}
                  >
                    {item.text}
                  </StyledFooterLinkBtn>
                );
              })}
            </LinksWrapper>
          </TitleAndLinksWrapper>
        </FooterColumn>
        <FooterColumn>
          <TitleAndLinksWrapper>
            <Typography color="primary" variant="h6">
              UBICACIÓN
            </Typography>
            <LinksWrapper>
              <LocationInfoWrapper>
                <IoLocationOutline />
                <Typography
                  color="primary"
                  variant="body2"
                  sx={{
                    maxWidth: "264px",
                    textAlign: "center",
                  }}
                >
                  Vía 6 02-71 Ruta 3 Edificio Silk local 103 y 102 Zona 4,
                  Ciudad de Guatemala
                </Typography>
              </LocationInfoWrapper>
              <Link
                href="https://www.waze.com/live-map/directions?to=ll.14.619648%2C-90.514104"
                target="_blank"
              >
                <LocationInfoWrapper>
                  <SiWaze />
                  <Typography color="primary" variant="body2">
                    Estudio Mar de Tinta
                  </Typography>
                </LocationInfoWrapper>
              </Link>
            </LinksWrapper>
          </TitleAndLinksWrapper>
          <TitleAndLinksWrapper>
            <Typography color="primary" variant="h6">
              HORARIOS
            </Typography>
            <LinksWrapper>
              <Typography color="primary" variant="body2" textAlign="center">
                Únicamente bajo cita
              </Typography>
              <Typography color="primary" variant="body2" textAlign="center">
                Lunes - Domingo
              </Typography>
              <Typography color="primary" variant="body2" textAlign="center">
                Horarios A.M y P.M
              </Typography>
            </LinksWrapper>
          </TitleAndLinksWrapper>
        </FooterColumn>
        <FooterColumn>
          <TitleAndLinksWrapper>
            <Typography color="primary" variant="h6">
              SIGUENOS
            </Typography>
            <LinksWrapper sx={{ flexDirection: "row", gap: "6px" }}>
              <Link href="https://www.instagram.com/estudio_mardetinta/">
                <SiInstagram />
              </Link>
              <Link href={"#"}>
                <SiTiktok />
              </Link>
              <Link
                href="https://www.waze.com/live-map/directions?to=ll.14.619648%2C-90.514104"
                target="_blank"
              >
                <SiWaze />
              </Link>
            </LinksWrapper>
          </TitleAndLinksWrapper>
        </FooterColumn>
      </Box>
      <Box id="captionWrapper">
        <Typography
          color="primary"
          variant="caption"
          component={"p"}
          textAlign="center"
        >
          Estudio Mar de Tinta 2024. Design & Development:{" "}
          <Link
            href={"https://www.miguelgnz.com/"}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            Miguel Gnz
          </Link>
        </Typography>
      </Box>
    </MainContainer>
  );
};

export default Footer;
