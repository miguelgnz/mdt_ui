import { styled } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { colors } from "@/styles/theme";

const FloatingButton = styled("a")(() => ({
  position: "fixed",
  zIndex: 8,
  right: "24px",
  bottom: "24px",
  width: "56px",
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  "&:focus-visible": {
    outline: `2px solid ${colors.bone}`,
    outlineOffset: "3px",
  },
  background: colors.bone,
  color: colors.ink,
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
  transition: "transform 150ms ease",
  "&:hover": { background: "#ffffff", transform: "translateY(-2px)" },
  "& > svg": { width: "26px", height: "26px" },
}));

const StickyButton = () => {
  return (
    <FloatingButton
      href="https://wa.me/50231366446"
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </FloatingButton>
  );
};

export default StickyButton;
