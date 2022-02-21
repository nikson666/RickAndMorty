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
  getUsersByPage,
} from "../../redux/reducers/usersReducer";

const UsersPage = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  console.log('UserPage users: ', props.users);

  return props.users ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: '20px'
      }}
    >
      <SearchInput getUsersByName={props.getUsersByName} />
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
      <PagePagination getUsersByPage={props.getUsersByPage} info={props.info} />
    </Box>
  ) : null;
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  card: state.cardPage.card,
  info: state.usersPage.info,
});

export default connect(mapStateToProps, {
  getUsers,
  getCard,
  getUsersByName,
  getUsersByPage,
})(UsersPage);
