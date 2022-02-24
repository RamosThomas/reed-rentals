import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { blue } from "@mui/material/colors";

import { Box, ImageList, ImageListItem } from "@mui/material";
import { itemData } from "./demoData";

import useCheckMobileScreen from "../react/hooks/useCheckMobileScreen";

import AppBar from "./AppBar";
// import MobileContainer from "./MobileContainer";
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
      <Box
        sx={{
          top: 10,
          width: "50%",
          height: "98vh",
          overflowY: "hidden",
          opacity: 0.25,
          position: "fixed",
          zIndex: 1,
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={`${item.img}-${Math.random() * 10000}`}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <SearchPropertiesModal open={isModalOpen} onClose={setIsModalOpen} />
      <AppBar
        onPageChange={setPage}
        onSearchClick={setIsModalOpen}
        isMobile={isMobile}
      />
      <Box sx={{ pt: 10 }}>{isMobile ? <Home /> : <Home />}</Box>
    </ThemeProvider>
  );
}
