import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchNameAC } from "../redux/reducers/usersReducer";
const _ = require("lodash");

export const SearchInput = (props) => {
  const dispatch = useDispatch();
  const throttleSearchInput = _.throttle((value) => {
    props.getUsersByName(value);
  }, 1000);

  const onInputChange = useCallback((e, value) => {
    dispatch(setSearchNameAC(value));
    throttleSearchInput(value);
    console.log(props.searchValue);
  }, []);

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
