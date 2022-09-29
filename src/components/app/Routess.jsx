import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../../page/home-page/HomePage";
import NotFoundPage from "../../page/not-found-page/NotFoundPage";

const Routess = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return routes;
};

export default Routess;
