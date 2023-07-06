import React from "react";
import { BrowserRouter as MainRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const getRoutes = (routes) => {
  return routes?.map((route, index) => {
    return (
      <Route key={index} path={route.path} element={route.element}>
        {getRoutes(route.routes)}
      </Route>
    );
  });
};

const Router = () => {
  return (
    <MainRouter>
      <Routes>{getRoutes(routes)}</Routes>
    </MainRouter>
  );
};

export default Router;
