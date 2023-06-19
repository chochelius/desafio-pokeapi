//use the route path to render page inside the main component

import React from "react";
import "./Main.css";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <main className="main">
        <div className="container
        overflow-scroll
        ">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Main;