import React from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Collapse,
  Chip,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Rating as MuiRating,
  Select,
  SelectChangeEvent,
  Slider as MuiSlider,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/system";
import { blue } from "@mui/material/colors";
// import { OverridableComponent } from "@mui/types";

interface Props {
  defaultStartValue?: string | number | any | undefined;
  defaultEndValue?: string | number | undefined;
  potentialValues?: string[] | undefined;
  options?: any;
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

function Rating(props: Props) {
  const [rating, setRating] = React.useState<number | null>(
    props.defaultStartValue
  );

  return (
    <Box
      sx={{ display: "flex", "& .MuiTypography-root": { px: 3 } }}
      alignItems="center"
    >
      <MuiRating
        sx={{
          "& .MuiRating-icon": {
            color: blue[500],
          },
        }}
        precision={0.5}
        value={rating}
        readOnly={props.options.readOnly ? props.options.readOnly : false}
        onChange={(_event, newValue: number | null) => {
          setRating(newValue);
        }}
      />
      {props.options.date ? (
        <Typography variant="overline" sx={{ color: alpha("#fff", 0.5) }}>
          {props.options.date}
        </Typography>
      ) : null}
    </Box>
  );
}

function UserRating(props: Props) {
  const { rating, name, description } = props.defaultStartValue;
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleExpand = React.useCallback(
    () => setExpanded((prev) => !prev),
    []
  );

  return (
    <Box sx={{ display: "flex", py: 2 }} alignItems="flex-start">
      <AccountCircleIcon fontSize="large" sx={{ pr: 2 }} />
      <Grid container spacing={3}>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>{name}</Grid>
            <Grid item>
              <Rating
                defaultStartValue={rating}
                options={{ readOnly: true, date: "Last week" }}
              />
            </Grid>
            <Grid item>
              <Box>
                <Collapse in={expanded} collapsedSize="50px">
                  <Typography key="description">{description}</Typography>
                </Collapse>
                <Typography
                  textAlign="right"
                  onClick={handleExpand}
                  sx={{ color: blue[500], cursor: "pointer" }}
                >
                  {expanded ? "...Less" : "...More"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function Radio(_props: Props) {
  return null;
}

export { DropDown, Slider, Increment, Radio, Rating, UserRating };
