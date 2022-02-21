import { usersApi } from "../../api/api";
import { usersTypes } from "../types/types";

const initialState = {
  users: null,
  info: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersTypes.GET_USERS:
      return { ...state, users: action.users, info: action.info };
    case usersTypes.GET_USERS_BY_NAME:
      return { ...state, users: action.users, info: action.info };
    case usersTypes.GET_USERS_BY_PAGE:
      return { ...state, users: action.users, info: action.info  };
    default:
      return state;
  }
};

const setUsersAC = (data) => ({
  type: usersTypes.GET_USERS,
  users: data.results,
  info: data.info,
});

const setUsersByNameAC = (data) => ({
  type: usersTypes.GET_USERS_BY_NAME,
  users: data.results,
  info: data.info,
});

const setUsersByPageAC = (data) => ({
  type: usersTypes.GET_USERS_BY_PAGE,
  users: data.results,
  info: data.info,
});

export const getUsers = () => {
  return (dispatch) => {
    usersApi
      .getCharacters()
      .then((response) => dispatch(setUsersAC(response.data)));
  };
};

export const getUsersByName = (name) => {
  return (dispatch) => {
    usersApi
      .searchByName(name)
      .then((response) => dispatch(setUsersByNameAC(response.data)));
  };
};

export const getUsersByPage = (url) => {
  return (dispatch) => {
    usersApi
      .getUsersByPage(url)
      .then((response) => dispatch(setUsersByPageAC(response.data)));
  };
};

export default usersReducer;
