import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { PagePagination } from "../../components/PagePagination";
import { SearchInput } from "../../components/SearchInput";
import AllUsers from "../../components/AllUsers";
import IsAuthHOC from "../../HOC/IsAuthHOC";
import { getCard } from "../../redux/reducers/cardReducer";
import {
  getUsers,
  getUsersByName,
  getUsersPagePagination,
  setUsersNameAC,
} from "../../redux/reducers/usersReducer";
import Loader from "../../components/Loader";

const UsersPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.users) {
      props.getUsers();
    }
  }, []);

  useEffect(() => {
    if (props.users) {
      dispatch(setUsersNameAC());
    }
  }, [props.users]);

  if (props.users) {
    return !props.isFetching ? (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <SearchInput
          searchValue={props.searchValue}
          getUsersByName={props.getUsersByName}
          usersName={props.usersName}
        />
        <AllUsers getCard={props.getCard} />
        <PagePagination
          getUsersPagePagination={props.getUsersPagePagination}
          searchValue={props.searchValue}
          info={props.info}
          currentPage={props.currentPage}
        />
      </Box>
    ) : (
      <Loader />
    );
  } else return null;
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  card: state.cardPage.card,
  info: state.usersPage.info,
  searchValue: state.usersPage.searchValue,
  currentPage: state.usersPage.currentPage,
  usersName: state.usersPage.usersName,
  isFetching: state.usersPage.isFetching,
});

export default IsAuthHOC(
  connect(mapStateToProps, {
    getUsers,
    getCard,
    getUsersByName,
    getUsersPagePagination,
  })(UsersPage)
);
