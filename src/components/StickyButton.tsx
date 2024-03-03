import { styled, IconButton } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";

const MainContainer = styled("div")(({ theme }) => ({
  zIndex: "8",
  position: "fixed",
  bottom: "20px",
  right: "20px",
  cursor: "pointer",
  boxShadow: "0px 4px 8px 0px rgba(105, 138, 111, 0.20)",
  borderRadius: "50%",
  background: "#25D366",

  [theme.breakpoints.down("sm")]: {},
}));

const StickyButton = () => {
  return (
    <MainContainer>
      <IconButton
        href="https://wa.me/50231366446"
        rel="noreferrer"
        sx={{
          padding: "12px",
          "& > svg": {
            width: "1.8em",
            height: "1.8em",
            fill: "#FFF",
          },
        }}
      >
        <FaWhatsapp />
      </IconButton>
    </MainContainer>
  );
};

export default StickyButton;
