import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PagePagination } from "../../components/PagePagination";
import { SearchInput } from "../../components/SearchInput";
import { User } from "../../components/User";
import { getCard } from "../../redux/reducers/cardReducer";
import {
  getUsers,
  getUsersByName,
  getUsersByURLPage,
  getUsersPagePagination,
} from "../../redux/reducers/usersReducer";

const UsersPage = (props) => {
  useEffect(() => {
    if (!props.users) {
      props.getUsers();
    }
  }, []);

  console.log("UserPage users: ", props.users);
  console.log("UserPage info: ", props.info);

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
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {props.users.map((item) => {
          return (
            <User key={item.created} user={item} getCard={props.getCard} />
          );
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
});

export default connect(mapStateToProps, {
  getUsers,
  getCard,
  getUsersByName,
  getUsersByURLPage,
  getUsersPagePagination,
})(UsersPage);
