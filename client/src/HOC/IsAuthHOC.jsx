import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getIsAuth } from "../redux/reducers/authReducer";

const NotLoginPage = () => {
  const style = {
    wrapper: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  };

  return (
    <Box style={style.wrapper}>
      <h1>You are not authorized!</h1>
    </Box>
  )
}

const IsAuthHOC = (Component) => {
  const RedirectComponent = (props) => {
    useEffect(() => {
      props.getIsAuth();
    }, []);
    
    return props.isAuth ? <Component /> : <NotLoginPage />;
  };

  const mapStateToProps = (state) => ({
    isAuth: state.authInfo.isAuth,
  });

  return connect(mapStateToProps, { getIsAuth })(RedirectComponent);
};

export default IsAuthHOC;
