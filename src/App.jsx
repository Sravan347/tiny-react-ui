import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter.jsx";
import SearchFunctionality from "./components/SearchFunctionality.jsx";
import Nav from "./components/Nav.jsx";

import {
  CssBaseline,
  Container,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NotFound from "./components/NotFound.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#90caf9",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        <Nav />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/search" element={<SearchFunctionality />} />
             <Route path="*" element={<NotFound/>} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
