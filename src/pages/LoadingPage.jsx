import React from "react";
import { BarLoader} from "react-spinners";
import { useTheme } from "../context/ThemeContext";

const LoadingPage = () => {
  const { theme } = useTheme();
  return (
    <div className="note-app__body">
      <div className="note-loading">
        <div className="loading_container">
          <BarLoader color={theme === "dark" ? "white" : "black"} />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
