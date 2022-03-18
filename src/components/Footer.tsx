import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

import logo from "../img/logo.png";

export default function Footer() {
  return (
    <Box sx={{ py: 3, color: "#fff" }}>
      <Divider sx={{ bgcolor: "#fff", mx: 5 }} />
      <Grid
        container
        justifyContent="space-around"
        sx={{
          position: "relative",
          pt: 10,
          width: "100%",
          bottom: "0px",
          // backgroundColor: "#000",
          color: "#fff",
          zIndex: 50,
          //   display: "flex",
          overflowX: "hidden",
          //   alignItems: "center",
          //   flexDirection: "column",
        }}
      >
        <Grid item xs={5} alignItems="end" sx={{ px: 2 }}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            src={logo}
            alt="Logo"
          />
          <Typography> &copy;2022 - Reed&Alloway</Typography>
        </Grid>
        <Grid item sx={{ px: 2 }}>
          SOCIAL SITES: facebook, twitter
        </Grid>
        <Grid item sx={{ px: 2 }}>
          Some dummy text to have something kind of long here <br />
        </Grid>
      </Grid>
    </Box>
  );
}
