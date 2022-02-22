import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, Grid, IconButton, Typography } from "@mui/material";

import { Slider, Increment } from "./SearchPropertyComponents";

interface Props {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchPropertiesModal(props: Props) {
  const handleCloseModal = () => {
    props.onClose(false);
  };

  return (
    <Dialog
      PaperProps={{ sx: { backgroundColor: "#242526" } }}
      open={props.open}
      fullWidth
      onBackdropClick={handleCloseModal}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ py: 5 }}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item width="300px">
            <Typography textAlign="center" sx={{ color: "#fff" }} variant="h5">
              Rent
            </Typography>
            <Slider defaultStartValue={500} defaultEndValue={3200} />
          </Grid>
          <Grid item>
            <Typography textAlign="center" sx={{ color: "#fff" }} variant="h5">
              Bedroom(s)
            </Typography>
            <Increment defaultStartValue={1} />
          </Grid>
          <Grid item>
            <Typography textAlign="center" sx={{ color: "#fff" }} variant="h5">
              Bathroom(s)
            </Typography>
            <Increment defaultStartValue={1} />
          </Grid>
          <Grid item>
            <Typography textAlign="center" sx={{ color: "#fff" }} variant="h5">
              Property Type
            </Typography>
          </Grid>
        </Grid>

        <IconButton
          onClick={handleCloseModal}
          sx={{ position: "absolute", right: 0, top: 0 }}
        >
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Dialog>
  );
}
