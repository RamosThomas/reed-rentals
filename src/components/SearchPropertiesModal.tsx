import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { DropDown, Slider, Increment } from "./utilComponents";

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
      <Box>
        <IconButton
          onClick={handleCloseModal}
          sx={{ position: "sticky", right: 0, top: 0 }}
        >
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item minWidth="300px">
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
            <Typography
              textAlign="center"
              sx={{ color: "#fff", pb: 3 }}
              variant="h5"
            >
              Property Type
            </Typography>
            <DropDown
              potentialValues={[
                "Any",
                "Single Family",
                "In House Apartment",
                "Apartment",
                "House",
                "Condo",
              ]}
            ></DropDown>
          </Grid>
          <Grid item>
            <Button sx={{ my: 5 }} variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}
