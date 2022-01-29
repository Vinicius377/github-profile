import React from "react";
import { Routes, Route } from "react-router-dom";
import OverView from "../pages/Overview";
import Repositories from "../pages/Repositories";
import Follow from "../pages/Follow";

function RouterProvider({ nick }) {
  return (
    <Routes>
      <Route path={`/:user`} exact element={<Follow nick={nick} />} />
      <Route path={`/:user/repo`} element={<Repositories />} />
    </Routes>
  );
}

export default RouterProvider;
