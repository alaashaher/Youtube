import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../../page/home-page/HomePage";
import NotFoundPage from "../../page/not-found-page/NotFoundPage";
import ResultPage from "../../page/result-page/ResultPage";

const Routess = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/result", element: <ResultPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return routes;
};

export default Routess;
