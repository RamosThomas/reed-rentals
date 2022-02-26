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
    <Box sx={{ position: "relative", color: "#fff", py: 2 }}>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40168.2019956001!2d-104.71406588138257!3d40.394069377134976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645912473754!5m2!1sen!2sus"
              style={{
                border: 0,
                width: "100%",
                height: "100%",
              }}
              loading="lazy"
              sandbox="true"
            ></iframe>
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
