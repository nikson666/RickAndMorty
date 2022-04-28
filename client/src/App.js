import React from "react";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage/CardPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import { pathsOfRoutes } from "./fileWithConstatns";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path={pathsOfRoutes.login} element={<Login />} />
          <Route path={pathsOfRoutes.root} element={<UsersPage />} />
          <Route path={pathsOfRoutes.card} element={<CardPage />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}
