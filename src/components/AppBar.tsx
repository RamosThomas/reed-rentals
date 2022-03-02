import React from "react";

import logo from "../img/logo.png";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar as MUIAppBar,
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  display: "flex",
  cursor: "text",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#fff", 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: "0.25s",
    width: 0,
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1, 2, 1, 2),
  color: "#fff",
}));

interface Props {
  onPageChange: React.Dispatch<React.SetStateAction<string>>;
  onSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

export default function AppBar(props: Props) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDropDownForMobileView = () => {
    setOpen((prev) => !prev);
  };
  const handlePageChange = (page: string) => {
    props.onPageChange(page);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
    >
      <MUIAppBar id="appbar" sx={{ backgroundColor: "#24252e" }}>
        <Toolbar>
          {props.isMobile ? (
            <IconButton
              onClick={handleDropDownForMobileView}
              size="large"
              edge="start"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Box
            onClick={() => handlePageChange("home")}
            sx={{ cursor: "pointer", width: "250px", mr: 2 }}
          >
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={logo}
              alt="logo"
            />
          </Box>
          <Search
            onClick={() => {
              props.onSearchClick(true);
            }}
            sx={{ alignItems: "center" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase />
            <Typography>Search…</Typography>
          </Search>

          <Box display={props.isMobile ? "none" : "flex"}>
            <StyledButton onClick={() => handlePageChange("properties")}>
              <Typography>Available Properties</Typography>
            </StyledButton>
            <StyledButton onClick={() => handlePageChange("faq")}>
              <Typography>FAQ</Typography>
            </StyledButton>
          </Box>
        </Toolbar>
        <Collapse in={open} collapsedSize={0}>
          <Divider sx={{ bgcolor: "#fff", mx: 5 }} />
          <Button
            sx={{ flexGrow: 1, textAlign: "center", py: 1, color: "#fff" }}
            fullWidth
            onClick={() => {
              handleDropDownForMobileView();
              handlePageChange("home");
            }}
          >
            Home
          </Button>
          <Button
            sx={{ flexGrow: 1, textAlign: "center", py: 1, color: "#fff" }}
            fullWidth
            onClick={() => {
              handleDropDownForMobileView();
              handlePageChange("properties");
            }}
          >
            Available Properties
          </Button>
          <Button
            fullWidth
            sx={{ flexGrow: 1, textAlign: "center", py: 1, color: "#fff" }}
            onClick={handleDropDownForMobileView}
          >
            FAQ
          </Button>
        </Collapse>
      </MUIAppBar>
    </Box>
  );
}
