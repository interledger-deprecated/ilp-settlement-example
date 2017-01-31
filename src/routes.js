import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

export default (store) => {
  const getHome = (nextState, cb) => {
    require.ensure(['./containers/Home/Home'], (require) => {
      cb(null, require('./containers/Home/Home'))
    }, 'home')
  }

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Router>
      <Route path="/">
        <IndexRoute getComponent={getHome}/>
      </Route>
    </Router>
  )
}
