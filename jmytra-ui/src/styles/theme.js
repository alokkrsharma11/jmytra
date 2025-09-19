import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#d2b48c !important", // applied everywhere
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#d2b48c !important",
          textTransform: "none",
          fontSize: "0.95rem",
          fontWeight: 500,
        },
        selected: {
          color: "#d2b48c !important",
          fontWeight: 700,
        },
      },
    },
  },
});