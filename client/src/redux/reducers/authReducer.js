import { authApi } from "../../api/api";
import { authType } from "../types/types";

const initialState = {
  isAuth: false,
  
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authType.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

// Action creators

const setIsAuthAC = (status) => ({
  type: authType.SET_IS_AUTH,
  payload: status,
});

// Thunks

export const getIsAuth = () => {
  return (dispatch) => {
    authApi.google.getAuthStatus().then((response) => {
      const status = response.data.success;
      dispatch(setIsAuthAC(status));
    }).catch(e => console.error(e))
  };
};

export default authReducer;
