/* globals Raven */

/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './redux/store'
import ApiClient from './helpers/ApiClient'
import {Provider} from 'react-redux'
import { Router, browserHistory, match } from 'react-router'
import { ReduxAsyncConnect } from 'redux-async-connect'

import getRoutes from './routes'
const client = new ApiClient()

const dest = document.getElementById('content')
const store = createStore(browserHistory, client, window.__data)
match({ routes: getRoutes(store), history: browserHistory }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <Provider store={store} key="provider">
      <Router
        {...renderProps}
        render={props => <ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} />} />
    </Provider>, dest)
})

if (process.env.NODE_ENV !== 'production') {
  window.React = React // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.')
  }
}
