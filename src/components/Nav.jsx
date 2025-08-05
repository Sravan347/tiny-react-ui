
// src/components/Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: 'Counter', path: '/counter' },
    { label: 'Search', path: '/search' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer}>
      <List>
        {navLinks.map((item) => (
          <ListItemButton component={Link} to={item.path} key={item.label}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary" sx={{ backgroundColor: '#1e1e2f' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            navLinks.map((item) => (
              <Typography
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  marginLeft: 2,
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#90caf9',
                    borderBottom: '2px solid #90caf9',
                  },
                }}
              >
                {item.label}
              </Typography>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Nav;
