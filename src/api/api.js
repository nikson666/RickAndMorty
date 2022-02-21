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
  getUsersByPage: (url) => {
    return axios.get(url);
  },
};

export const cardApi = {
  getCharacter: (id) => {
    return instance.get(`/character/${id}`);
  },
};
