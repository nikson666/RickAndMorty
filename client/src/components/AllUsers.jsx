import React from "react";
import { Box } from "@material-ui/core";
import { User } from "./User";
import { useSelector } from "react-redux";

const AllUsers = (props) => {
  const users = useSelector((state) => state.usersPage.users);

  const style = {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, auto))",
      width: "100%",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, auto))",
      width: "100%",
      gridGap: "10px",
      justifyItems: "center",
    },
  };

  return (
    <Box style={style.wrapper}>
      {users.map((item) => {
        return <User key={item.id} user={item} getCard={props.getCard} />;
      })}
    </Box>
  );
};

export default AllUsers;
