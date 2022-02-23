import React from "react";

import { Box, Grid, Button, Paper, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Home() {
  return (
    <Box sx={{ mx: 20 }}>
      <Paper sx={{ color: "#fff", bgcolor: "#242526", py: 5, px: 10 }}>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Grid
            container
            sx={{ borderRight: "0.1em solid #fff", px: 2, mx: 5 }}
            direction="column"
            alignItems="flex-end"
          >
            <Grid item>
              <Typography variant="h3">Rentals</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">made</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">easy</Typography>
            </Grid>
          </Grid>
          <Typography>
            Find our Available Properties by clicking the Search tab above to
            find your new home!
          </Typography>
        </Box>
      </Paper>

      <Box>
        <Button
          variant="contained"
          sx={{ textTransform: "none", borderRadius: 25, my: 3 }}
          href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Freedcollegerentals.com%2F&partner=tfwp&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=About%20Us%20%7C%20Reed%20College%20Rentals&url=http%3A%2F%2Freedcollegerentals.com%2Fabout-us%2F&via=reedcollegerent"
        >
          <TwitterIcon sx={{ color: "#fff", mr: 1 }} />
          <Typography sx={{ color: "#fff" }} variant="h5">
            Follow us!
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
