import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArchivedPage from "../pages/ArchivedPage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "./Layout";
import { getUserLogged, putAccessToken } from "../api/network-data";
import LoadingPage from "../pages/LoadingPage";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function NotesApp() {
  const { authedUser, initializing, setAuthedUser } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  if (initializing) {
    return null;
  }
  if (!authedUser) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage loginSuccess={onLoginSuccess} />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/archives" element={<ArchivedPage />}></Route>
          <Route path="/add" element={<AddPage />}></Route>
          <Route path="/notes/:id" element={<DetailPage />}></Route>
          <Route path="/loading" element={<LoadingPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}
export default NotesApp;
