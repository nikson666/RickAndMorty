import { AppBar } from "@material-ui/core";
import { Button, Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { pathsOfRoutes } from "../fileWithConstatns";

const Header = () => {
  const authInformation = useSelector((state) => state.authInfo);
  const navigate = useNavigate();

  const style = {
    wrapper: {
      marginBottom: "10px",
    },
    logo: {
      textDecoration: "none",
      color: "white",
      padding: "0",
    },
  };

  const onLogin = () => {
    navigate(pathsOfRoutes.login);
  };

  const onLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <Box style={style.wrapper}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={style.logo}
              to={pathsOfRoutes.root}
            >
              Rick and Morty
            </Link>
          </Typography>
          <Button
            onClick={() => (!authInformation.isAuth ? onLogin() : onLogout())}
            color="inherit"
          >
            {!authInformation.isAuth ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
