import React from 'react'
import Main from "../views/Main"
import Profile from "../views/Profile"
import Messages from "../views/Messages"
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  { path: "/", element: <Main /> },
  { path: "/messages", element: <Messages /> },
  { path: "/profile", element: <Profile /> },
];

export default routes;
