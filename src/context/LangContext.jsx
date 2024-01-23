import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const toggleLang = () => {
    const newLang = lang === "en" ? "id" : "en";
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
};

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLang = () => useContext(LangContext);
