import { createTheme } from "@mui/material/styles";
import { Cormorant_Garamond, Inter } from "next/font/google";

// Display serif for headings (keeps the studio's classic feel) and a neutral
// sans for everything else.
export const displayFont = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const bodyFont = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

// Ink-black and bone palette. Photography carries the color.
export const colors = {
  ink: "#0a0a0a",
  surface: "#0f0f0f",
  surfaceRaised: "#151515",
  line: "#1f1f1f",
  lineStrong: "#2a2a2a",
  lineBright: "#3a3a3a",
  bone: "#edeae4",
  muted: "#a3a09a",
  subtle: "#8c8984",
};

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

const display = displayFont.style.fontFamily;
const body = bodyFont.style.fontFamily;

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
    mode: "dark",
    primary: {
      main: colors.bone,
      contrastText: colors.ink,
    },
    secondary: {
      main: colors.bone,
      contrastText: colors.ink,
    },
    background_grey: {
      main: colors.surfaceRaised,
    },
    background: {
      default: colors.ink,
      paper: colors.surfaceRaised,
    },
    text: {
      primary: colors.bone,
      secondary: colors.muted,
    },
    divider: colors.line,
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: body,
    h1: {
      fontFamily: display,
      fontWeight: 300,
      fontSize: "clamp(64px, 10vw, 152px)",
      lineHeight: 0.9,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: display,
      fontWeight: 400,
      fontSize: "clamp(40px, 5vw, 64px)",
      lineHeight: 1,
    },
    h3: {
      fontFamily: display,
      fontWeight: 400,
      fontSize: "clamp(34px, 4vw, 52px)",
      lineHeight: 1.05,
    },
    h4: {
      fontFamily: display,
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: 1.1,
    },
    h5: {
      fontFamily: display,
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: 1.1,
    },
    h6: {
      fontFamily: display,
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: 1.2,
    },
    subtitle1: {
      fontFamily: body,
      fontSize: "18px",
      lineHeight: 1.6,
      color: colors.muted,
    },
    body1: {
      fontFamily: body,
      fontSize: "16px",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: body,
      fontSize: "14px",
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: body,
      fontSize: "13px",
      lineHeight: 1.5,
    },
    overline: {
      fontFamily: body,
      fontSize: "13px",
      letterSpacing: "0.18em",
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
    button: {
      fontFamily: body,
      fontSize: "15px",
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: 0,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth", scrollPaddingTop: "88px" },
        body: { backgroundColor: colors.ink, color: colors.bone },
        "::selection": { backgroundColor: colors.bone, color: colors.ink },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: "999px",
          padding: "12px 24px",
          "&.Mui-focusVisible": {
            outline: `2px solid ${colors.bone}`,
            outlineOffset: "3px",
          },
        },
        sizeLarge: { padding: "15px 30px" },
        sizeSmall: { padding: "6px 14px", fontSize: "13px" },
        outlined: {
          borderColor: colors.lineBright,
          color: colors.bone,
          "&:hover": {
            borderColor: colors.bone,
            backgroundColor: "transparent",
          },
        },
        text: {
          color: colors.muted,
          "&:hover": { color: colors.bone, backgroundColor: "transparent" },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.Mui-focusVisible": {
            outline: `2px solid ${colors.bone}`,
            outlineOffset: "2px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: colors.surfaceRaised,
          border: `1px solid ${colors.lineStrong}`,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: { borderRadius: "12px", marginTop: "8px" },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          "&:not(.MuiBackdrop-invisible)": {
            backgroundColor: "rgba(0, 0, 0, 0.72)",
            backdropFilter: "blur(4px)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.lineBright,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.muted,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.bone,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: "8px" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          height: "26px",
          fontSize: "12px",
        },
      },
    },
  },
});

export default theme;
