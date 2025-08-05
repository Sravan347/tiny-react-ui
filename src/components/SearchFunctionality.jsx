import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

const SearchFunctionality = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://json-placeholder.mock.beeceptor.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setAllUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    const results = allUsers.filter((user) =>
      user.name.toLowerCase().includes(value)
    );
    setFilteredUsers(results);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Search Users
          </Typography>
          <TextField
            fullWidth
            label="Search by name"
            variant="outlined"
            value={searchQuery}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />

          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}

          {!loading && !error && (
            <Grid container spacing={3}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <Card
                      sx={{
                        height: "100%",
                        backgroundColor: "background.paper",
                        '&:hover': {
                          boxShadow: 6,
                          backgroundColor: "#2c2c2c",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Email: {user.email || "N/A"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Company: {user.company?.name || "N/A"}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography>No users found.</Typography>
              )}
            </Grid>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SearchFunctionality;
