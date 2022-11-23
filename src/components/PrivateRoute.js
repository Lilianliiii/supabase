import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from "../pages/Auth"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth()

  return (
  <Route
  {...rest}
  render={(props) => {
    // Renders the page only if 'user' is present (user is authenticated), otherwise is redirected to the login page
    return user? <component {...props} /> : <Redirect to='/login' />}}
  ></Route>
  )
}

export default PrivateRoute
