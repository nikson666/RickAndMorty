import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getIsAuth } from "../redux/reducers/authReducer";

const IsAuthHOC = (Component) => {
  const RedirectComponent = (props) => {
    useEffect(() => {
      props.getIsAuth();
    }, []);
    
    return props.isAuth ? <Component /> : <h1>you dont`t login</h1>;
  };

  const mapStateToProps = (state) => ({
    isAuth: state.authInfo.isAuth,
  });

  return connect(mapStateToProps, { getIsAuth })(RedirectComponent);
};

export default IsAuthHOC;
