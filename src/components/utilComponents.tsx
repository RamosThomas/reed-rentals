import React from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider as MuiSlider,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/system";
import { blue } from "@mui/material/colors";

interface Props {
  defaultStartValue?: string | number | undefined;
  defaultEndValue?: string | number | undefined;
  potentialValues?: string[] | undefined;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  my: -3,
  color: theme.palette.primary.main,
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

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
      <StyledTypography>
        <b>{num}</b>
      </StyledTypography>
      <IconButton onClick={() => handleChange(1)}>
        <AddIcon sx={{ color: alpha("#fff", 0.5) }} />
      </IconButton>
    </Box>
  );
}

function DropDown(props: Props) {
  const [val, setVal] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof val>) => {
    const {
      target: { value },
    } = event;
    setVal(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box>
      <FormControl fullWidth>
        <Select
          value={val}
          multiple
          onChange={handleChange}
          sx={{
            color: "#fff",
            "& input": {
              borderColor: "white",
            },
          }}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ bgcolor: blue[500] }} />
              ))}
            </Box>
          )}
        >
          {props.potentialValues?.map((potentialValue) => (
            <StyledMenuItem key={potentialValue} value={potentialValue}>
              {potentialValue}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

function Radio(_props: Props) {
  return null;
}

export { DropDown, Slider, Increment, Radio };
