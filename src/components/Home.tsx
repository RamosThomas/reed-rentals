import React from "react";

import { Box, Grid, Divider, Button, Paper, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { blue } from "@mui/material/colors";

import About from "./About";
import { UserRating, UserReview } from "../utils/utilComponents";
import { ratingData } from "../utils/demoData";
import { generateAlphaNumericId } from "../utils/utils";

interface Props {
  isMobile: boolean;
  onPageChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home(props: Props) {
  const handlePageChange = React.useCallback((page: string) => {
    props.onPageChange(page);
  }, []);

  return (
    <Box sx={{ mx: 2, zIndex: 2, position: "relative" }}>
      <Box>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Grid
              container
              sx={{
                borderRight: "0.1em solid #fff",
                color: "#fff",
                pr: 3,
                mb: 3,
              }}
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
          </Grid>
          <Grid item>
            <Paper
              sx={{
                color: "#fff",
                bgcolor: "#24252e",
                maxWidth: 500,
                py: 3,
                px: 5,
              }}
            >
              <Box>
                <Typography>
                  Find our
                  <b
                    style={{
                      color: blue[500],
                      cursor: "pointer",
                    }}
                    onClick={() => handlePageChange("properties")}
                  >
                    {" "}
                    Available Properties{" "}
                  </b>
                  by clicking the Search tab above to find your new home!
                </Typography>
                <br />
                <Typography>
                  Choosing a home is serious business, and can be more stressful
                  than school! Take the time to view our tenant reviews of
                  <b style={{ color: blue[500] }}> Reed Rentals</b>&trade;
                  below.
                </Typography>
                <br />
                <Typography>
                  If you&apos;re a previous tenant and would like to show
                  support, or give insight to living in our homes, feel free to
                  leave a review.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    borderRadius: 25,
                    my: 3,
                  }}
                  href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Freedcollegerentals.com%2F&partner=tfwp&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=About%20Us%20%7C%20Reed%20College%20Rentals&url=http%3A%2F%2Freedcollegerentals.com%2Fabout-us%2F&via=reedcollegerent"
                >
                  <TwitterIcon sx={{ color: "#fff", mr: 1 }} />
                  <Typography sx={{ color: "#fff" }} variant="subtitle1">
                    Follow us!
                  </Typography>
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {props.isMobile ? (
        <>
          <Divider sx={{ bgcolor: "#fff", my: 5 }} />
          <About />
        </>
      ) : null}
      <Divider sx={{ bgcolor: "#fff", my: 5 }} />
      <Box sx={{ color: "#fff", my: 2, px: 5 }}>
        {ratingData.map(
          (params: { rating: number; name: string; description: string }) => (
            <UserRating
              key={generateAlphaNumericId(15)}
              defaultStartValue={{ isMobile: props.isMobile, ...params }}
            />
          )
        )}
      </Box>
      <Divider sx={{ bgcolor: "#fff", my: 5 }} />
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          textAlign: { xs: "center", sm: "center", md: "left" },
        }}
      >
        Submit Feedback
      </Typography>
      <UserReview />
    </Box>
  );
}
