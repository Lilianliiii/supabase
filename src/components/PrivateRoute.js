import React from "react"
import { Route, Navigate } from 'react-router-dom'

import { useAuth } from "../pages/Auth"

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth()

  return (
  <Route
  {...rest}
  render={(props) => {
    // Renders the page only if 'user' is present (user is authenticated), otherwise is redirected to the login page
    return user? <component {...props} /> : <Navigate to ='/login' />}}
  ></Route>
  )
}
