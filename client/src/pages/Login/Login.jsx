import { Box, Button } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router";
import { pathsOfRoutes } from "../../fileWithConstatns";

const Login = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(pathsOfRoutes.root);
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <Box
      zIndex="1100"
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(0,0,0,0.3)"
      onClick={closeModal}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        backgroundColor={"floralwhite"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDirection={"column"}
        padding="3rem"
        borderRadius={3}
        boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      >
        <Button
          startIcon={<FacebookIcon style={{ width: "30px", height: "30px" }} />}
          style={{ margin: "5px" }}
          fullWidth
          variant="contained"
          onClick={() => facebook()}
        >
          Login with facebook
        </Button>
        <Button
          startIcon={<GoogleIcon style={{ width: "30px", height: "30px" }} />}
          style={{ margin: "5px" }}
          fullWidth
          variant="contained"
          color="error"
          onClick={() => google()}
        >
          Login with google
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
