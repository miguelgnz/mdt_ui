import { Fragment } from "react";
import { styled } from "@mui/material";
import Container from "@/components/ui/Container";
import { colors } from "@/styles/theme";

const styles = ["Fine Line", "Black & Grey", "Realismo", "Body Piercing"];

const Strip = styled("div")(() => ({
  borderTop: `1px solid ${colors.line}`,
  borderBottom: `1px solid ${colors.line}`,
}));

const Row = styled("p")(({ theme }) => ({
  margin: 0,
  padding: "22px 0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "12px 32px",
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: "28px",
  fontStyle: "italic",
  color: colors.muted,
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    justifyContent: "center",
  },
}));

// Decorative list of the studio's styles between the hero and the content.
const StylesStrip = () => {
  return (
    <Strip>
      <Container>
        <Row aria-label="Estilos: Fine Line, Black & Grey, Realismo y Body Piercing">
          {styles.map((style, index) => (
            <Fragment key={style}>
              {index > 0 && (
                <span aria-hidden="true" style={{ color: colors.lineBright }}>
                  ✦
                </span>
              )}
              <span aria-hidden="true">{style}</span>
            </Fragment>
          ))}
        </Row>
      </Container>
    </Strip>
  );
};

export default StylesStrip;
