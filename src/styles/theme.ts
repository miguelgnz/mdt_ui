import { createTheme } from "@mui/material/styles";
import { Cinzel, Montserrat_Alternates } from "next/font/google";

const cinzel = Cinzel({
  style: "normal",
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  weight: "300",
  style: "normal",
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
    fontFamily: montserratAlternates.style.fontFamily,
  },
});

export default theme;
