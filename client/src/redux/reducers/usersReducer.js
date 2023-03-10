import { usersApi } from "../../api/api";
import { loaderTypes, usersTypes } from "../types/types";

const initialState = {
  users: null,
  usersName: [],
  info: null,
  searchValue: "",
  pageParams: null,
  currentPage: 1,
  isAuth: true,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersTypes.GET_USERS:
      return { ...state, users: action.users, info: action.info };
    case usersTypes.GET_USERS_BY_NAME:
      return { ...state, users: action.users, info: action.info };
    case usersTypes.GET_USERS_BY_PAGE:
      return { ...state, users: action.users, info: action.info };
    case usersTypes.SET_SEARCH_NAME:
      return { ...state, searchValue: action.payload, currentPage: 1 };
    case usersTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case usersTypes.SET_USERS_NAME:
      return {
        ...state,
        usersName: state.users.map((user) => user.name),
      };
    case loaderTypes.SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

const setIsFetching = (status) => ({
  type: loaderTypes.SET_IS_FETCHING,
  payload: status,
});

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

export const setSearchNameAC = (name) => ({
  type: usersTypes.SET_SEARCH_NAME,
  payload: name,
});

export const setCurrentPageAC = (page) => ({
  type: usersTypes.SET_CURRENT_PAGE,
  payload: page,
});

export const setUsersNameAC = () => ({
  type: usersTypes.SET_USERS_NAME,
});

//thunk
export const getUsers = () => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersApi
      .getCharacters()
      .then((response) =>
        response.status === 200 ? dispatch(setUsersAC(response.data)) : null
      )
      .then(() => dispatch(setIsFetching(false)));
  };
};

export const getUsersByName = (name) => {
  return (dispatch) => {
    usersApi
      .searchByName(name)
      .then((response) => dispatch(setUsersByNameAC(response.data)));
  };
};

export const getUsersPagePagination = (pageParams, pageNum) => {
  return (dispatch) => {
    usersApi
      .getUsersPagePaginationRequest(pageParams)
      .then((response) => dispatch(setUsersByPageAC(response.data)))
      .then(() => dispatch(setCurrentPageAC(pageNum)));
  };
};

export default usersReducer;
