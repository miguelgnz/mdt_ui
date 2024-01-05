import { createTheme } from "@mui/material/styles";
import { Cinzel, Montserrat_Alternates, Montserrat } from "next/font/google";

const cinzel = Cinzel({
  style: "normal",
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

declare module "@mui/material/styles" {
  interface Palette {
    background_grey: {
      main: string;
    };
  }
  interface PaletteOptions {
    background_grey: {
      main: string;
    };
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background_grey: {
      main: "rgba(45, 44, 44, 0.74)",
    },
    background: {
      default: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: cinzel.style.fontFamily,
      fontSize: "48px",
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
    },
    //For navbar & footer links
    h5: {
      fontFamily: cinzel.style.fontFamily,
      fontSize: "18px",
      fontWeight: 500,
      letterSpacing: '0.57px',
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    h6: {
      fontFamily: cinzel.style.fontFamily,
      fontSize: "16px",
      fontWeight: 500,
      letterSpacing: '0.57px',
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
    body2: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: "14px",
      fontWeight: 300,
      letterSpacing: '0.51px',
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
    },
    button: {
      fontFamily: montserrat.style.fontFamily,
    },

    fontFamily: montserratAlternates.style.fontFamily,
  },
});

export default theme;
