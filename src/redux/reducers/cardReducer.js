import { cardApi } from "../../api/api";
import { cardTypes } from "../types/types";

const initialState = {
  card: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardTypes.GET_CARD:
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

const setCardAC = (card) => ({ type: cardTypes.GET_CARD, payload: card });

export const getCard = (id) => {
  return (dispatch) => {
    cardApi.getCharacter(id).then((response) => dispatch(setCardAC(response.data)));
  };
};

export default cardReducer;
