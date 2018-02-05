import React from 'react'
import Main from "../views/Main"
import Profile from "../views/Profile"
import PrivateLayout from "../layouts/Private"
import { Route } from 'react-router-dom'

export default (
  <PrivateLayout>
    <Route exact path='/' component={Main} key="main" />
    <Route path='/profile' component={Profile} key="login" />
  </PrivateLayout>
)
