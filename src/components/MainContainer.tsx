import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { blue } from "@mui/material/colors";

import { Box } from "@mui/material";

import useCheckMobileScreen from "../react/hooks/useCheckMobileScreen";

import AppBar from "./AppBar";
import MobileContainer from "./MobileContainer";
import SearchPropertiesModal from "./SearchPropertiesModal";
import Home from "./Home";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#000",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily: [
      // "-apple-system",
      // "BlinkMacSystemFont",
      // '"Segoe UI"',
      // "Roboto",
      // '"Helvetica Neue"',
      // "Arial",
      "sans-serif",
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function MainContainer() {
  const [, setPage] = React.useState<number>(0);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const isMobile: boolean = useCheckMobileScreen();

  return (
    <ThemeProvider theme={theme}>
      <SearchPropertiesModal open={isModalOpen} onClose={setIsModalOpen} />
      <AppBar
        onPageChange={setPage}
        onSearchClick={setIsModalOpen}
        isMobile={isMobile}
      />
      <Box sx={{ pt: 10 }}>{isMobile ? <MobileContainer /> : <Home />}</Box>
    </ThemeProvider>
  );
}
