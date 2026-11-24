import { Box, Typography, styled } from "@mui/material";
import Link from "next/link";
import { menuData } from "@/utils/data";
import { navigateHomePage } from "@/utils/navigateHomePage";
import Container from "@/components/ui/Container";
import { colors } from "@/styles/theme";

const wazeUrl =
  "https://www.waze.com/live-map/directions?to=ll.14.619648%2C-90.514104";

const FooterRoot = styled("footer")(() => ({
  borderTop: `1px solid ${colors.line}`,
}));

const Columns = styled("div")(() => ({
  padding: "56px 0 40px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "32px",
}));

const Column = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  color: colors.muted,
}));

const ColumnTitle = styled("span")(() => ({
  fontSize: "12px",
  letterSpacing: "0.18em",
  color: colors.subtle,
  marginBottom: "4px",
}));

const linkStyles = {
  background: "none",
  border: "none",
  padding: 0,
  font: "inherit",
  color: colors.muted,
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": { color: colors.bone },
  "&:focus-visible": {
    outline: `2px solid ${colors.bone}`,
    outlineOffset: "3px",
    borderRadius: "2px",
  },
};

const FooterButton = styled("button")(() => linkStyles);
const FooterLink = styled(Link)(() => linkStyles);

const Footer = () => {
  return (
    <FooterRoot>
      <Container>
        <Columns>
          <Column>
            <Typography
              variant="h6"
              component="span"
              sx={{ color: colors.bone, fontSize: "26px" }}
            >
              Mar de Tinta
            </Typography>
            <span>
              Tattoo &amp; Body Piercing
              <br />
              Vía 6 02-71, Ruta 3, Edificio Silk, locales 102 y 103, Zona 4,
              Ciudad de Guatemala
            </span>
          </Column>
          <Column as="nav" aria-label="Enlaces del pie de página">
            <ColumnTitle>ENLACES</ColumnTitle>
            {menuData.menu.items.map((item) => (
              <FooterButton
                key={item.id}
                type="button"
                onClick={() => navigateHomePage(item.url)}
              >
                {item.text}
              </FooterButton>
            ))}
          </Column>
          <Column>
            <ColumnTitle>HORARIOS</ColumnTitle>
            <span>Únicamente bajo cita</span>
            <span>Lunes a domingo</span>
            <span>Horarios a.m. y p.m.</span>
          </Column>
          <Column>
            <ColumnTitle>SÍGUENOS</ColumnTitle>
            <FooterLink
              href="https://www.instagram.com/estudio_mardetinta/"
              target="_blank"
            >
              Instagram
            </FooterLink>
            <FooterLink href={"#"}>TikTok</FooterLink>
            <FooterLink href={wazeUrl} target="_blank">
              Waze
            </FooterLink>
          </Column>
        </Columns>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 1.5,
            py: 3,
            borderTop: `1px solid ${colors.line}`,
            fontSize: "13px",
            color: colors.subtle,
          }}
        >
          <span>© {new Date().getFullYear()} Estudio Mar de Tinta</span>
          <span>
            Diseño y desarrollo:{" "}
            <Link
              href={"https://www.miguelgnz.dev/"}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline", color: colors.muted }}
            >
              Miguel González
            </Link>
          </span>
        </Box>
      </Container>
    </FooterRoot>
  );
};

export default Footer;
