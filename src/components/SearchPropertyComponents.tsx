import React from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  alpha,
  Box,
  IconButton,
  Slider as MuiSlider,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

interface Props {
  defaultStartValue?: string | number | undefined;
  defaultEndValue?: string | number | undefined;
}

function Slider(props: Props) {
  const [value, setValue] = React.useState<number[]>([
    props.defaultStartValue as number,
    props.defaultEndValue as number,
  ]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <MuiSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={5000}
        valueLabelFormat={(val) => `$${val}`}
      />
    </Box>
  );
}

function Increment(props: Props) {
  const [num, setNum] = React.useState<number>(
    props.defaultStartValue as number
  );
  const handleChange = (value: number) => {
    setNum((prev) =>
      prev + value > 0 && prev + value < 10 ? prev + value : prev
    );
  };
  return (
    <Box sx={{ flexGrow: 1, display: "flex", m: 5 }}>
      <IconButton onClick={() => handleChange(-1)}>
        <RemoveIcon sx={{ color: alpha("#fff", 0.5) }} />
      </IconButton>
      <Typography sx={{ color: blue[500], my: -3 }}>
        <b>{num}</b>
      </Typography>
      <IconButton onClick={() => handleChange(1)}>
        <AddIcon sx={{ color: alpha("#fff", 0.5) }} />
      </IconButton>
    </Box>
  );
}

function Radio(_props: Props) {
  return null;
}

export { Slider, Increment, Radio };
