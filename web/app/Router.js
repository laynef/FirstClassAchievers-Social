import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// Pages
import MasterPage from './pages/MasterPage'
import MainPage from './pages/MainPage/MainPage'
import TestimonialPage from './pages/TestimonialPage/TestimonialPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'


export default (
    <Route>

        <Route path="/" component={MasterPage}>
            <IndexRoute component={MainPage} />
            <Route path="testimonials" component={TestimonialPage} />
            <Route path="about" component={AboutUsPage} />
        </Route>

    </Route>
)
