import React from 'react'
import LandingPage from '@/pages/Landing'
import {
  BrowserRouter as ReactRouter,
  Route,
  Switch,
} from 'react-router-dom'

const Router = () => (
    <ReactRouter>
        <Switch>
            <Route path="/" exact
            component={LandingPage}
            />
        </Switch>
    </ReactRouter>
)

export default Router
