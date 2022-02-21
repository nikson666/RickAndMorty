import { Box, Input } from "@material-ui/core";
import React from "react";

export const SearchInput = (props) => {
  const onInputChange = (e) => {
    props.getUsersByName(e.target.value);
  };

  return (
    <Box>
      <Input style={{width: '300px', margin: '10px'}} placeholder="SeachByName" onChange={onInputChange} />
    </Box>
  );
};
