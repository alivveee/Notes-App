import React from "react";
import NotesAppHeader from "./NotesAppHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NotesAppHeader />
      <Outlet />
    </>
  );
};

export default Layout;
