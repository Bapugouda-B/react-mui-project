import {
  AccountBox,
  AddHome,
  AutoStories,
  Group,
  ModeNight,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      {/* home page */}
      <Box position='fixed'>
      <List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <AddHome />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {/* friends  */}
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#friends">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        {/* pages */}
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#pages">
            <ListItemIcon>
              <AutoStories />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        {/* profile */}
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#Profile">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        {/* settings */}
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#Settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        {/* switch color */}
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#Settings">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
