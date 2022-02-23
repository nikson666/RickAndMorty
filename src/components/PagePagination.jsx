import { ButtonGroup, Button } from "@material-ui/core";
import React from "react";

export const PagePagination = (props) => {
  const numberFirstPage = 1;
  const numberCurrentPage = props.currentPage;
  const numberPrevPage = numberCurrentPage - 1;
  const numberNextPage = numberCurrentPage + 1;
  const numberLastPage = props.info.pages;

  const onHandlePrevBtn = async () => {
    if (props.info.prev) {
      const prevPage = numberCurrentPage - 1;
      await props.getUsersByURLPage(props.info.prev, prevPage);
    }
  };

  const onHandleNextBtn = async () => {
    if (props.info.next) {
      const nextPage = numberCurrentPage + 1;
      await props.getUsersByURLPage(props.info.next, nextPage);
    }
  };

  const onHandlerPrevPage = () => {
    let pageParams = "";
    if (props.searchValue) {
      pageParams = `page=${numberPrevPage}&name=${props.searchValue}`;
    } else {
      pageParams = `page=${numberPrevPage}`;
    }

    props.getUsersPagePagination(pageParams, numberPrevPage);
  };

  const onHandlerNextPage = () => {
    let pageParams = "";
    if (props.searchValue) {
      pageParams = `page=${numberNextPage}&name=${props.searchValue}`;
    } else {
      pageParams = `page=${numberNextPage}`;
    }

    props.getUsersPagePagination(pageParams, numberNextPage);
  };

  const onHandlerLastPage = () => {
    let pageParams = "";
    if (props.searchValue) {
      pageParams = `page=${numberLastPage}&name=${props.searchValue}`;
    } else {
      pageParams = `page=${numberLastPage}`;
    }

    props.getUsersPagePagination(pageParams, numberLastPage);
  };

  const onHandlerFirstPage = () => {
    let pageParams = "";
    if (props.searchValue) {
      pageParams = `page=${numberFirstPage}&name=${props.searchValue}`;
    } else {
      pageParams = `page=${numberFirstPage}`;
    }

    props.getUsersPagePagination(pageParams, numberFirstPage);
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => onHandlePrevBtn()}>prev</Button>
      {numberCurrentPage === numberLastPage ? (
        <Button onClick={() => onHandlerFirstPage()}>{numberFirstPage}</Button>
      ) : null}
      {numberCurrentPage > 1 ? (
        <Button onClick={() => onHandlerPrevPage()}>{numberPrevPage}</Button>
      ) : null}
      <Button style={{ background: "blue" }}>{numberCurrentPage}</Button>
      {numberNextPage < numberLastPage ? (
        <Button onClick={() => onHandlerNextPage()}>{numberNextPage}</Button>
      ) : null}
      {numberLastPage !== numberCurrentPage ? (
        <Button onClick={() => onHandlerLastPage()}>{numberLastPage}</Button>
      ) : null}
      <Button onClick={() => onHandleNextBtn()}>next</Button>
    </ButtonGroup>
  );
};
