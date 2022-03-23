import React from "react";
import { connect } from "react-redux";

const IsAuthHOC = (Component) => {
  const RedirectComponent = (props) => {
    console.log("IsAuthHOC :", props.isAuth);
    return props.isAuth ? <Component /> : <h1>you dont`t login</h1>;
  };

  const mapStateToProps = (state) => ({
    isAuth: state.authInfo.isAuth,
  });

  return connect(mapStateToProps)(RedirectComponent);
};

export default IsAuthHOC;
