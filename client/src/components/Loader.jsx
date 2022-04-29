import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

const Loader = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress style={{ margin: "0 auto" }} />
    </Box>
  );
};

export default Loader;
