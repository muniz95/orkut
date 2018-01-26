import React from 'react'
import Main from "../views/Main"
import Login from "../views/Login"
import PrivateLayout from "../layouts/Private"
import { Route } from 'react-router-dom'

export default (
  <PrivateLayout>
    <Route exact path='/' component={Main} key="main" />
    <Route path='/login' component={Login} key="login" />
  </PrivateLayout>
)
