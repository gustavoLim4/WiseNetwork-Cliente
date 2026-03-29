import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#019ED5",
      light: "#33B1DD",
      dark: "#006E95",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1D4B89",
      light: "#4A6FA0",
      dark: "#143460",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#424242",
    },
  },

  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    body1: { fontWeight: 400 },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  components: {
    /* ========================
        GLOBAL STYLES (Scroll)
       ======================== */
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },

    /* ========================
        BUTTON
       ======================== */
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "1rem",
          padding: "10px 24px",
          borderRadius: 8,
          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
        },
      },
    },

    /* ========================
      TEXT FIELD
======================== */
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#019ED5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#019ED5",
              borderWidth: 2,
            },
          },
        },
      },
    },

    /* ========================
        SWITCH
       ======================== */
    MuiSwitch: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.5,
          },
        },
        switchBase: {
          "&.Mui-checked": {
            color: "#FFFFFF",
            "& + .MuiSwitch-track": {
              backgroundColor: "#019ED5",
            },
          },
        },
        track: {
          backgroundColor: "#B5B5B5",
        },
      },
    },
  },
});

export default theme;