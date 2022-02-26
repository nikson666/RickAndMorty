import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React from "react";

export const SearchInput = (props) => {
  const onInputChange = (e, value) => {
    props.getUsersByName(value);
  };

  return (
    <Autocomplete
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={props.searchValue}
      inputValue={props.searchValue}
      onInputChange={onInputChange}
      id="controllable-states-demo"
      options={props.usersName ? [...new Set(props.usersName)] : []}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Name" />}
    />
  );
};
