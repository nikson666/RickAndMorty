import { cardApi } from "../../api/api";
import { cardTypes } from "../types/types";

let cardStorage = null;

if (localStorage.getItem("card")) {
  const retrivedCardStorage = localStorage.getItem("card");
  cardStorage = JSON.parse(retrivedCardStorage);
}

const initialState = {
  card: cardStorage,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardTypes.GET_CARD:
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

// action creators
const setCardAC = (card) => ({ type: cardTypes.GET_CARD, payload: card });

// thunk
export const getCard = (id) => {
  return (dispatch) => {
    cardApi
      .getCharacter(id)
      .then((response) => {
        dispatch(setCardAC(response.data));
        return response.data;
      })
      .then((card) => localStorage.setItem("card", JSON.stringify(card)));
  };
};

export default cardReducer;
