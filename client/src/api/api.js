import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

const googleInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Contriol-Allow-Credentials": true,
  },
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

export const authApi = {
  facebook: {},
  google: {
    getAuthStatus: () => {
      return googleInstance.get("/auth/login/success");
    },
  },
};
