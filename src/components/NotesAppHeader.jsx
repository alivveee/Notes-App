import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ChildHeader from "./UserNavbar";
import { useAuth } from "../context/AuthContext";
import { putAccessToken } from "../api/network-data";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaLanguage } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

function NotesAppHeader() {
  const { authedUser, setAuthedUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    setAuthedUser(null);
    putAccessToken("");
    navigate("/");
  };
  return (
    <>
      <div className="note-app__header">
        <h1>
          <Link to={"/"}>{lang === "en" ? "Notes App" : "Aplikasi Catatan"}</Link>
        </h1>
        {!authedUser && (
          <ul className="header-toggle">
            <li>
              <button className="toggle-lang" onClick={toggleLang}>
                <FaLanguage />
              </button>
            </li>
            <li>
              <button className="toggle-theme" onClick={toggleTheme}>
                {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
              </button>
            </li>
          </ul>
        )}
      </div>
      {authedUser && <ChildHeader user={authedUser} logout={onLogoutHandler} toggleTheme={toggleTheme} theme={theme} lang={lang} toggleLang={toggleLang} />}
    </>
  );
}

export default NotesAppHeader;
