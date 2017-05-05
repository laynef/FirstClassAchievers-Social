import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import styles from './sass/index'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import ReduxPromise from 'redux-promise'
import reducers from './redux/store/combineReducers'
import routes from './Router'


const logger = createLogger()
const store = createStore(reducers,
    applyMiddleware(reduxThunk, ReduxPromise, logger)
)

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routes}/>
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('app'))