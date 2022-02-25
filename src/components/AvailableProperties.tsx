import React from "react";

import { Box, Grid, Paper } from "@mui/material";

import { AvailablePropertyCards } from "../utils/utilComponents";
import { availPropData } from "../utils/demoData";

import { generateAlphaNumericId } from "../utils/utils";

interface Props {
  isMobile: boolean;
}

export default function AvailableProperties(props: Props) {
  return (
    <Box sx={{ position: "relative", color: "#fff", p: 2 }}>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item display={{ xs: "none", sm: "none", md: "block" }}>
          <Paper sx={{ width: "50vw", height: "80vh", bgcolor: "#555" }}>
            Map
          </Paper>
        </Grid>
        <Grid item flexGrow={1}>
          {availPropData.map(
            (params: {
              img: string;
              amentities: {
                primary: string;
                secondary?: string;
              }[];
              title: string;
              address?: string;
            }) => (
              <AvailablePropertyCards
                key={generateAlphaNumericId(15)}
                defaultStartValue={{
                  isMobile: props.isMobile,
                  data: params,
                }}
              />
            )
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
