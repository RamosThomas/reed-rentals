import React from "react";

import { Box, Grid } from "@mui/material";

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
        // justifyContent="space-between"
      >
        <Grid
          item
          display={{ xs: "none", sm: "none", md: "block" }}
          sx={{ width: { xs: "0", sm: "0", md: "50%" } }}
        >
          <Box
            sx={{
              top: "5rem",
              height: "85vh",
              bgcolor: "#242526",
              position: "sticky",
            }}
          >
            Google Map
          </Box>
        </Grid>
        <Grid item flexGrow={1} sx={{ width: "50%" }}>
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
