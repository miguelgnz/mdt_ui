import { Box, styled, Typography } from "@mui/material";
import { menuData } from "@/utils/data";
import Link from "next/link";
import { SiInstagram, SiTiktok, SiWaze } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";

const MainContainer = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "32px",
  height: "auto",
  margin: "2rem 3rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginTop: "2rem",
    marginLeft: "2rem",
  },
}));

const FooterColumn = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

const TitleAndLinksWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const LinksWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
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
    color: theme.palette.primary.main
  },
}));

const LocationInfoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "6px",
  "& > svg": {
    width: "18px",
    height: "18px",
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    "& > svg": {
      width: "16px",
      height: "16px",
    },
  },
}));

const Footer = () => {
  return (
    <MainContainer>
      <FooterColumn>
        <TitleAndLinksWrapper>
          <Typography color="primary" variant="h6">
            ENLACES
          </Typography>
          <LinksWrapper>
            {menuData.menu.items.map((item, index) => {
              return (
                <StyledLink key={index} href={item.url}>
                  <Typography color="primary" variant="body2">
                    {item.text}
                  </Typography>
                </StyledLink>
              );
            })}
          </LinksWrapper>
        </TitleAndLinksWrapper>
      </FooterColumn>
      <FooterColumn
        sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <TitleAndLinksWrapper>
          <Typography color="primary" variant="h6">
            UBICACION
          </Typography>
          <LinksWrapper>
            <LocationInfoWrapper>
              <IoLocationOutline />
              <Typography color="primary" variant="body2">
                Ruta 4. 11-41 edificio Silk Local 103
              </Typography>
            </LocationInfoWrapper>
            <LocationInfoWrapper>
              <SiWaze />
              <Typography color="primary" variant="body2">
                Estudio Mar de Tinta
              </Typography>
            </LocationInfoWrapper>
          </LinksWrapper>
        </TitleAndLinksWrapper>
        <TitleAndLinksWrapper>
          <Typography color="primary" variant="h6">
            HORARIOS
          </Typography>
          <LinksWrapper>
            <Typography color="primary" variant="body2">
              Lunes a viernes: 9:00 a.m - 9:00 p.m
            </Typography>
            <Typography color="primary" variant="body2">
              Sábado: 10:00 a.m - 8:00 p.m
            </Typography>
            <Typography color="primary" variant="body2">
              Domingo: Bajo cita
            </Typography>
          </LinksWrapper>
        </TitleAndLinksWrapper>
      </FooterColumn>
      <FooterColumn>
        <TitleAndLinksWrapper>
          <Typography color="primary" variant="h6">
            SIGUE NUESTRO TRABAJO
          </Typography>
          <LinksWrapper sx={{ flexDirection: "row", gap: "6px" }}>
            <Link href={"#"}>
              <SiInstagram />
            </Link>
            <Link href={"#"}>
              <SiTiktok />
            </Link>
          </LinksWrapper>
        </TitleAndLinksWrapper>
      </FooterColumn>
    </MainContainer>
  );
};

export default Footer;
