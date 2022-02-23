import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const usersApi = {
  getCharacters: () => {
    return instance.get("/character");
  },
  searchByName: (name) => {
    return instance.get(`/character/?name=${name}`);
  },
  getUsersByURLPage: (url) => {
    return axios.get(url);
  },
  getUsersPagePaginationRequest: (pageParams) => {
    return instance.get(`/character/?${pageParams}`);
  },
};

export const cardApi = {
  getCharacter: (id) => {
    return instance.get(`/character/${id}`);
  },
};
