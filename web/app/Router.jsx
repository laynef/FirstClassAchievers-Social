import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// Pages
import MasterPage from './pages/MasterPage'
import MainPage from './pages/MainPage/MainPage'


export default (
    <Route>

        <Route path="/" component={MasterPage}>
            <IndexRoute component={MainPage} />
        </Route>

    </Route>
)
