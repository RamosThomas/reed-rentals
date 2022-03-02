import React from "react";

import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function About() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          textAlign: { xs: "center", sm: "center", md: "left" },
        }}
      >
        Reed&#39;s Promise
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#fff",
          px: 5,
          pt: 3,
        }}
      >
        You will <b style={{ color: blue[500] }}>not</b> be dealing with a
        management company that won&#39;t respond to your needs, nor absentee
        landlords that don&#39;t care about what conditions you live in.
        <br />
        <br />
        We hope that we can help you find a home for this coming year.
        <br />
        <br />
        Our current tenants recommend us highly, which we truly appreciate.
        Check them out below!
      </Typography>
    </Box>
  );
}
