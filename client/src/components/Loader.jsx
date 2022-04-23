import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", padding: "20vh 0" }}>
      <CircularProgress style={{ margin: "0 auto" }} />
    </Box>
  );
};

export default Loader;
