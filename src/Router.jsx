import React from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'

import LandingPage from '@/pages/Landing'

const Router = () => (
  <ReactRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={LandingPage}
      />
    </Switch>
  </ReactRouter>
)

export default Router
