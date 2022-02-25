import React from "react";

import { Amenities, AvailablePropertyCardType } from "./types";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  ClickAwayListener,
  Collapse,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Rating as MuiRating,
  Select,
  SelectChangeEvent,
  Slider as MuiSlider,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/system";
import { blue, green, red } from "@mui/material/colors";
// import { OverridableComponent } from "@mui/types";

import { generateAlphaNumericId } from "./utils";

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

  const handleChange = React.useCallback(
    (_event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    },
    [setValue]
  );
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
  const handleChange = React.useCallback(
    (value: number) => {
      setNum((prev) =>
        prev + value > 0 && prev + value < 10 ? prev + value : prev
      );
    },
    [setNum]
  );
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

  const handleChange = React.useCallback(
    (event: SelectChangeEvent<typeof val>) => {
      const {
        target: { value },
      } = event;
      setVal(typeof value === "string" ? value.split(",") : value);
    },
    [setVal]
  );
  return (
    <Box
      sx={{
        "& .MuiSvgIcon-root": {
          color: alpha("#fff", 0.5),
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: alpha("#fff", 0.5),
        },
      }}
    >
      <FormControl fullWidth>
        <Select
          value={val}
          multiple
          onChange={handleChange}
          renderValue={(selected) => (
            <Box
              sx={{
                borderColor: "#fff",
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

function PersistentTooltip(props: Props) {
  const { icon, description } = props.defaultStartValue;
  const [open, setOpen] = React.useState<boolean>(false);
  const handleTooltipClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const handleTooltipOpen = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={description}
        >
          <IconButton onClick={handleTooltipOpen}>{icon}</IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}

function AvailablePropertyCards(props: Props) {
  const { isMobile, data: params }: AvailablePropertyCardType =
    props.defaultStartValue;
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [liked, setLiked] = React.useState<boolean>((): boolean => {
    if (document.cookie === undefined) {
      return false;
    }
    return document.cookie
      .split(";")
      .find((key: string) => key.includes(params.title.replaceAll(/\s/g, "")))
      ?.split("=")
      .pop() === undefined
      ? false
      : true;
  });
  const collapsedSize: number = 50;

  const handleLiked = React.useCallback((title: string) => {
    setLiked((prev) => {
      if (prev) {
        // Our cookie is stored
        const escapedTitle: string = title.replaceAll(/\s/g, "");
        document.cookie = `${escapedTitle}=true; expires=${new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toString()} SameSite=None; Secure`;
        return false;
      } else {
        const escapedTitle: string = title.replaceAll(/\s/g, "");
        document.cookie = `${escapedTitle}=true; expires=${new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toString()} SameSite=None; Secure`;
        return true;
      }
    });
  }, []);
  const handleExpand = React.useCallback(
    () => setExpanded((prev) => !prev),
    []
  );
  const getAlphaNumericId = () => {
    const id = generateAlphaNumericId(15);
    return id;
  };

  return (
    <Card
      sx={{
        minWidth: 345,
        my: 1,
        bgcolor: "#24252e",
        "& .MuiCardHeader-subheader": { color: alpha("#fff", 0.5) },
      }}
    >
      <CardHeader
        title={params.title}
        subheader={params.address}
        action={
          <IconButton
            sx={{ color: red[500] }}
            onClick={() => handleLiked(params.title)}
          >
            {liked ? (
              <FavoriteIcon
                sx={{
                  color: red[500],
                  fontSize: 35,
                }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  color: red[500],
                  fontSize: 35,
                }}
              />
            )}
          </IconButton>
        }
      />
      <Box sx={{ width: "100%", height: { xs: 500, sm: 600, md: 500 } }}>
        <CardMedia
          component="img"
          width="100%"
          height="100%"
          image={params.img}
          alt="Home"
        />
      </Box>
      <CardContent>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item sx={{ width: "100%" }}>
            <Typography variant="h6">Details</Typography>
            <Box
              sx={{
                ml: "15%",
                mr: "15%",
                my: 1,
              }}
            >
              <Typography variant="subtitle2">
                Price:
                <b style={{ color: blue[500], float: "right" }}>$1000</b>
              </Typography>
              <Divider sx={{ bgcolor: "#fff" }} />
              <Typography variant="subtitle2">
                Bed(s):
                <b style={{ color: blue[500], float: "right" }}>3</b>
              </Typography>
              <Divider sx={{ bgcolor: "#fff" }} />
              <Typography variant="subtitle2">
                Bath:
                <b style={{ color: blue[500], float: "right" }}>2</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            <Typography variant="h6">Amenities</Typography>
            <Collapse in={expanded} collapsedSize={collapsedSize}>
              <List
                dense={isMobile}
                sx={{
                  borderRight: "1px solid #fff",
                }}
              >
                {params.amentities.map((amenityParams: Amenities) => (
                  <ListItem key={getAlphaNumericId()}>
                    <ListItemText
                      primary={amenityParams.primary}
                      secondary={amenityParams.secondary}
                      secondaryTypographyProps={{ color: blue[500] }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <IconButton onClick={handleExpand}>
              {expanded ? (
                <ArrowDropUpIcon sx={{ color: "#fff", alignSelf: "right" }} />
              ) : (
                <ArrowDropDownIcon sx={{ color: "#fff", alignSelf: "right" }} />
              )}
            </IconButton>
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            <Tooltip
              title={
                <>
                  <p>
                    <b style={{ color: green[500] }}>Green</b> checkmark means
                    the home is available for lease
                  </p>
                  <p>
                    <b style={{ color: blue[500] }}>Blue</b> undetermined mark
                    means someone has inquired, but not signed a lease
                  </p>
                  <p>
                    <b style={{ color: red[500] }}>Red</b> prohibition mark
                    means the home is not available for lease
                  </p>
                </>
              }
              enterTouchDelay={0}
              leaveTouchDelay={4000}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ pb: 2 }}>
                  Availability
                </Typography>
                {
                  {
                    available: (
                      <CheckCircleOutlineIcon
                        sx={{
                          color: green[500],
                          fontSize: 35,
                          width: "100%",
                        }}
                      />
                    ),
                    undetermined: (
                      <IndeterminateCheckBoxIcon
                        sx={{
                          color: blue[500],
                          fontSize: 35,
                          width: "100%",
                        }}
                      />
                    ),
                    unavailable: (
                      <DoNotDisturbIcon
                        sx={{
                          color: red[500],
                          fontSize: 35,
                          width: "100%",
                        }}
                      />
                    ),
                  }[params.availability]
                }
              </Box>
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Radio(_props: Props) {
  return null;
}

export {
  AvailablePropertyCards,
  DropDown,
  Increment,
  PersistentTooltip,
  Radio,
  Rating,
  Slider,
  UserRating,
};
