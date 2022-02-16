import * as React from "react";

import logo from "../img/logo.png";

import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar as MUIAppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#fff", 0.25),
  },
  marginLeft: 0,
  width: "100%",
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
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2, 1, 2),
  color: "#fff",
}));

interface Props {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function AppBar(props: Props) {
  const { onPageChange } = props;

  const handleClick = React.useCallback(
    (page: number) => {
      onPageChange(page);
    },
    [onPageChange]
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar sx={{ backgroundColor: "#242526" }} position="sticky">
        <Toolbar>
          <Box
            onClick={() => handleClick(0)}
            sx={{ cursor: "pointer", width: "300px", mr: 2 }}
          >
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={logo}
              alt="logo"
            />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>

          <StyledButton onClick={() => handleClick(1)}>
            <Typography>Available Properties</Typography>
          </StyledButton>
          <StyledButton onClick={() => handleClick(2)}>
            <Typography>FAQ</Typography>
          </StyledButton>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
}
