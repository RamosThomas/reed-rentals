import * as React from "react";

import logo from "../img/logo.png";

import { AppBar as MUIAppBar, Box, Button, Toolbar } from "@mui/material";

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar sx={{ backgroundColor: "#242526" }} position="static">
        <Toolbar>
          <Button size="large" color="inherit" sx={{ width: "50vh", mr: 2 }}>
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={logo}
              alt="logo"
            />
          </Button>
          SEARCH BAR
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
}
