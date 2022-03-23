import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { PagePagination } from "../../components/PagePagination";
import { SearchInput } from "../../components/SearchInput";
import { User } from "../../components/User";
import IsAuthHOC from "../../HOC/IsAuthHOC";
import { getCard } from "../../redux/reducers/cardReducer";
import {
  getUsers,
  getUsersByName,
  getUsersByURLPage,
  getUsersPagePagination,
  setUsersNameAC,
} from "../../redux/reducers/usersReducer";

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

  return props.users ? (
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {props.users.map((item) => {
          return <User key={item.id} user={item} getCard={props.getCard} />;
        })}
      </Box>
      <PagePagination
        getUsersPagePagination={props.getUsersPagePagination}
        searchValue={props.searchValue}
        getUsersByURLPage={props.getUsersByURLPage}
        info={props.info}
        currentPage={props.currentPage}
      />
    </Box>
  ) : null;
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  card: state.cardPage.card,
  info: state.usersPage.info,
  searchValue: state.usersPage.searchValue,
  currentPage: state.usersPage.currentPage,
  usersName: state.usersPage.usersName,
});

export default IsAuthHOC(
  connect(mapStateToProps, {
    getUsers,
    getCard,
    getUsersByName,
    getUsersByURLPage,
    getUsersPagePagination,
  })(UsersPage)
);
