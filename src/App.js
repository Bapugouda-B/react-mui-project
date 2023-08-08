import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Updates from "./components/Updates.js";
import Rightbar from "./components/Rightbar.js";
import Addpost from "./components/Addpost.js";
import { useState } from "react";

function App() {
  // State to control the theme mode
  const [mode, setModel] = useState("light");

  // Create a dark theme using MUI's createTheme function
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    // Wrapping the app with the dark theme
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        {/* Stack to arrange components horizontally */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {/* Sidebar component with mode props */}
          <Sidebar setMode={setModel} mode={mode} />
          <Rightbar />
          <Updates />
        </Stack>
        <Addpost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
