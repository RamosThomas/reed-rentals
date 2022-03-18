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

import { DropDown, Slider, Increment } from "../utils/utilComponents";

interface Props {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchPropertiesModal(props: Props) {
  const handleCloseModal = React.useCallback(() => {
    props.onClose(false);
  }, []);

  return (
    <Dialog
      PaperProps={{ sx: { backgroundColor: "#24252e" } }}
      open={props.open}
      fullWidth
      onBackdropClick={handleCloseModal}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxHeight: "100%", overflowY: "hidden" }}>
        <IconButton onClick={handleCloseModal} sx={{ position: "fixed" }}>
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ my: 5 }}
        >
          <Grid item minWidth="300px">
            <Typography textAlign="center" sx={{ color: "#fff" }} variant="h5">
              Rent
            </Typography>
            <Slider defaultStartValue={500} defaultEndValue={3200} />
          </Grid>
          <Grid item sx={{ mb: 5 }}>
            <Typography
              textAlign="center"
              sx={{ color: "#fff", mb: 1 }}
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
            />
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
            <Button sx={{ mt: 3 }} variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}
