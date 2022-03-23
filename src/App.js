import React from "react";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage/CardPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import Header from "./components/Header";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<UsersPage />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}
