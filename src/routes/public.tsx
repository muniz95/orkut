import React from 'react'
import Home from "../views/Home"
import Login from "../views/Login"
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
];

export default routes;
