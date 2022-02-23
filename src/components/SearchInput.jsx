import { Box, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export const SearchInput = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.searchValue);
  }, []);
  const onInputChange = async (e) => {
    props.getUsersByName(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Box>
      <Input
        value={value}
        style={{ width: "300px", margin: "10px" }}
        placeholder="SeachByName"
        onChange={onInputChange}
      />
    </Box>
  );
};
