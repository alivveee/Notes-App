import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesApp";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <LangProvider>
          <NotesApp />
        </LangProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
