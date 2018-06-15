import React from 'react'
import Home from "../views/Home"
import Login from "../views/Login"
import PublicLayout from "../layouts/Public"
import { Route } from 'react-router-dom'

export default (
  <PublicLayout>
    <Route exact path='/' component={Home} key="home" />
    <Route path='/login' component={Login} key="login" />
  </PublicLayout>
)
