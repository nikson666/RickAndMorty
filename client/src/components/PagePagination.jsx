import { Pagination, Stack } from "@mui/material";
import React from "react";

export const PagePagination = (props) => {
  const handleChange = (e, value) => {
    let pageParams = "";
    if (props.searchValue) {
      pageParams = `page=${value}&name=${props.searchValue}`;
    } else {
      pageParams = `page=${value}`;
    }

    props.getUsersPagePagination(pageParams, value);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.info.pages}
        page={props.currentPage}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
};
