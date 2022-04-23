import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cardReducer from "./cardReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  usersPage: usersReducer,
  cardPage: cardReducer,
  authInfo: authReducer
});
