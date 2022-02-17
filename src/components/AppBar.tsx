import React from "react";

import logo from "../img/logo.png";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar as MUIAppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
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
        width: "25ch",
      },
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2, 1, 2),
  color: "#fff",
}));
const StyledMenu = styled(Menu)(() => ({
  color: "inherit",
}));

interface Props {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  isMobile: boolean;
}

export default function AppBar(props: Props) {
  const { onPageChange, isMobile } = props;
  const [, setIsSearchBarFocus] = React.useState<boolean>(false);
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorElement);
  const handleDropDownForMobileView = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElement((prev) => (prev === null ? event.currentTarget : null));
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleFocus = () => {
    setIsSearchBarFocus(true);
  };
  const handleBlur = () => {
    setIsSearchBarFocus(false);
  };
  const handleHomeClick = React.useCallback(
    (page: number) => {
      onPageChange(page);
    },
    [onPageChange]
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "sticky",
        top: 0,
      }}
    >
      <MUIAppBar sx={{ backgroundColor: "#242526" }}>
        <Toolbar>
          {isMobile ? (
            <IconButton
              onClick={handleDropDownForMobileView}
              size="large"
              edge="start"
              color="inherit"
            >
              <StyledMenu
                anchorEl={anchorElement}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>
                  <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
                    Available Properties
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
                    FAQ
                  </Typography>
                </MenuItem>
              </StyledMenu>
              <MenuIcon />
            </IconButton>
          ) : null}
          <Box
            onClick={() => handleHomeClick(0)}
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
            <StyledInputBase
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search…"
            />
          </Search>

          <Box display={isMobile ? "none" : "flex"}>
            <StyledButton onClick={() => handleHomeClick(1)}>
              <Typography>Available Properties</Typography>
            </StyledButton>
            <StyledButton onClick={() => handleHomeClick(2)}>
              <Typography>FAQ</Typography>
            </StyledButton>
          </Box>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
}