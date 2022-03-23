import { AppBar } from "@material-ui/core";
import { Button, Toolbar, Typography, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box marginBottom={10}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick and Morty
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
