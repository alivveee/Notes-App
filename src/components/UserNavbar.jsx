import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiSolidArchiveIn } from "react-icons/bi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaLanguage } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const UserNavbar = ({ toggleLang, toggleTheme, theme, lang, user, logout }) => {
  return (
    <div className="note-app__header-child">
      <ul>
        <li className="nav-link">
          <Link to={"/"}>
            <FaHome />
          </Link>
        </li>
        <li className="nav-link">
          <Link to={"/archives"}>
            <BiSolidArchiveIn />
          </Link>
        </li>
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
        <li>
          <button className="button-logout" onClick={logout}>
            Logout&nbsp; <IoMdLogOut />
          </button>
        </li>
      </ul>
      <p className="greeting">
        {lang === "en" ? "How’s it going, " : "Apa kabar, "} <b>{user.name}!</b>
      </p>
    </div>
  );
};

UserNavbar.propTypes = {
  toggleLang: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserNavbar;
