import { Route, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage/CardPage";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default App;
