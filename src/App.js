import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Updates from "./components/Updates.js";
import Rightbar from "./components/Rightbar.js";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Updates />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
