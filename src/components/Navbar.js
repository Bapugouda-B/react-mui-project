import { Notifications, Yard } from "@mui/icons-material";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";

// Styling using Material-UI's `styled` function
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  // Initially hide the container on small screens
  display: "none",
  gap: "20px",
  alignItems: "center",
  // On screens with breakpoint of "sm" and larger, display the container as flex
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  // On screens with breakpoint of "sm" and larger, hide the container
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      {/* Top toolbar with app title and search */}
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Bapu Rajj
        </Typography>
        {/* Yard icon for smaller screens */}
        <Yard sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search here ..." />
        </Search>
        {/* Container for mail, notifications, and user avatar */}
        <IconContainer>
          {/* Badge for mail icon */}
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          {/* Badge for notifications icon */}
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          {/* Avatar for user with click event */}
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/myimage.jpg"
            onClick={(event) => setOpen(true)}
          />
        </IconContainer>
        {/* User box with avatar and username */}
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/myimage.jpg"
            onClick={(event) => setOpen(true)}
          />
          <Typography variant="span">Rajj</Typography>
        </UserBox>
      </StyledToolbar>
      {/* Menu for user actions */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(event) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
