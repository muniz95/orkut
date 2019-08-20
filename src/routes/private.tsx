import React from 'react'
import Main from "../views/Main"
import Profile from "../views/Profile"
import Messages from "../views/Messages"
import PrivateLayout from "../layouts/Private"
import { Route } from 'react-router-dom'

export default (
  <PrivateLayout>
    <React.Fragment>
      <Route exact path='/' component={Main} key="main" />
      <Route path='/profile' component={Profile} key="profile" />
      <Route path='/messages' component={Messages} key="messages" />
    </React.Fragment>
  </PrivateLayout>
)
