import { Box } from "@mui/material";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Updates from "./components/Updates.js";

function App() {
  return (
   <Box>
    <Navbar />
    <Sidebar />
    <Updates />
   </Box>
  );
}

export default App;
